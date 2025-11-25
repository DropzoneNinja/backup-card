export type BackupOutcome = 'success' | 'failed' | 'partial';

export interface BackupEntry {
  name: string;
  start: string;
  duration: number;
  outcome: BackupOutcome;
  notes: string;
}

export interface BackupCardConfig {
  type: string;
  entity?: string;
  entities?: string[];
  title?: string;
  show_header?: boolean;
  show_errors?: boolean;
}

export interface BackupSensorState {
  state: string;
  attributes: {
    backups?: BackupEntry[];
    name?: string;
    start?: string;
    duration?: number;
    outcome?: string;
    notes?: string;
  };
}

export interface HomeAssistant {
  states: { [entity_id: string]: BackupSensorState };
  locale: {
    language: string;
    time_format: '12' | '24';
  };
  config: {
    unit_system: {
      length: string;
      mass: string;
      temperature: string;
      volume: string;
    };
  };
}

export interface LovelaceCard extends HTMLElement {
  hass?: HomeAssistant;
  setConfig(config: BackupCardConfig): void;
  getCardSize?(): number;
}

export interface ParseResult {
  entries: BackupEntry[];
  errors: string[];
}
