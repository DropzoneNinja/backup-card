import { css } from 'lit';

export const cardStyles = css`
  :host {
    display: block;
  }

  ha-card {
    height: 100%;
  }

  .card-header {
    padding: 16px;
    border-bottom: 1px solid var(--divider-color);
  }

  .card-header .name {
    font-size: 20px;
    font-weight: 500;
    color: var(--primary-text-color, var(--text-primary-color, #212121));
  }

  .backup-card-content {
    padding: 16px;
  }

  ha-alert {
    margin: 0;
  }

  .error-alert {
    margin-bottom: 16px;
  }
`;

export const backupItemStyles = css`
  .backup-item {
    padding: 12px;
    border-bottom: 1px solid var(--divider-color);
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .backup-item:last-child {
    border-bottom: none;
  }

  .backup-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
  }

  .backup-name {
    font-weight: 500;
    color: var(--primary-text-color, var(--text-primary-color, #212121));
    font-size: 16px;
    flex: 1;
  }

  .backup-details {
    display: flex;
    gap: 16px;
    color: var(--secondary-text-color, var(--text-secondary-color, #727272));
    font-size: 14px;
    flex-wrap: wrap;
  }

  .backup-detail {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  .backup-notes {
    color: var(--secondary-text-color, var(--text-secondary-color, #727272));
    font-size: 14px;
    font-style: italic;
    word-wrap: break-word;
    line-height: 1.4;
  }

  @media (max-width: 600px) {
    .backup-header {
      flex-direction: column;
      align-items: flex-start;
      gap: 8px;
    }

    .backup-details {
      flex-direction: column;
      gap: 4px;
    }
  }
`;

export const outcomeBadgeStyles = css`
  .badge {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 4px 8px;
    border-radius: 12px;
    font-size: 12px;
    font-weight: 500;
    text-transform: uppercase;
    white-space: nowrap;
  }

  .badge-success {
    background: var(--success-color, #4caf50);
    color: white;
  }

  .badge-failed {
    background: var(--error-color, #f44336);
    color: white;
  }

  .badge-partial {
    background: var(--warning-color, #ff9800);
    color: white;
  }

  ha-icon {
    --mdc-icon-size: 16px;
  }
`;
