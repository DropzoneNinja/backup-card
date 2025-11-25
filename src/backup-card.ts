import { LitElement, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { cardStyles } from './styles';
import { validateConfig, parseEntityData } from './config';
import type { BackupCardConfig, BackupEntry, HomeAssistant, LovelaceCard } from './types';
import './components/backup-item';

@customElement('backup-card')
export class BackupCard extends LitElement implements LovelaceCard {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @state() private _config!: BackupCardConfig;
  @state() private _backups: BackupEntry[] = [];
  @state() private _errors: string[] = [];

  static styles = cardStyles;

  public setConfig(config: BackupCardConfig): void {
    this._config = validateConfig(config);
  }

  public getCardSize(): number {
    return 2 + this._backups.length;
  }

  protected updated(changedProps: Map<string | number | symbol, unknown>): void {
    super.updated(changedProps);

    if (changedProps.has('hass') && this._config) {
      this._updateBackups();
    }
  }

  private _updateBackups(): void {
    if (!this.hass || !this._config) {
      return;
    }

    const allBackups: BackupEntry[] = [];
    const allErrors: string[] = [];

    // Get list of entities to process
    const entitiesToProcess = this._config.entities
      ? this._config.entities
      : this._config.entity
        ? [this._config.entity]
        : [];

    // Process each entity
    for (const entityId of entitiesToProcess) {
      const entityState = this.hass.states[entityId];

      if (!entityState) {
        allErrors.push(`Entity "${entityId}" not found`);
        continue;
      }

      const result = parseEntityData(entityState);
      allBackups.push(...result.entries);

      // Add entity ID context to errors
      const contextualErrors = result.errors.map(error => `${entityId}: ${error}`);
      allErrors.push(...contextualErrors);
    }

    this._backups = allBackups;
    this._errors = allErrors;

    if (this._errors.length > 0 && !this._config.show_errors) {
      this._errors.forEach(error => console.warn(`[backup-card] ${error}`));
    }
  }

  render() {
    if (!this._config || !this.hass) {
      return html``;
    }

    return html`
      <ha-card>
        ${this._renderHeader()}
        <div class="backup-card-content">
          ${this._renderErrors()}
          ${this._renderBackups()}
        </div>
      </ha-card>
    `;
  }

  private _renderHeader() {
    if (!this._config.show_header) {
      return '';
    }

    return html`
      <div class="card-header">
        <div class="name">${this._config.title || 'Backup Status'}</div>
      </div>
    `;
  }

  private _renderErrors() {
    if (!this._config.show_errors || this._errors.length === 0) {
      return '';
    }

    return html`
      <div class="error-alert">
        <ha-alert alert-type="warning">
          <strong>Data validation errors:</strong>
          <ul>
            ${this._errors.map(error => html`<li>${error}</li>`)}
          </ul>
        </ha-alert>
      </div>
    `;
  }

  private _renderBackups() {
    if (this._backups.length === 0) {
      return html`
        <ha-alert alert-type="info">No backup data available</ha-alert>
      `;
    }

    return html`
      ${this._backups.map(backup => html`
        <backup-item .backup=${backup} .hass=${this.hass}></backup-item>
      `)}
    `;
  }

  public static getStubConfig(): BackupCardConfig {
    return {
      type: 'custom:backup-card',
      entities: [
        'sensor.backup_pihole',
        'sensor.backup_database',
        'sensor.backup_home_assistant'
      ],
      title: 'Backup Status',
      show_header: true,
      show_errors: false
    };
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'backup-card': BackupCard;
  }

  interface Window {
    customCards?: Array<{
      type: string;
      name: string;
      description: string;
      preview?: boolean;
    }>;
  }
}

// Manual custom element registration for compatibility
if (!customElements.get('backup-card')) {
  customElements.define('backup-card', BackupCard);
}

window.customCards = window.customCards || [];
window.customCards.push({
  type: 'custom:backup-card',
  name: 'Backup Card',
  description: 'Shows Pi-hole backup status',
  preview: true
});
