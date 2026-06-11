var a = 10  // Global Scope Variable.
console.log(a); 
console.log("");

{
    var b = 20
    console.log(a);
    console.log(b); // Declared inside a block but it can accessed globally because it will be negclated by block.
    console.log("");
}

console.log(a);
console.log(b);
console.log("");

function scope() {
    var c = 30 // Declared inside the function so it cannot be accessed globally but can be accessed inside only this funciton.
    console.log(a);
    console.log(b);
    console.log(c);
    console.log("");    
}
scope()
console.log(a);
console.log(b);
// console.log(c); Cannot be accessed because it is declared inside the function.





