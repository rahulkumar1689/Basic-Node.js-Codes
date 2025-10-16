// Function declaration

function cal(a,b,operator){
    if(operator=== "+") return a+b;
    if(operator=== "-") return a-b;
    if(operator=== "*") return a*b;
    if(operator=== "/") return a/b;
    if(operator=== "%") return a%b;
}
console.log(cal(45,5,"+"))
console.log(cal(45,5,"-"))
console.log(cal(45,5,"*"))
console.log(cal(45,5,"/"))
console.log(cal(45,5,"%"))

// Fynction Expressstion
//_____________________________

const calc = function(a,b,opertor){
    switch(operator){
        case(operator==="+"): return a+b
        case(operator==="-"):return a-b
        case(operator==="/"): return a/b
        case(operator==="*"): return a*b
        case(operator==="%"): return a%b
        case(operator==="**"): return a**b
        
    }
}
console.log(cal(2,3,"+"))
console.log(cal(2,3,"-"))
console.log(cal(2,3,"*"))
console.log(cal(2,3,"/"))
console.log(cal(2,3,"**"))
console.log(cal(2,3,"%"))