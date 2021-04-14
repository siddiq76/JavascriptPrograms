class queue {
    constructor() {
        this.queue = []
    }

    enqueue(element) {
        this.queue.push(element);
    }

    dequeue(element) {
        if(this.queue.length == 0)
        console.log("Queue is Empty");
        return this.queue.shift();

    }
    
    display() {
        console.log(this.queue);
    }
}

let obj = new queue();

const prompt = require('prompt-sync')();
let number = prompt('Enter the number of values:');
for (let i = 0; i < number; i++) {
    let value = prompt('Enter the value:');
    obj.enqueue(value);
}
obj.display();
obj.dequeue();
obj.display();