class BubbleSort {

    sort(arr: number[]): number[] {
        if (arr.length === 0) return arr; // Handle empty array case
        let flag :boolean = false;
        for (let i = 0; i < arr.length; i++) {

            for (let j = 0; j < arr.length - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    const temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                    flag = true; // Set flag to true if a swap occurs
                }
            }
            if (!flag) {
                console.log("Array is already sorted");
                return arr; 
            }; 
        }
        return arr;
    }
}

export default BubbleSort;