export default class MaxHeap{
    private size : number;
    private ArraySize :number;
    private heap : number[];

    constructor(n:number){
        this.heap = new Array<number>(n);
        this.ArraySize= n;
        this.size=0;
    }

    insert(val:number){
        if(this.size == this.ArraySize){
            console.log("heap overflow");
            return; 
        }
        this.heap[this.size] = val;
        let index = this.size;
        this.size++;
        console.log(`elements inserted into heap ${val}`);
        
        
        while(index>0 && this.heap[this.getParent(index)]< val){
            let temp = this.heap[this.getParent(index)];
            this.heap[this.getParent(index)] = this.heap[index];
            this.heap[index] = temp;
            index = this.getParent(index);
        }
    }

    delete(){
        if(this.size == 0){
            console.log("Heap Underflow");
            return;
        }

        this.heap[0] = this.heap[this.size-1];
        this.size--;
        this.heap.length--;
        if(this.size == 0){
            return;
        }
        this.heapify(0);
    
    }

    heapify(index:number){
        let largeIndex = index;
        let leftIndex = this.leftChild(index);
        let rightIndex = this.rightChild(index);
        if(leftIndex<this.size && this.heap[largeIndex]<this.heap[leftIndex]){
            largeIndex = leftIndex;
        }

        if(rightIndex<this.size && this.heap[largeIndex]< this.heap[rightIndex]){
            largeIndex = rightIndex;
        }

        if(largeIndex != index){
            let temp = this.heap[index];
            this.heap[index] = this.heap[largeIndex];
            this.heap[largeIndex] = temp;
            this.heapify(largeIndex);
        }
    }

    leftChild(pIndex:number){
        return (2*pIndex)+1;
    }

    rightChild(pIndex:number){
       return (2*pIndex)+2; 
    }

    getParent(i:number):number{
        return Math.floor((i - 1)/2)
    }

    print(){
        console.log(this.heap)
    }
}

