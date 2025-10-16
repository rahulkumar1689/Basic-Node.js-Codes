// Closure 
function outer(){
let count =0; // this veriable is part of the closure

function inner(){
    count++;
    console.log(count);
}
return inner;
}

const counter = outer();
counter();
counter();
counter();
       