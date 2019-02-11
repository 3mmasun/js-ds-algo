function merge (arrL,arrR){
    let result = [];
    let i=0,j=0;
    while (i<arrL.length && j<arrR.length) {
        if (arrL[i] < arrR[j]){
            result.push(arrL[i]);
            i++;
        } else {
            result.push(arrR[j]);
            j++;
        }
    }
    while (i<arrL.length) {
        result.push(arrL[i]);
        i++;
    }
    while (j<arrR.length) {
        result.push(arrR[j]);
        j++
    }
    return result;
}

function mergeSort (arr){
    if (arr.length <= 1) return arr;
    var mid = Math.floor(arr.length/2);
    var leftH = mergeSort(arr.slice(0,mid));
    var rightH = mergeSort(arr.slice(mid,arr.length));
    return merge(leftH,rightH);
}

console.log(mergeSort([])); // []
console.log(mergeSort([1])); // [1]
console.log(mergeSort([2,3,1])); //[1,2,3]
