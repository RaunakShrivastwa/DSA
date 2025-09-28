import Node from "./Node";

export default class LinkedFunction<T>{
    head: Node<T> | null = null;
    tail: Node<T> | null = null;

    push(value: T): void{
        let newNode = new Node(value);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.tail!.next = newNode;
            this.tail = newNode;
         }

         console.log(`${value} pushed to the list`);
         
    }

    pop(): T | null {
        if (this.head === null) {
            console.log("List is empty");
            return null;
        }
        let poppedValue = this.head.value;
        this.head = this.head.next;
        return poppedValue;
    }
    
    getAll(): void{
        let ptr = this.head;
        while (ptr !== null) {
            console.log(ptr.value);
            ptr = ptr.next;
        }
    }

    isEmpty(): boolean{
        return this.head === null;
    }

}