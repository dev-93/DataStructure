class Stack {
    constructor() {
        this.arr = [];
    }
    push(item) {
        this.arr.push(item);
    }
    pop() {
        return this.arr.pop();
    }
    peek() {
        return this.arr[this.arr.length - 1];
    }
}
  
const stack = new Stack();
stack.push(1); // Stack {arr: Array(1)}
stack.push(2); // Stack {arr: Array(2)}
stack.push(3); // Stack {arr: Array(3)}

stack.pop(); // 3
stack.peek(); // 2