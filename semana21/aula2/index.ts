const findFirstRecurringCharacter = (input: string): string | null => {
  const charHashMap: { [index: string]: boolean } = {};
  for (const char of input) {
    if (charHashMap[char] === true) {
      return char;
    }
    charHashMap[char] = true;
  }
  return null;
};

//complexidade O(n)

export const func = (
  source: string,
  comparision: string
): boolean => {
  if (
    comparision.length > source.length + 1 ||
    comparision.length < source.length - 1
  ) {
    return false;
  }
  let communCharQuantity = 0;

  for (const char of comparision) {
    if (source !== comparision) {
      communCharQuantity++;
    }
  }
  return (
    communCharQuantity <= source.length + 1 &&
    communCharQuantity >= source.length - 1
  );
};

// complexidade O(n)

export const replaceMatrixValue = (
  matrix: number[][],
  rowIndex: number,
  columnIndex: number,
  value: number
): void => {
  if (
    matrix[rowIndex] === undefined ||
    matrix[rowIndex][columnIndex] === undefined
  ) {
    throw new Error("Fora do intervalo da matriz");
  }

  matrix[rowIndex][columnIndex] = value;
};
// Complexidade O(1)

function verifyIfExistRepeatedNumbers(listOfNumbers: number[]): boolean {
  for (let i = 0; i < listOfNumbers.length; i++) {
    if (listOfNumbers.indexOf(listOfNumbers[i]) !== i) {
      return true;
    }
  }
  return false;
}

//Complexidade O(n²)

// Agorítimos mais eficientes: 
//1) replaceMatrixValue()
//2) findFirstRecurringCharacter() & func()
//3) verifyIfExistRepeatedNumbers()