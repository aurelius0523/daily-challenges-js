"use strict";

/**
 * Day 004
 * This problem was asked by Stripe.
 * Given an array of integers, find the first missing positive integer in linear time and constant space.
 * In other words, find the lowest positive integer that does not exist in the array. The array can contain duplicates and negative numbers as well.
 * For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.
 * You can modify the input array in-place.
 */
var input = [3, 4, -1, 1];

var missingPositiveInteger = 1;
var neverReplaced = true;

var sortNumber = function sortNumber(a, b) {
    return b - a;
};

var sortedInput = input.sort(sortNumber);

for (var i = 0; i < sortedInput.length - 1; i++) {
    var currentValue = sortedInput[i];
    var nextValue = sortedInput[i + 1];

    if (neverReplaced) {
        missingPositiveInteger = currentValue + 1;
        neverReplaced = false;
    }

    if (currentValue > 0 && currentValue - nextValue !== 1 && currentValue - nextValue !== 0) {
        missingPositiveInteger = nextValue + 1;
        break;
    }
}

console.log("lowest positive integer is: " + missingPositiveInteger);