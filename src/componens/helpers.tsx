export const durationString = (durationInMins: string): string => {
    const durInMins = +durationInMins;
    return `${Math.floor(durInMins/60)}h ${durInMins%60}min`
}