export default class SelectionSort{

    // [3,2,6,4,8,5,1]   2>1   minIndex = 6
   
    sort(arr: number[]): number[]{
        if (arr.length === 0) {
            return arr;
        }

        for (let i = 0; i < arr.length; i++){ 
            let minIndex = i;
            for (let j = i + 1; j < arr.length; j++){
                if (arr[minIndex] > arr[j]){
                    minIndex = j;
                }
            }

            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;


        }

        return arr;
    }
}

