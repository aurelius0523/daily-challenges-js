"use strict";

/**
 * Day 005
 * This problem was asked by Jane Street.
 * cons(a, b) constructs a pair, and car(pair) and cdr(pair) returns the first and last element of that pair. 
 * For example, car(cons(3, 4)) returns 3, and cdr(cons(3, 4)) returns 4.
 * Given this implementation of cons:
 * def cons(a, b):
    def pair(f):
        return f(a, b)
    return pair
 * Implement car and cdr.
 */

var cons = function cons(a, b) {
    var pair = function pair(f) {
        return f(a, b);
    };
    return pair;
};

var getFirstElement = function getFirstElement(a, b) {
    return a;
};

var getLastElement = function getLastElement(a, b) {
    return b;
};

var car = function car(pair) {
    return pair(getFirstElement);
};

var cdr = function cdr(pair) {
    return pair(getLastElement);
};

console.log(car(cons(3, 4)));
console.log(cdr(cons(3, 4)));