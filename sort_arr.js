function sort(arr,n){
    var i=0;
    while(i<n){
        var correct = arr[i]-1;
        if(arr[correct] !=arr[i]){
            swap(arr,i,correct)
        }else{
            i++
        }
    }
}

function swap(arr,i,correct){
    var temp =arr[i];
    arr[i] = arr[correct];
    arr[correct]= temp;

}
var arr=[2,4,5,1,3];
var n=5

sort (arr,n);

for (var i=0; i<n; i++){
    console.log(arr[i]);
}
