class Queue {
    constructor() {
        this.arr = [];
        this.tail = 0;
        this.head = 0;
    }
    enqueue(item) {
        this.arr[this.tail++] = item;
    }
    dequeue() {
        if(this.head === this.tail) {
            return null;
        }
        return this.arr[this.head++];
    }
};

const queue = new Queue()

queue.enqueue(7); // arr: [7]
queue.enqueue(33); // arr: [7, 33]
queue.enqueue(15); // arr: [7, 33, 15]

queue.dequeue(); // 7
queue.dequeue(); // 33
queue.dequeue(); // 15
queue.dequeue(); // null