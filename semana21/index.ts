function findFirstRepeatedLetter (string: string): string {
  const str = string.toLowerCase();
  for(let i = 0; i < str.length; i++) {
    let repeatedLettersCount = 0;
    for (let j = 0; j < str.length; j++) {
      if(str[i] === str[j]) {
        repeatedLettersCount ++;
        if (repeatedLettersCount >= 2) {
          return str[i];
        }
      }
    }
  }
  return null;
}
