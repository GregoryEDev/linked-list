const LinkedList = require('./LinkedList')

const list = LinkedList.fromValues(10, 20, 30, 40)
list.print()
list.insertAtIndex(2, 60)
list.print()
list.deleteHead()
list.print()
list.deleteAtIndex(2)
list.print()


