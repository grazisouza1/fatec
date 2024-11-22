/*DEQUEUE                                 QUEUE
  addBack()         ================>     push()
  removeFront()     ================>     dequeue()
  removeBack()      ================>     pop()
  peekFront/Back()  ================>     peek()  
*/

class Dequeue {
    constructor(){
        this.count = 0 //Apontador para o fim da fila
        this.lowestCount = 0 //Apontador para o início da fila
        this.items = {} //Dado do tipo objeto
    }

    removeFront() {
        if (this.isEmpty()) {
            return undefined
        }
        const result = this.items[this.lowestCount]
        delete this.items[this.lowestCount]
        this.lowestCount++
        return result
    }

    removeBack(){
        if (this.isEmpty()){
            return undefined
        }
        const result = this.items[this.count]
        delete this;this.items[this.count]
        this.count--
        return result
    }

    peek() {
        if (this.isEmpty()) {
            return undefined
        }
        return this.items[this.lowestCount]
    }

    isEmpty() {
        return this.size() === 0
    }

    size() {
        return this.count - this.lowestCount
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

    addBack(element){
        this.items[this.count] = element
        this.count++
    }

    addFront(element){
        this.items[this.lowestCount-1] = element
        this.lowestCount--
    }
}

const dequeue = new Dequeue
console.log(dequeue.isEmpty())
dequeue.addBack('John')
dequeue.addBack('Jack')
console.log(dequeue.toString())
dequeue.addBack('Camila')
dequeue.count = 3
dequeue.lowestCount = 0
console.log(dequeue.toString())

/*console.log(dequeue.toString())
console.log(dequeue.size())
console.log(dequeue.isEmpty())
dequeue.removeFront()
console.log(dequeue.toString())
dequeue.removeBack()
console.log(dequeue.toString())
dequeue.addFront('John')
console.log(dequeue.toString()) */

