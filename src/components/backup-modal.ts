import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import type { BackupEntry, HomeAssistant } from '../types';
import { formatShortDateTime } from '../helpers/date';
import { formatDuration } from '../helpers/duration';
import './outcome-badge';

@customElement('backup-modal')
export class BackupModal extends LitElement {
  @property({ type: Boolean }) open = false;
  @property({ type: Array }) backups: BackupEntry[] = [];
  @property({ type: Object }) hass!: HomeAssistant;

  static styles = css`
    :host {
      display: block;
    }

    .modal-backdrop {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.7);
      z-index: 1000;
      display: flex;
      align-items: center;
      justify-content: center;
      backdrop-filter: blur(2px);
    }

    .modal-container {
      background: var(--card-background-color, #fff);
      max-width: 90vw;
      max-height: 90vh;
      width: 1200px;
      border-radius: 8px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.2),
                  0 24px 38px 3px rgba(0, 0, 0, 0.14),
                  0 9px 46px 8px rgba(0, 0, 0, 0.12);
    }

    .modal-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 16px 24px;
      border-bottom: 1px solid var(--divider-color);
    }

    .modal-header h2 {
      margin: 0;
      font-size: 20px;
      font-weight: 500;
      color: var(--primary-text-color, var(--text-primary-color, #212121));
    }

    .close-button {
      background: none;
      border: none;
      cursor: pointer;
      padding: 8px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background-color 0.2s;
      color: var(--primary-text-color, var(--text-primary-color, #212121));
    }

    .close-button:hover {
      background: var(--secondary-background-color);
    }

    .close-button:focus {
      outline: 2px solid var(--primary-color);
      outline-offset: 2px;
    }

    .modal-content {
      overflow-y: auto;
      padding: 16px;
    }

    .table-header {
      display: grid;
      grid-template-columns: 2fr 1.5fr 1fr 1fr 1fr;
      gap: 12px;
      padding: 12px 16px;
      border-bottom: 1px solid var(--divider-color);
      font-weight: 500;
      color: var(--primary-text-color, var(--text-primary-color, #212121));
      font-size: 14px;
      position: sticky;
      top: 0;
      background: var(--card-background-color, #fff);
      z-index: 1;
    }

    .backup-row {
      border-bottom: 1px solid var(--divider-color);
    }

    .backup-row:last-child {
      border-bottom: none;
    }

    .table-row {
      display: grid;
      grid-template-columns: 2fr 1.5fr 1fr 1fr 1fr;
      gap: 12px;
      padding: 12px 16px;
      align-items: center;
    }

    .table-row-notes {
      grid-column: 1 / -1;
      padding: 0 16px 12px 40px;
      color: var(--secondary-text-color, var(--text-secondary-color, #727272));
      font-style: italic;
      font-size: 14px;
      white-space: pre-wrap;
      word-wrap: break-word;
    }

    .cell-name {
      font-size: 15px;
      font-weight: 500;
      color: var(--primary-text-color, var(--text-primary-color, #212121));
    }

    .cell-datetime,
    .cell-size,
    .cell-duration {
      color: var(--secondary-text-color, var(--text-secondary-color, #727272));
      font-size: 14px;
    }

    .cell-outcome {
      display: flex;
      justify-content: flex-start;
    }

    @media (max-width: 768px) {
      .modal-container {
        max-width: 95vw;
        max-height: 95vh;
      }

      .table-header {
        display: none;
      }

      .backup-row {
        padding: 16px;
        border-bottom: 2px solid var(--divider-color);
      }

      .table-row {
        display: flex;
        flex-direction: column;
        gap: 8px;
        padding: 0;
      }

      .table-row > div {
        display: flex;
        gap: 8px;
      }

      .cell-name {
        font-size: 16px;
        margin-bottom: 8px;
      }

      .cell-datetime::before {
        content: "Date/Time:";
        font-weight: 500;
        color: var(--primary-text-color, var(--text-primary-color, #212121));
      }

      .cell-size::before {
        content: "Size:";
        font-weight: 500;
        color: var(--primary-text-color, var(--text-primary-color, #212121));
      }

      .cell-duration::before {
        content: "Duration:";
        font-weight: 500;
        color: var(--primary-text-color, var(--text-primary-color, #212121));
      }

      .cell-outcome::before {
        content: "Status:";
        font-weight: 500;
        color: var(--primary-text-color, var(--text-primary-color, #212121));
      }

      .table-row-notes {
        padding: 8px 0 0 0;
        margin-top: 8px;
        border-top: 1px solid var(--divider-color);
      }
    }
  `;

  private _close(): void {
    this.dispatchEvent(new CustomEvent('close-modal', {
      bubbles: true,
      composed: true
    }));
  }

  private _handleBackdropClick(e: Event): void {
    if (e.target === e.currentTarget) {
      this._close();
    }
  }

  render() {
    if (!this.open) {
      return html``;
    }

    return html`
      <div class="modal-backdrop" @click=${this._handleBackdropClick}>
        <div class="modal-container" @click=${(e: Event) => e.stopPropagation()}>
          <div class="modal-header">
            <h2>Backup Details</h2>
            <button
              class="close-button"
              @click=${this._close}
              aria-label="Close">
              <ha-icon icon="mdi:close"></ha-icon>
            </button>
          </div>
          <div class="modal-content">
            <div class="table-header">
              <div>Name</div>
              <div>Date/Time</div>
              <div>Size</div>
              <div>Duration</div>
              <div>Status</div>
            </div>
            ${this.backups.map(backup => html`
              <div class="backup-row">
                <div class="table-row">
                  <div class="cell-name">${backup.name}</div>
                  <div class="cell-datetime">${formatShortDateTime(backup.start)}</div>
                  <div class="cell-size">${backup.size || '-'}</div>
                  <div class="cell-duration">${formatDuration(backup.duration)}</div>
                  <div class="cell-outcome">
                    <outcome-badge .outcome=${backup.outcome}></outcome-badge>
                  </div>
                </div>
                ${backup.notes ? html`
                  <div class="table-row-notes">${backup.notes}</div>
                ` : ''}
              </div>
            `)}
          </div>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'backup-modal': BackupModal;
  }
}
