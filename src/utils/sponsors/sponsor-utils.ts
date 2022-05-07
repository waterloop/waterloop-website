export const timestampMillisecToTermSeasonYear = (timestamp: number) => {
  const date = new Date(timestamp);

  // TODO: Enumerate term seasons.
  // NOTE: Months are 0-indexed.
  let season = 'WINTER';

  if (date.getMonth() > 3) {
    season = 'SPRING';
  }

  if (date.getMonth() > 7) {
    season = 'FALL';
  }

  return {
    termSeason: season,
    termYear: date.getFullYear(),
  }
};
