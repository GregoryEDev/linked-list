class LinkedList {
    insert() {
        throw new Error('Remove this statement and implement this function');
    }

    insertAtIndex() {
        throw new Error('Remove this statement and implement this function');
    }

    deleteHead() {
        throw new Error('Remove this statement and implement this function');
    }

    deleteAtIndex() {
        throw new Error('Remove this statement and implement this function');
    }

    getByIndex() {
        throw new Error('Remove this statement and implement this function');
    }

    /*
    * Do not remove
    * Helper function to visualise the Linked List
    */
    print() {
        let output = ''
        let current = this.head
        while (current) {
            output = `${output}${current.value} => `
            current = current.next
        }

        console.log(`${output}null`)
    }
}

/*
* Do not remove
* Helper function for adding multiple values into the Linked List
*/
LinkedList.fromValues = (...values) => {
    const list = new LinkedList()
    for (let i = values.length - 1; i >= 0; i--) {
        list.insert(values[i])
    }
    return list
}

module.exports = LinkedList