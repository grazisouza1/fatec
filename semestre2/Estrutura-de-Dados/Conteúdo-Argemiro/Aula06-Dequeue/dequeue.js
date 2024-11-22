class Dequeue{
    constructor(){
        this.count = 0
        this.lowestCount = 0
        this.items = {}
    }
    isEmpty(){
        this.items === 0
    }
    clear(){
        this.items = []
    }
    size(){
        return this.items.length
    }
    toString(){
        return this.items
    }
}