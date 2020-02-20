//primeiro ex

const printNumberIncreasing = (n: number) => {
  if(n >= 0){
    printNumberIncreasing(n-1);
    console.log(n);
  }
}

console.log(printNumberIncreasing(8));

const printNumberDecreasing = (n: number) => {
  if(n >= 0){
    console.log(n);
    printNumberDecreasing(n-1);
    
  }
}

console.log(printNumberDecreasing(8));

// segundo ex

const sumNumbers = (n: number)=> {
  if(n <= 1) {
    return n    
  }
  return n + sumNumbers(n-1)
}

console.log(sumNumbers(5));

// terceiro exercício

const printArray = (array: number[]) => {
  
}
 ""