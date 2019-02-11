function binarySearch (sortedArr, element){
    var midp;
    let leftp = 0;
    let rightp = sortedArr.length -1;
    while (leftp <= rightp){
        midp = Math.floor((rightp+leftp)/2);
        if (sortedArr[midp] === element) {
            return midp;
        } else if (sortedArr[midp] < element){
            leftp = midp + 1;
        } else {
            rightp = midp -1;
        }
    }
    return -1;
};

console.log(binarySearch([1,2,3,4,5],1)); // 0
console.log(binarySearch([1,2,3,4,5],2)); // 1
console.log(binarySearch([1,2,3,4,5],3)); // 2
console.log(binarySearch([1,2,3,4,5],4)); // 3
console.log(binarySearch([1,2,3,4,5],5)); // 4
console.log(binarySearch([1,2,3,4,5],6)); // -1