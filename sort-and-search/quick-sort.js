function quickSort (arr,left=0,right=arr.length-1){
	if (left < right) {
		let pivotIndex = pivot(arr, left, right);
		quickSort(arr,left, pivotIndex-1);
		quickSort(arr,pivotIndex+1,right);
	}
    return arr;
}

const choosePivot = (min,max) => {
	return Math.floor(Math.random()*(max-min+1)+min);
};

const swap = (arr,idx1, idx2) => {
	[arr[idx1],arr[idx2]] = [arr[idx2],arr[idx1]];
};

function pivot (arr=[], start=0, end=arr.length-1){
    let pIndex = choosePivot(start,end); // choosing pivot position
	swap(arr,pIndex,start); // place pivot at the beginning of arr
	pIndex = start;	

	for (let currIdx = start+1; currIdx <= end; currIdx ++){
		if (arr[currIdx] < arr[start]){
			swap(arr,currIdx,pIndex+1);
            pIndex++;
        }
	}
	swap(arr,pIndex,start);
    return pIndex;
}

console.log(quickSort([6,1,7,2,8,3,4,7,5])); // [1,2,3,4,5,6,7,7,8]