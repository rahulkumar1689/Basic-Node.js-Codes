// sort an array of 1 to n

function sortarray(arr){
    for (let i=0;i<arr.length-1;i++){
        for (j= i+1 ; j<arr.length ; j++){
            if (arr[i] > arr[j]){
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
let arr = [2,1,3,4,5];
console.log(sortarray(arr));
