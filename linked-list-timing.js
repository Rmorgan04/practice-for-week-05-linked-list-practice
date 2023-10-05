const LinkedList = require('./linked-list.js');
const DoublyLinkedList = require('./doubly-linked-list.js');

/*
Construct a timing test to verify the time complexities of `addToHead` and
`addToTail` for both singly and doubly linked lists.
*/

const testList = new LinkedList();
const testDouble = new DoublyLinkedList();

let startllh = Date.now();

for (let i = 0; i < 10000; i++) {
    testList.addToHead(i);
}

let endllh = Date.now();

console.log(`Linked List addToHead took ${endllh - startllh} ms`);

let startdlh = Date.now();

for (let i = 0; i < 10000; i++) {
    testDouble.addToHead(i);
}

let enddlh = Date.now();

console.log(`Doubly Linked List addToHead took ${enddlh - startdlh} ms`);

let startllt = Date.now();

for (let i = 0; i < 10000; i++) {
    testList.addToTail(i);
}

let endllt = Date.now();

console.log(`Linked List addToHead took ${endllt - startllt} ms`);

let startdlt = Date.now();

for (let i = 0; i < 10000; i++) {
    testDouble.addToTail(i);
}

let enddlt = Date.now();

console.log(`Doubly Linked List addToHead took ${enddlt - startdlt} ms`);