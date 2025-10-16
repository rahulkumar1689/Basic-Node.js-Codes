const action="say_hello";
switch(action){
    case"say_hello":{
        const message="hello";
        console.log(message);
        break;
    }
    case"say_hi":{
        const message="hi"; //No error because its in a new block
        console.log(message);
        break;
    }
}


