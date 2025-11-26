const MONTH_NAMES = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                     'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export function isValidDate(isoString: string): boolean {
  if (!isoString || typeof isoString !== 'string') {
    return false;
  }
  const date = new Date(isoString);
  return !isNaN(date.getTime());
}

export function formatShortDate(isoString: string): string {
  if (!isValidDate(isoString)) {
    return 'Invalid date';
  }
  const date = new Date(isoString);
  const today = new Date();

  // Set both dates to midnight for accurate day comparison
  const dateAtMidnight = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  const todayAtMidnight = new Date(today.getFullYear(), today.getMonth(), today.getDate());

  // Calculate difference in days
  const diffInMs = todayAtMidnight.getTime() - dateAtMidnight.getTime();
  const diffInDays = Math.round(diffInMs / (1000 * 60 * 60 * 24));

  if (diffInDays === 0) {
    return 'Today';
  } else if (diffInDays === 1) {
    return 'Yesterday';
  }

  return `${date.getDate()} ${MONTH_NAMES[date.getMonth()]}`;
}

export function formatShortDateTime(isoString: string): string {
  if (!isValidDate(isoString)) {
    return 'Invalid date';
  }
  const date = new Date(isoString);
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  return `${formatShortDate(isoString)} ${hours}:${minutes}`;
}

export function formatDateTime(
  isoString: string,
  locale: string = 'en-US',
  timeFormat: '12' | '24' = '24'
): string {
  if (!isValidDate(isoString)) {
    return 'Invalid date';
  }

  try {
    const date = new Date(isoString);
    const hour12 = timeFormat === '12';

    const dateFormatter = new Intl.DateTimeFormat(locale, {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });

    const timeFormatter = new Intl.DateTimeFormat(locale, {
      hour: 'numeric',
      minute: '2-digit',
      hour12
    });

    return `${dateFormatter.format(date)} ${timeFormatter.format(date)}`;
  } catch (error) {
    console.warn('Error formatting date:', error);
    return 'Invalid date';
  }
}

export function formatDate(isoString: string, locale: string = 'en-US'): string {
  if (!isValidDate(isoString)) {
    return 'Invalid date';
  }

  try {
    const date = new Date(isoString);
    return new Intl.DateTimeFormat(locale, {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }).format(date);
  } catch (error) {
    console.warn('Error formatting date:', error);
    return 'Invalid date';
  }
}

export function formatTime(
  isoString: string,
  timeFormat: '12' | '24' = '24',
  locale: string = 'en-US'
): string {
  if (!isValidDate(isoString)) {
    return 'Invalid time';
  }

  try {
    const date = new Date(isoString);
    const hour12 = timeFormat === '12';
    return new Intl.DateTimeFormat(locale, {
      hour: 'numeric',
      minute: '2-digit',
      hour12
    }).format(date);
  } catch (error) {
    console.warn('Error formatting time:', error);
    return 'Invalid time';
  }
}
