class Queue {
    constructor() {
        this.count = 0
        this.lowestCount = 0
        this.items = []
    }
    enqueue(element) {
        this.items[this.count] = element
        this.count++
    }
    dequeue() {
        if (this.isEmpty()) {
            return undefined
        }
        const result = this.items[this.lowestCount]
        delete this.items[this.lowestCount]
        this.lowestCount++
        return result
    }
    peek() {
        if (this.isEmpty()) {
            return undefined
        }
        return this.items[this.lowestCount]
    }
    size() {
        return this.count - this.lowestCount
    }
    isEmpty() {
        return this.size() === 0
    }
    clear() {
        this.items = {}
        this.count = 0
        this.lowestCount = 0
    }
    toString() {
        if (this.isEmpty()) {
            return ''
        }
        let objString = `${this.items[this.lowestCount]}`
        for (let i = this.lowestCount + 1; i < this.count; i++) {
            objString = `${objString}, ${this.items[i]}`
        }
        return objString
    }
}

const queue = new Queue
console.log(queue.isEmpty())

queue.enqueue('John')
queue.enqueue('Jack')
console.log(queue.toString())
queue.enqueue('Camila')

console.log(queue.toString())
console.log(queue.size())
console.log(queue.isEmpty())
queue.dequeue() //Remove John
queue.dequeue() //Remove Jack
console.log(queue.toString())

/* class Queue {
    constructor(){
        this.queue = []
    }
    enqueue(element){
        this.queue.push(element)
    }
    dequeue(){
        return this.queue.shift()
    }
    size(){
        return this.queue.length
    }
    peek(){
        return this.queue[0]
    }
    isEmpty(){
        return this.queue.length === 0
    }
}

class Stack {
    constructor(){
        this.stack = []
    }
    push(element){
        this.stack.push(element)
    }
    pop(){
        return this.stack.pop()
    }
    size(){
        return this.stack.length
    }
    isEmpty(){
        return this.stack.length === 0
    }
    clear(){
        this.stack = []
    }
}

function inverter(){
    const stack = new Stack
    const queue = new Queue

    queue.enqueue(1)
    queue.enqueue(2)
    queue.enqueue(3)

    while (!queue.isEmpty()){
        stack.push(queue.dequeue())
    }
    while(!stack.isEmpty()){
        queue.enqueue(stack.pop())
    }
    
    return queue
}

console.log(inverter()) */