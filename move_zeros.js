// move all the zeros to the end

let arr = [0,1,2,0,3,2];
let count = 0;
for (i=0;i<arr.length;i++){
    if(arr[i] !== 0){
        arr[count] = arr[i];
        count++;
    }
} 

while (count < arr.length){
    arr[count] = 0;
    count ++;
}
console.log(arr);