 function bubbleSort (arr){
     var noswap;
     for (let i=arr.length; i>0; i--){
         noswap = true;
         for (let j=0; j<i-1;j++){
             if (arr[j] > arr[j+1]){
                 [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
                 noswap = false;
             }
         }
         if (noswap) break;
    }
    return arr;
 };

 console.log(bubbleSort([5,4,3,2,1])); // [1,2,3,4,5]