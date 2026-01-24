export default class StackFun<T> { 
    private items: T[] = [];
    private maxSize: number;
    private top: number = -1;

    constructor(maxSize: number) { 
        this.maxSize = maxSize;
    }

    push(item: T): void { 
        if (this.top >= this.maxSize - 1) {
            throw new Error("Stack overflow");
        }
        this.items[++this.top] = item;
        console.log(`Pushed ${item} to stack`);
        
    }

    pop(): void { 
        if (this.top < 0) {
            throw new Error("Stack underflow");
        }
        const poppedItem = this.items.pop();
        this.top--;
        console.log(`Popped ${poppedItem} from stack`);
        
    } 
    
    peek(): T | null { 
        if (this.top < 0) {
            return null;
        }
        return this.items[this.top];
    }

    isEmpty(): boolean { 
        return this.top < 0;
    }
    
}