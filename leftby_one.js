// left rotate by one in an array 

let arr = [1,2,3,4,5];
let temp = arr[0];
for (let i=0;i<arr.length-1;i++){
    arr[i]=arr[i+1];
}
arr[arr.length-1] = temp;
console.log(arr);