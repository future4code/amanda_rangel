import { reverse } from "dns";

export function checkPalindrome (string) {
   const incomeString = string.toLowerCase().replace(/[-\s,]/g, "").replace(/é/gi, "e").replace(/á/gi, "a").replace(/!/gi, "").replace(/,/gi, "")
   const outcomeString = incomeString
      .split('')
      .reverse()
      .join('');
    return incomeString === outcomeString;
}   

  




