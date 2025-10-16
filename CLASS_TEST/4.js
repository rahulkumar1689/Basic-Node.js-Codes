//declare a var variable inside a block{} and print it outside the block.(To check scope difference)
console.log(x)
x=65
{
    var x = 25;
    console.log(x);
}
console.log(x);
x=99
