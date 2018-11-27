"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Day 008
 * This interesting interview problem was asked by Google.
 * A unival tree (which stands for “universal value”) is a tree where all nodes have the same value.
 * Given the root to a binary tree, count the number of unival subtrees.
 * For example, the following tree has 5 unival subtree
 *   0
 *  / \
 * 1   0
 *     /\
 *    1  0
 *   / \
 *  1   1
 */

var Node = function Node(value, left, right) {
    _classCallCheck(this, Node);

    this.value = value;
    this.left = left;
    this.right = right;
};

var input = new Node(0, 1, new Node(0, new Node(1, 1, 1), 0));
// const input = new Node(5, new Node(5, 5, 5), new Node(5, 5, 5));
// const input = new Node(5, new Node(1, 5, 5), new Node(5, null, 5));
var findUnivalCount = function findUnivalCount(node) {
    var count = 0;

    if (!node) {
        return 1;
    }

    if (node.left === undefined && node.right === undefined) {
        return 1;
    }

    if (node.value === node.left && node.value === node.right) {
        return findUnivalCount(node.left) + findUnivalCount(node.right) + 1;
    }

    return findUnivalCount(node.left) + findUnivalCount(node.right);
};

console.log(findUnivalCount(input));