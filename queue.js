class Queue {
    constructor() {
        this.items = [];
    };

//isEmpty() method to check if a queue is empty or not
    isEmpty() {
        return this.items.length == 0;
    };

//enqueue(item) method to add/push a new item in our queue
    enqueue(item) {
        this.items.push(item);
    };

//dequeue() method to pop out an element from our queue
    dequeue() {
        if(this.isEmpty()) {
            return "Underflow";
        } else {
            return this.items.shift();
        }
    };

//front() method to return the first element of our queue (element that can be accessed or deleted)
    front() {
        if(this.isEmpty()) {
            return "Queue is empty";
        } else {
            return this.items[0];
        }
    };

};

//Test cases

const q1 = new Queue();
q1.enqueue(10);
q1.enqueue(12);
q1.enqueue(7);
console.log(q1.front());


