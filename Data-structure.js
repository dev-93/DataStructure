function test() {
    var stack = new TestStack();

    stack.push(5);
    stack.push(8);
    stack.push(6);
    stack.push(10);
    stack.toString();
}

class TestStack {
    constructor() {
        this.frame = new Array();
        this.index = 0;
    }

    push(data) {
        this.frame[this.index++] = data;
    }

    peek() {
        return this.frame[this.index - 1];
    }

    pop() {
        return this.frame[--this.index];
    }

    toString() {
        console.log(this.frame);
    }
}

test();
