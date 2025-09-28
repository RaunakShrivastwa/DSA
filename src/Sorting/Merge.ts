export default class MergeSort { 

    mergeFun(arr: number[]): number[] | string{
        if (arr.length === 0) {
            return "Array is empty";
        }

        return this.helper(arr, 0, arr.length - 1);     
    }

    helper(arr: number[], start: number, end: number): number[] {
        
        if (start === end) {
            return [arr[start]];
        }

        let mid = Math.floor((start + end) / 2);
        let leftArray = this.helper(arr, start, mid);
        let rightArray = this.helper(arr, mid + 1, end);
        return this.merge(leftArray, rightArray);

    }
    
    merge(leftArray: number[], rightArray: number[]): number[] {
        let result: number[] = [];
        let i = 0;
        let j = 0;

        while (i < leftArray.length && j < rightArray.length) { 
            if (leftArray[i] < rightArray[j]) { 
                result.push(leftArray[i]);
                i++;
            }
            else {
                result.push(rightArray[j]);
                j++;
            }
        }

        while (i < leftArray.length) { 
            result.push(leftArray[i]);
            i++;
        }

        while (j < rightArray.length) { 
            result.push(rightArray[j]);
            j++;
        }   

        return result;

    }

    
}