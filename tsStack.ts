interface IStack {
    readonly size: number;
    push(value: string): void;
    pop(): string;
}

type StackNode = {
    readonly value: string;
    readonly next?: StackNode;
}

class StackImpl implements IStack {
    private _size: number = 0;
    private head?: StackNode;

    get size() {
        return this._size;
    }
    push(value: string) {
        const node:StackNode = {
            value,
            next: this.head
        };
        this.head = node;
        this._size++;
    }
    pop(): string {
        if(this.head == null) {
            throw new Error("stack is Empty");
        }
        const node = this.head;
        this.head = node.next;
        this._size--;

        return node.value;
    }
}

const makeStack = new StackImpl();
makeStack.push('1');
makeStack.push('2');
makeStack.push('3');

while(makeStack.size !== 0) {
    const value = makeStack.pop();
    console.log(makeStack.size, value);
};
