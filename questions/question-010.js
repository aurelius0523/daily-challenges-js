/**
 * This problem was asked by Apple.
 * Implement a job scheduler which takes in a function f and an integer n, and calls f after n milliseconds.
 */

export const main10 = (callback, delay) => {
    setTimeout(callback, delay);
};

main10(() => console.log('hello!'), 3000);
