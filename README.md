# Linked List

You are required to implement a [Linked List](https://en.wikipedia.org/wiki/Linked_list)

Similar to an Array, `linked lists` are a simple linear data structure.

A linked list is a collection of data elements referred to as `NODES`. 
In a basic `linked list` each node contains a value and a reference to the next node.

* Implement a Node to hold a value and pointers to the next node. 
* Implement a `list` which contains a reference to the first and last node and offers an interface for `inserting`, `getting`, and `deleting`, we would also need access to the length of the `list.

- `insert` (*inserts value as the head of the List*);
- `insertAtIndex` (*inserts the provided value at the provided index*);
- `deleteHead` (*remove value at front*);
- `deleteAtIndex` (*remove value at the provided index*);
- `getByIndex` (*fetch the value at the provided index*).


### Notes
- Please do not use any libraries for this implementation 
- Discuss your thoughts as you work through the excercise
- Comment where necessary on your implementation and why you chose this path
- Do not modify the tests to make this pass.

## Setup

```bash
$ npm install
```

## Making the test suite pass
Your goal is to ensure the test suites pass successfully.

```bash
$ npm t
```

## Visualising solution

Visualise your Linked List with:

```bash
$ node run app.js
```