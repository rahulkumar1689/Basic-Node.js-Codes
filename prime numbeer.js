var a = 165
if(a<=1){
    console.log("Not Prime")
}
else{
    for(let i=2;i<=Math.sqrt(a);i++){
        if(a%i===0){
            console.log("Not prime")
        }
        else{
            console.log("Prime number")
        }
    }
}