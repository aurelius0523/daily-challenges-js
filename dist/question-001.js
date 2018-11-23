'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
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

var numberMap = new Map();

var getNumberWithTotalEqualsDesiredValue = function getNumberWithTotalEqualsDesiredValue(input, index, inputs) {
    var isMatched = inputs[currentIndex] + input === k;
    if (isMatched) {
        putNumberIntoMapWithSmallerNumberAsKey(inputs[currentIndex], input, numberMap);
    }
};

var putNumberIntoMapWithSmallerNumberAsKey = function putNumberIntoMapWithSmallerNumberAsKey(firstNumber, secondNumber, numberMap) {
    var tempNumber = void 0;

    if (firstNumber > secondNumber) {
        tempNumber = secondNumber;
        secondNumber = firstNumber;
        firstNumber = tempNumber;
    }

    numberMap.set(firstNumber, secondNumber);
};

var main = exports.main = function main(inputs, k) {
    var currentIndex = 0;
    for (var i = 0; i < inputs.length; i++) {
        inputs.map(getNumberWithTotalEqualsDesiredValue);
        currentIndex++;
    }

    if (numberMap.size === 0) {
        console.log('No two number equals to K');
    } else {
        numberMap.forEach(function (value, key, map) {
            console.log('numbers with total equal to ' + k + ' is ' + key + ' and ' + value);
        });
    }
};