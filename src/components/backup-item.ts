import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { backupItemStyles } from '../styles';
import { formatDateTime } from '../helpers/date';
import { formatDuration } from '../helpers/duration';
import type { BackupEntry, HomeAssistant } from '../types';
import './outcome-badge';

@customElement('backup-item')
export class BackupItem extends LitElement {
  @property({ type: Object }) backup!: BackupEntry;
  @property({ type: Object }) hass!: HomeAssistant;

  static styles = backupItemStyles;

  render() {
    if (!this.backup) {
      return html``;
    }

    const locale = this.hass?.locale?.language || 'en-US';
    const timeFormat = this.hass?.locale?.time_format || '24';

    return html`
      <div class="backup-item">
        <div class="backup-header">
          <span class="backup-name">${this.backup.name}</span>
          <outcome-badge .outcome=${this.backup.outcome}></outcome-badge>
        </div>
        <div class="backup-details">
          <div class="backup-detail">
            <span>${formatDateTime(this.backup.start, locale, timeFormat)}</span>
          </div>
          ${this.backup.outcome !== 'running' ? html`
            <div class="backup-detail">
              <span>Duration: ${formatDuration(this.backup.duration)}</span>
            </div>
          ` : ''}
          ${this.backup.size ? html`
            <div class="backup-detail">
              <span>Size: ${this.backup.size}</span>
            </div>
          ` : ''}
        </div>
        ${this.backup.notes ? html`
          <div class="backup-notes">${this.backup.notes}</div>
        ` : ''}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'backup-item': BackupItem;
  }
}

// Manual custom element registration for compatibility
if (!customElements.get('backup-item')) {
  customElements.define('backup-item', BackupItem);
}
