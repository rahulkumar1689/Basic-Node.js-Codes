function seconfdlar(arr){
    let largest =-1, secondlargest = -1;
    for (let i=0;i<arr.length;i++){
        if(arr[i]>largest){
            largest=arr[i];
        }
    }
    for (let i=0;i<arr.length;i++){
        if(arr[i]>secondlargest && arr[i] !== largest)
            secondlargest=arr[i];
    }
    return secondlargest;
}
console.log(seconfdlar([2,3,5,6,6,5]));