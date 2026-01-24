export default class SearchAlgo{

    linerSearch(arr: number[], target: number): number { 
        if (arr.length === 0) return -1;
        for (let i = 0; i < arr.length; i++) { 
            if (arr[i] === target) {
                return i
            }
                
        }

        return -1;
    }


    binarySearch(arr: number[], target: number): number{
        if(arr.length === 0) return -1;
        return this.helper(arr, 0, arr.length-1, target);
    }
    
    helper(arr: number[], start: number, end: number, target: number): number {
        if(start > end) return -1;
        let mid = Math.floor((start + end) / 2);
        if (arr[mid] === target) return mid;
        
        if (arr[mid] > target) { 
            return this.helper(arr, start, mid - 1, target);
        } else {
            return this.helper(arr, mid + 1, end, target);
        }
    }
}
