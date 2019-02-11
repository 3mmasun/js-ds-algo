function selectionSort (arr){
    var min;
    for (let i=0; i<arr.length; i++){
        min = i;
        for(let j=i+1; j<arr.length; j++){
            if (arr[j] < arr[min])  min = j;
        }
        [arr[i],arr[min]] = [arr[min],arr[i]];
    }
    return arr;
}
console.log(selectionSort([])); // []
console.log(selectionSort([2])); // [2]
console.log(selectionSort([4,3,2,1])); // [1,2,3,4]
console.log(selectionSort([3,2,5,4,6,1])); // [1,2,3,4,5,6]