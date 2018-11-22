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

/**
 * Note: it isn't really fair to complete this question using JS.
 * Javascript objects are basically already in JSON format so serializing and deserializing is probably not as big a deal as it is in Python (no idea)
 * but I'd be doing something similar to this using Jackson/Gson in Java
 */

const serialize = (node) => {
    return JSON.stringify(node);
};

const deserialize = (node) => {
    return JSON.parse(node);
};

class Node {
    constructor(value, left, right) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

const node = new Node(
    'root',
    new Node('left', new Node('left.left')),
    new Node('right')
);

console.log(deserialize(serialize(node)).left.left.value === 'left.left');
