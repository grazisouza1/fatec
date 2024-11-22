class Stack {
    constructor() {
        this.items = [0, 1, 2, 3, 4, 5, 6]
    }
    push(element) {
        return this.items.push(element)
    }
    pop() {
        return this.items.pop()
    }
    peek() {
        return this.items[this.items.length - 1]
    }
    isEmpty() {
        return this.items.length === 0
    }
    size() {
        return this.items.length
    }
    clear() {
        return this.items = []
    }
}

const stack = new Stack()
console.log(stack.isEmpty())
stack.push(5)
stack.push(8)
console.log(stack)
console.log(stack.peek())
console.log(stack.size())
