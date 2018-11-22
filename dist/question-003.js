'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Day 003
 * This problem was asked by Google.
 * Given the root to a binary tree, implement serialize(root), which serializes the tree into a string, and deserialize(s), which deserializes the string back into the tree.
 * For example, given the following Node class
 * 
 * class Node:
 *     def __init__(self, val, left=None, right=None):
 *         self.val = val
 *         self.left = left
 *         self.right = right
 * The following test should pass:
 * 
 * node = Node('root', Node('left', Node('left.left')), Node('right'))
 * assert deserialize(serialize(node)).left.left.val == 'left.left'
 * 
 */

var serialize = function serialize(node) {
    return JSON.stringify(node);
};

var deserialize = function deserialize(node) {
    return JSON.parse(node);
};

var Node = function Node(value, left, right) {
    _classCallCheck(this, Node);

    this.value = value;
    this.left = left;
    this.right = right;
};

var a = new Node('root', new Node('left', new Node('left.left')), new Node('right'));

console.log(deserialize(serialize(a)).left.left.value);