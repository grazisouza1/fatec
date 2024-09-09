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
    isEmpty(){
        return this.stack === 0
    }
    clear(){
        this.stack = []
    }
    size(){
        return this.stack.length
    }
}

class Queue{
    constructor(){
        this.queue = []
    }
    enqueue(element){
        this.queue.push(element)
    }
    dequeue(){
        this.queue.shift()
    }
    isEmpty(){
        return this.queue === 0
    }
    clear(){
        this.queue = []
    }
    size(){
        return this.queue.length
    }
}

function inverter(){
    const queue = new Queue
    const stack = new Stack

    queue.enqueue(1)
    queue.enqueue(2)
    queue.enqueue(3)

    while(!queue.isEmpty()){
        stack.push(queue.dequeue())
    }
    while(!stack.isEmpty()){
        queue.enqueue(stack.pop())
    }

    return queue
}

console.log(inverter())