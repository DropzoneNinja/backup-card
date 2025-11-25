import type { BackupOutcome } from '../types';

export function isValidOutcome(outcome: string): outcome is BackupOutcome {
  return outcome === 'success' || outcome === 'failed' || outcome === 'partial';
}

export function normalizeOutcome(outcome: unknown): BackupOutcome {
  if (typeof outcome === 'string') {
    const lower = outcome.toLowerCase();
    if (lower === 'success' || lower === 'ok' || lower === 'completed') {
      return 'success';
    }
    if (lower === 'partial' || lower === 'warning' || lower === 'warn') {
      return 'partial';
    }
    if (lower === 'failed' || lower === 'fail' || lower === 'error') {
      return 'failed';
    }
  }
  console.warn(`Invalid outcome value: ${outcome}, defaulting to 'failed'`);
  return 'failed';
}

export function getStatusIcon(outcome: BackupOutcome): string {
  switch (outcome) {
    case 'success':
      return 'mdi:check-circle';
    case 'partial':
      return 'mdi:alert';
    case 'failed':
      return 'mdi:close-circle';
    default:
      return 'mdi:help-circle';
  }
}

export function getStatusColor(outcome: BackupOutcome): string {
  switch (outcome) {
    case 'success':
      return 'var(--success-color, #4caf50)';
    case 'partial':
      return 'var(--warning-color, #ff9800)';
    case 'failed':
      return 'var(--error-color, #f44336)';
    default:
      return 'var(--disabled-text-color, #9e9e9e)';
  }
}
