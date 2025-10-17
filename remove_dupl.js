// remove duplicates from sorted

function removeduplicate(arr){
    if (arr.length === 0) return 0;
    
    let j=0;
    for (let i=1;i<arr.length;i++){
        if(arr[i] !== arr[j]){
            j++;
            arr[j]= arr[i];
        }
    }
    return arr.slice(0,j+1);

}
let arr = [1,1,2,2,3,4,4,5];
console.log(removeduplicate(arr));