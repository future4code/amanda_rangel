export function isleapYear(year) {
  if (typeof year !== 'number' )
    return null;
  if (year < 0)
    return null;
  return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
}
  
 

