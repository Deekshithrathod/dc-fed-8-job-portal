export const getLocation = (locationRestrictions: Array<string>): string => {
  if (locationRestrictions.length === 0) {
    return `Remote`;
  }
  return locationRestrictions[0];
};
