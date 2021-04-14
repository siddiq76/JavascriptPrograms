class stack {
    constructor () {
        this.stack = []
        this.top = 0
    }
    push(element) {
        this.stack.push(element);
    }
    pop(){
        if(this.stack.length > 0){
        this.stack.pop();
        } else {
            console.log("stack is empty");
        }
    }
    display(){
        console.log(this.stack);
    }
    getsize() {
        console.log("size of stack:",this.stack.length);
    }
}

let obj = new stack()

const prompt = require('prompt-sync')();
let number = prompt('Enter the number of value:');
for (let i = 0; i < number; i++) {
    let value = prompt('Enter the value:');
    obj.push(value);
}
obj.push();
obj.display();
obj.getsize();