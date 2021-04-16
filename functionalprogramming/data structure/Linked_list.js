class Node {
    constructor(element){
        this.element = element;
        this.next = null;
    }
}
class linkedlist {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    add(element) {
        let node = new Node (element)
        let current;
        //linkedlist is empty
        if(this.head == null) {
            this.head = node
        }else{
            current = this.head
            while(current.next !== null){
                current = current.next;
            }
            current.next = node
        }
        this.size ++
    }

    remove(element) {
        let current = this.head;
        let prev = null;

        while (current != null) {
            if (current.element === element){
                if (prev == null){
                    this.head = current.next;
                } else {
                    prev.next = current.next;
                }
                this.size--;
                return current.element;
            }
            prev = current;
            current = current.next;
        }
        return -1;
    }

    addElementToposition(element,index){
        let tempindex = 0
        let node = new node(element)
        if(this.head == null){
            this.head = node
        }else{
            while(tempindex < index && current.next !== null){
                pre = current
                current = current.next;
                tempindex ++;
            }
         if(tempindex == index){
             node.next = current
             pre.next = node
         } else {
             console.log('index is not found')
         }
        }
    }
    getsize(){
        return this.size;
    }
    
    display(){
        let curr = this.head;
        var str ="";
        while (curr) {
            str = str + curr.element + " ->   ";
            curr = curr.next;
        } 
        console.log(str);
    }
}
    let list = new linkedlist();
const prompt = require('prompt-sync')();
let number = prompt('Enter the number of values:');
for(let i=0; i<number; i++){
    let value = prompt('Enter the values:');
    list.add(value);
}   
 list.display();
 let removeelement = prompt('Enter element to remove:')
 list.remove(removeelement);
 list.display();

// let addElement = prompt('Enter the elements you want to add to index:');
// let index = prompt('Enter the index to be inserted:');
// list.addElementToposition(addElement,index);
// list.display();
    

