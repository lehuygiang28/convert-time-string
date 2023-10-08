import { TimeUnitOutPut } from './enums';
/**
 * Converts a time string to a number based on the unit output.
 * @param timeString The time string to convert. Can be in the format of a single time unit (e.g. "1h") or multiple time units separated by spaces or without spaces (e.g. "1h 30m" or "1h30m").
 * The supported time units are:
 * - s: seconds
 * - m: minutes
 * - h: hours
 * - d: days
 * - w: weeks (7 days)
 * - M: months (30 days)
 * - y: years (common 365 days, leap 366 days)
 *
 * @param unitOutPut The unit output to convert to. Defaults to `TimeUnitOutPut.MILLISECOND`.
 * @param leapYear Whether to use 366 days for a year. Defaults to `false`.
 * @returns The converted time value.
 * @throws An error if the time unit is invalid.
 * @example
 * // Convert 30 mins to milliseconds
 * // Defaults to TimeUnitOutPut.MILLISECOND
 * const timeValue = convertTimeString('30m');
 * console.log(timeValue); // Output: 1800000
 *
 * // Convert 1 hour and 30 minutes to milliseconds
 * const timeValue = convertTimeString('1h30m');
 * console.log(timeValue); // Output: 5400000
 *
 * // Convert 1 year 1 day in leap year to milliseconds
 * const timeValue = convertTimeString('1y1d', null, true);
 * console.log(timeValue); // Output: 31708800000
 */
export declare function convertTimeString(timeString: string, unitOutPut?: TimeUnitOutPut, leapYear?: boolean): number;
