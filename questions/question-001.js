/**
 * Day 001
 * This problem was recently asked by Google.
 * Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
 * For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.
 *
 */

// user inputs
// const inputs = [0, 10, 3, 7];
// const k = 10;

let numberMap = new Map();

const getNumberWithTotalEqualsDesiredValue = (input, index, inputs) => {
    const isMatched = inputs[currentIndex] + input === k;
    if (isMatched) {
        putNumberIntoMapWithSmallerNumberAsKey(
            inputs[currentIndex],
            input,
            numberMap
        );
    }
};

const putNumberIntoMapWithSmallerNumberAsKey = (
    firstNumber,
    secondNumber,
    numberMap
) => {
    let tempNumber;

    if (firstNumber > secondNumber) {
        tempNumber = secondNumber;
        secondNumber = firstNumber;
        firstNumber = tempNumber;
    }

    numberMap.set(firstNumber, secondNumber);
};

export const main = (inputs, k) => {
    let currentIndex = 0;
    for (let i = 0; i < inputs.length; i++) {
        inputs.map(getNumberWithTotalEqualsDesiredValue);
        currentIndex++;
    }

    if (numberMap.size === 0) {
        console.log('No two number equals to K');
    } else {
        numberMap.forEach((value, key, map) => {
            console.log(
                `numbers with total equal to ${k} is ${key} and ${value}`
            );
        });
    }
};
