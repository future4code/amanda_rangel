export function convertDate (date: Date): string {
  return date.toString().split('T')[0]
}