// otating an array anticlockwise

function roatate(arr,d){
    let n=arr.length;

    for(let i=0;i<d;i++){
        let first = arr[0]
        for (let j= 0;j<n-1;j++){
            arr[j] = arr[j+1];
            console.log(arr)
        }
        arr[n-1] = first;
       


    }
   
}
let arr=[1,2,3,4,5,6];
let d=2
roatate(arr,d)
console.log(arr.join(" "));