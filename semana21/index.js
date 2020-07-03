function isStringOneEdit (originalStr, transformedStr) {

  const str1 = originalStr.toLowerCase();
  const str2 = transformedStr.toLowerCase();
  const str1Length = str1.length;
  const str2Length = str2.length;


  if(str1Length - str2Length > 1 || str2Length - str1Length > 1){
    return false
  }
  if(str1 === str2) {
    return false
  }

  let differentLetters = 0;

  for (const i of str2) {
    if (str1.indexOf(i) === -1) {
      differentLetters++;
      if (differentLetters > 1) {
        return false
      }
      if (differentLetters >= 1 && (str2Length - str1Length) >= 1) {
        return false
      }
    }
  }
   return true
}