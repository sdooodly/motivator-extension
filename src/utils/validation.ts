export function isValidWeight(value: string): boolean {
  return /^\d{0,3}(\.\d{0,2})?$/.test(value);
}

export function isValidMilestone(value: string): boolean {
  return /^\d{0,3}(\.\d{0,2})?$/.test(value);
}

export function isNonEmptyString(value: string): boolean {
  return value.trim().length > 0;
} 