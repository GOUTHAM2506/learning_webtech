// Global Scope
// We have declared without anything
a = 10
console.log(a)
console.log("");


//block
{
    //Block Scope
    b = 20
    console.log(a)
    console.log(b)
    console.log("");
    
}
console.log(a)
console.log(b)
console.log("");


//function block
function abc() {
    //Funciton Block or Local Scope
    c = 30
    console.log(a)
    console.log(b)
    console.log(c)
    console.log("");
    
}
abc()
console.log(a)
console.log(b)
console.log(c);
