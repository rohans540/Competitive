class Queue {
    constructor() {
        this.items = [];
    };

    isEmpty() {
        return this.items.length == 0;
    };

    enqueue(item) {
        this.items.push(item);
    };

    dequeue() {
        if(this.isEmpty()) {
            return "Underflow";
        } else {
            return this.items.shift();
        }
    };

    front() {
        if(this.isEmpty()) {
            return "Queue is empty";
        } else {
            return this.items[0];
        }
    }
}