// scope chain 

let a =5;
{
    console.log("Found in outer")
    {
        console.log("Found in Inner")
        {
            console.log("Found in Inner")
        }
    }
}