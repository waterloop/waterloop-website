/**
 * Converts date from local time to UTC.
 * Commonly used to convert server data, as the server stores and returns all dates in UTC time.
 */
 export const dateToUTC = (date: Date) => _dateToTZ(date, true);

 /**
  * * Converts date from UTC to local time.
  * * NOTE: not needed as server automatically converts from local time to UTC
  */
 export const dateToLocalTime = (date: Date) => _dateToTZ(date, false);
 
 const _dateToTZ = (date: Date, isToUTC: boolean) => {
   let localeDate = new Date(date);
   localeDate.setMinutes(
     localeDate.getMinutes() +
       localeDate.getTimezoneOffset() * (isToUTC ? 1 : -1),
   );
   return localeDate;
 };
 
 
 export default {
   dateToUTC,
   dateToLocalTime,
 };
 