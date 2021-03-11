const LinkedList = require('../src/LinkedList')

describe('LinkedList', () => {
    describe('insert', () => {
        it('adds the element to the head of the list', () => {
            const list = new LinkedList()
            list.insert(10)
            const oldHead = list.head
            list.insert(20)

            expect(list.head.value).toBe(20)
            expect(list.head.next).toEqual(oldHead)
            expect(list.length).toBe(2)
        })
    })

    describe('insertAtIndex', () => {
        describe('insert with index less than 0', () => {
            it('should not insert anything', () => {
                const list = LinkedList.fromValues(10, 20)
                list.insertAtIndex(-1, 30)

                expect(list.length).toBe(2)
            })
        })

        describe('insert with index greater than list length', () => {
            it('should not insert anything', () => {
                const list = LinkedList.fromValues(10, 20)
                list.insertAtIndex(5, 30)

                expect(list.length).toBe(2)
            })

        })

        describe('insert with index 0', () => {
            it('should insert at the head', () => {
                const list = LinkedList.fromValues(10, 20)
                list.insertAtIndex(0, 30)

                expect(list.head.value).toBe(30)
                expect(list.head.next.value).toBe(10)
                expect(list.length).toBe(3)
            })
        })

        describe('insert with index in the middle', () => {
            it('should insert at the given index', () => {
                const list = LinkedList.fromValues(10, 20, 30, 40)
                list.insertAtIndex(2, 50)
                const node = list.getByIndex(2)

                expect(node.value).toBe(50)
                expect(node.next.value).toBe(30)
                expect(list.length).toBe(5)
            })
        })
    })

    describe('deleteHead', () => {
        it('delete the list head', () => {
            const list = LinkedList.fromValues(10, 20, 30)
            list.deleteHead()

            expect(list.head.value).toBe(20)
            expect(list.length).toBe(2)
        })
    }) 
    
    describe('deleteAtIndex', () => {
        describe('delete with index less than 0', () => {
            it('should not delete anything', () => {
                const list = LinkedList.fromValues(10, 20)
                list.deleteAtIndex(-1)

                expect(list.length).toBe(2)
            })
        })

        describe('delete with index greater than list length', () => {
            it('should not delete anything', () => {
                const list = LinkedList.fromValues(10, 20)
                list.deleteAtIndex(5)

                expect(list.length).toBe(2)
            })

        })

        describe('delete with index 0', () => {
            it('should delete at the head', () => {
                const list = LinkedList.fromValues(10, 20, 30)
                list.deleteAtIndex(0)

                expect(list.head.value).toBe(20)
                expect(list.head.next.value).toBe(30)
                expect(list.length).toBe(2)
            })
        })

        describe('delete with index in the middle', () => {
            it('should delete at the given index', () => {
                const list = LinkedList.fromValues(10, 20, 30, 40)
                list.deleteAtIndex(2)
                const node = list.getByIndex(1)

                expect(node.value).toBe(20)
                expect(node.next.value).toBe(40)
                expect(list.length).toBe(3)
            })
        })
    })

    describe('getByIndex', () => {
        describe('with index less than 0', () => {
            it('returns null', () => {
                const list = LinkedList.fromValues(10, 20)

                expect(list.getByIndex(-1)).toBeNull()
            })
        })

        describe('with index greater than list length', () => {
            it('returns null', () => {
                const list = LinkedList.fromValues(10, 20)

                expect(list.getByIndex(5)).toBeNull()
            })
        })

        describe('with index 0', () => {
            it('returns the head', () => {
                const list = LinkedList.fromValues(10, 20)

                expect(list.getByIndex(0).value).toBe(10)
            })
        })

        describe('with index in the middle', () => {
            it('returns the requested element', () => {
                const list = LinkedList.fromValues(10, 20, 30, 40)

                expect(list.getByIndex(2).value).toBe(30)
            })
        })
    })
})