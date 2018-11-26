/**
 * Day 006
 * This problem was asked by Google.
 * An XOR linked list is a more memory efficient doubly linked list.
 * Instead of each node holding next and prev fields, it holds a field named both, which is an XOR of the next node and the previous node.
 * Implement an XOR linked list; it has an add(element) which adds the element to the end, and a get(index) which returns the node at index.
 * If using a language that has no pointers (such as Python),
 * you can assume you have access to get_pointer and dereference_pointer functions that converts between nodes and memory addresses.
 */

let pointerToValueMap = new Map();

let linkedList = [];
const add = (value) => {
    if (linkedList.length === 0) {
        linkedList.push(new Node(0, value, 0));
    } else {
        linkedList.push(new Node(linkedList.length - 1, value, x ^ (linkedList.length - 1)));
    }
};

const get = (index) => {};

const getPointer = () => {};

const dereference_pointer = (pointer) => {
    return pointerToValueMap.get(pointer);
};

class Node {
    constructor(index, value, both) {
        this.index = index;
        this.value = value;
        this.both = both;
    }
}
