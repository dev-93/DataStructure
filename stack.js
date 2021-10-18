class Stack {
    constructor() {
        this.arr = [];
        this.index = 0;
    }
    push(item) {
        this.arr[this.index++] = item;
    }
    pop() {
        return this.arr[--this.index];
    }
    peek() {
        return this.arr[this.arr.length - 1];
    }
}
  
const stack = new Stack();
stack.push(1); // Stack {arr: Array(1), index: 1}
stack.push(2); // Stack {arr: Array(2), index: 2}
stack.push(3); // Stack {arr: Array(3), index: 3}

stack.pop(); // 3
stack.pop(); // 2
stack.peek(); // 2