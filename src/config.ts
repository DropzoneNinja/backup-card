import type { BackupCardConfig, BackupSensorState, BackupEntry, ParseResult } from './types';
import { isValidDate } from './helpers/date';
import { isValidDuration } from './helpers/duration';
import { normalizeOutcome } from './helpers/status';

export const DEFAULT_CONFIG: Partial<BackupCardConfig> = {
  show_header: true,
  title: 'Backup Status',
  show_errors: false
};

export function validateConfig(config: any): BackupCardConfig {
  if (!config) {
    throw new Error('Configuration is required');
  }

  const hasEntity = config.entity && typeof config.entity === 'string';
  const hasEntities = config.entities && Array.isArray(config.entities) && config.entities.length > 0;

  if (!hasEntity && !hasEntities) {
    throw new Error('Either "entity" (string) or "entities" (array) is required');
  }

  if (hasEntity && hasEntities) {
    throw new Error('Cannot specify both "entity" and "entities". Use only one.');
  }

  if (hasEntities) {
    const invalidEntities = config.entities.filter((e: any) => typeof e !== 'string');
    if (invalidEntities.length > 0) {
      throw new Error('All entities must be strings');
    }
  }

  return {
    ...DEFAULT_CONFIG,
    ...config,
    type: config.type || 'custom:backup-card'
  } as BackupCardConfig;
}

function validateBackupEntry(data: any, index: number): { entry: BackupEntry | null; error: string | null } {
  const errors: string[] = [];

  if (!data.name || typeof data.name !== 'string') {
    errors.push(`Entry ${index}: Missing or invalid 'name'`);
  }

  if (!data.start || typeof data.start !== 'string') {
    errors.push(`Entry ${index}: Missing or invalid 'start'`);
  } else if (!isValidDate(data.start)) {
    errors.push(`Entry ${index}: Invalid date format for 'start'`);
  }

  const duration = typeof data.duration === 'number' ? data.duration : 0;
  if (!isValidDuration(duration)) {
    errors.push(`Entry ${index}: Invalid duration`);
  }

  if (errors.length > 0) {
    return { entry: null, error: errors.join('; ') };
  }

  try {
    const entry: BackupEntry = {
      name: data.name.trim(),
      start: data.start,
      duration: Math.max(0, duration),
      outcome: normalizeOutcome(data.outcome),
      notes: typeof data.notes === 'string' ? data.notes.trim() : ''
    };

    return { entry, error: null };
  } catch (error) {
    return { entry: null, error: `Entry ${index}: ${error}` };
  }
}

export function parseEntityData(state: BackupSensorState | undefined): ParseResult {
  const result: ParseResult = {
    entries: [],
    errors: []
  };

  if (!state) {
    result.errors.push('Entity state is undefined');
    return result;
  }

  if (!state.attributes) {
    result.errors.push('Entity has no attributes');
    return result;
  }

  if (state.attributes.backups && Array.isArray(state.attributes.backups)) {
    state.attributes.backups.forEach((data, index) => {
      const { entry, error } = validateBackupEntry(data, index);
      if (entry) {
        result.entries.push(entry);
      } else if (error) {
        result.errors.push(error);
      }
    });
    return result;
  }

  if (state.attributes.name || state.attributes.start) {
    const { entry, error } = validateBackupEntry(state.attributes, 0);
    if (entry) {
      result.entries.push(entry);
    } else if (error) {
      result.errors.push(error);
    }
    return result;
  }

  result.errors.push('No backup data found in entity attributes');
  return result;
}
