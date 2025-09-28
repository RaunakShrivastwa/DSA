import BubbleSort from "./Sorting/BubbleSort";
import SelectionSort from "./Sorting/SelectionSort";
import MergeSort from "./Sorting/Merge";

// const bubbleSort: BubbleSort = new BubbleSort();
// console.log(bubbleSort.sort([1, 2, 4, 5, 7, 8])); // Output: [1, 2, 3]


/*let obj = new MergeSort();
console.log(obj.mergeFun([38, 27, 43, 3, 9, 82, 10])); // Output: [3, 9, 10, 27, 38, 43, 82]

console.log("quick sort ***********");
import QuickSort from "./Sorting/QuickSort";
let s = new QuickSort();
console.log(s.sort([10, 7, 8, 9, 1, 5])); // Output: [1, 5, 7, 8, 9, 10]*/

//import SearchAlgo from "./Searching/SearchAlgo";
//let s = new SearchAlgo();
//console.log(s.linerSearch([10, 7, 8, 9, 1, 5], 17)); // Output: 5

//console.log(s.binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 11)); // Output: 6

import StackFun from "./stack/StackFun";

let stack = new StackFun<number>(5);
stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
stack.push(50);
stack.push(60); // This will throw "Stack overflow" error





