import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import type { BackupEntry, HomeAssistant } from '../types';
import { formatShortDate } from '../helpers/date';
import './outcome-badge';

@customElement('backup-table')
export class BackupTable extends LitElement {
  @property({ type: Array }) backups: BackupEntry[] = [];
  @property({ type: Object }) hass!: HomeAssistant;

  static styles = css`
    :host {
      display: block;
    }

    .table-header {
      display: grid;
      grid-template-columns: 2fr 1fr 1fr;
      gap: 12px;
      padding: 12px;
      border-bottom: 1px solid var(--divider-color);
      font-weight: 500;
      color: var(--primary-text-color, var(--text-primary-color, #212121));
      font-size: 14px;
    }

    .table-row {
      display: grid;
      grid-template-columns: 2fr 1fr 1fr;
      gap: 12px;
      padding: 12px;
      border-bottom: 1px solid var(--divider-color);
      cursor: pointer;
      transition: background-color 0.2s;
      min-height: 44px;
      align-items: center;
    }

    .table-row:last-child {
      border-bottom: none;
    }

    .table-row:hover {
      background: var(--secondary-background-color);
    }

    .table-row:focus {
      outline: 2px solid var(--primary-color);
      outline-offset: -2px;
    }

    .cell-name {
      font-size: 16px;
      font-weight: 500;
      color: var(--primary-text-color, var(--text-primary-color, #212121));
    }

    .cell-date {
      color: var(--secondary-text-color, var(--text-secondary-color, #727272));
      font-size: 14px;
    }

    .cell-outcome {
      display: flex;
      justify-content: flex-start;
    }

    @media (max-width: 600px) {
      .table-header,
      .table-row {
        grid-template-columns: 1.5fr 1fr 1fr;
      }

      .cell-name {
        font-size: 14px;
      }

      .cell-date {
        font-size: 13px;
      }
    }
  `;

  private _handleRowClick(backup: BackupEntry): void {
    this.dispatchEvent(new CustomEvent('row-click', {
      detail: { backup },
      bubbles: true,
      composed: true
    }));
  }

  render() {
    return html`
      <div class="table-header">
        <div>Name</div>
        <div>Date</div>
        <div>Status</div>
      </div>
      ${this.backups.map(backup => html`
        <div
          class="table-row"
          @click=${() => this._handleRowClick(backup)}
          role="button"
          tabindex="0"
          @keydown=${(e: KeyboardEvent) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              this._handleRowClick(backup);
            }
          }}
          aria-label="View backup details for ${backup.name}">
          <div class="cell-name">${backup.name}</div>
          <div class="cell-date">${formatShortDate(backup.start)}</div>
          <div class="cell-outcome">
            <outcome-badge .outcome=${backup.outcome}></outcome-badge>
          </div>
        </div>
      `)}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'backup-table': BackupTable;
  }
}
