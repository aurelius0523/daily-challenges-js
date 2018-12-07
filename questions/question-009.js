/**
 * This problem was asked by Airbnb.
 * Given a list of integers, write a function that returns the largest sum of non-adjacent numbers. Numbers can be 0 or negative.
 * For example, [2, 4, 6, 2, 5] should return 13, since we pick 2, 6, and 5. [5, 1, 1, 5] should return 10, since we pick 5 and 5.
 * Follow-up: Can you do this in O(N) time and constant space?
 */

const getMax = (a, b) => {
    if (a > b) {
        return a;
    } else {
        return b;
    }
};

const main09 = (inputs) => {
    let incl = inputs[0];
    let excl = 0;
    let excl_new = 0;

    for (let i = 1; i < inputs.length; i++) {
        excl_new = getMax(incl, excl);
        incl = excl + inputs[i];
        excl = excl_new;
    }
    return getMax(incl, excl);
};

console.log(main09([1, 2, 3, 4, 5, 6, 7]));
