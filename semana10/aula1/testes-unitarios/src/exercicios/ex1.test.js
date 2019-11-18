import { isleapYear } from "./ex1";

describe("Ano bissexto", () => {
  it("Expect 2000 to be a leap year ", () => {
    const year = 2000
    const result = isleapYear(year)
    expect(result).toBe(true);
  });
  it("Expect 2001 not to be a leap year ", () => {
    const year = 2001
    const result = isleapYear(year)
    expect(result).toBe(false);
  });
  it("Expect 2004 to be a leap year ", () => {
    const year = 2004
    const result = isleapYear(year)
    expect(result).toBe(true);
  });
  it("Expect 1700 not to be a leap year ", () => {
    const year = 1700
    const result = isleapYear(year)
    expect(result).toBe(false);
  });
  it("Expect to return null if year its not a number", () => {
    const year = 'abcd'
    const result = isleapYear(year)
    expect(result).toBe(null);
  });
  it("Expect to return null if number is negative",  () => {
    const year = -1000
    const result = isleapYear(year)
    expect(result).toBe(null);
  });
});
