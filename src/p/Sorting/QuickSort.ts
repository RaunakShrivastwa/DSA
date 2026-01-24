export default class QuickSort { 

    sort(array: number[]): number[] | string { 
        if (array.length === 0) {
            return 'Array is empty';
        }

        return this.helper(array, 0, array.length - 1);
    }
    helper(arr: number[], start: number, end: number) {
        if (start < end) {
            let pivitIndex = this.partition(arr, start, end);
            this.helper(arr, start, pivitIndex - 1);
            this.helper(arr, pivitIndex + 1, end);
        } 
        return arr;
    }
    partition(arr: number[], start: number, end: number) :number {
        let pivit = arr[end];
        let pivitIndex = start - 1;
        for (let i = start; i < end; i++) { 
            if (arr[i] < pivit) {
                pivitIndex++;
               let temp = arr[i];
               arr[i] = arr[pivitIndex];
               arr[pivitIndex] = temp;
            }
        }
        pivitIndex++;
        let temp = arr[end];
        arr[end] = arr[pivitIndex];
        arr[pivitIndex] = temp;
        return pivitIndex;
    }
}