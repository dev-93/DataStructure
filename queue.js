class Queue {
    constructor() {
      this.arr = []
    }
    enqueue(value) {
        this.arr.push(value)
    }
    dequeue() {
        return this.arr.shift()
    }
    peek() {
        return this.arr[0]
    }
};

const queue = new Queue()

queue.enqueue(7); // arr: [7]
queue.enqueue(33); // arr: [7, 33]
queue.enqueue(15); // arr: [7, 33, 15]

queue.dequeue() // 7
queue.peek() // 33