import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { outcomeBadgeStyles } from '../styles';
import { getStatusIcon } from '../helpers/status';
import type { BackupOutcome } from '../types';

@customElement('outcome-badge')
export class OutcomeBadge extends LitElement {
  @property({ type: String }) outcome: BackupOutcome = 'success';

  static styles = outcomeBadgeStyles;

  render() {
    return html`
      <div class="badge badge-${this.outcome}">
        <ha-icon icon="${getStatusIcon(this.outcome)}"></ha-icon>
        <span>${this.outcome}</span>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'outcome-badge': OutcomeBadge;
  }
}

// Manual custom element registration for compatibility
if (!customElements.get('outcome-badge')) {
  customElements.define('outcome-badge', OutcomeBadge);
}
