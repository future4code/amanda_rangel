//exercício 1

const numbersArray: number[] = [1, 5, 7, 8, 11, 14, 18, 21];

type result = {
    numbersQuantity: number,
    oddNumbersQuantity: number,
    arraySum: number,
};

function displayArrayDetails (numbers: number[]) : result {

    const numbersQuantity = numbers.length;
    const filteredNumbers = numbers.filter((number) => {
        return number % 2 !== 0
    });
    const oddNumbersQuantity = filteredNumbers.length;
    const arraySum = numbers.reduce((a, b) => a + b, 0);

   const result: result = {
        numbersQuantity: numbersQuantity,
        oddNumbersQuantity: oddNumbersQuantity,
        arraySum: arraySum,
    };

   return result;
}

displayArrayDetails(numbersArray);

console.log(displayArrayDetails((numbersArray)));


