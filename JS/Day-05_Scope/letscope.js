let a = 100 //Global Variable declaration
console.log(a);
console.log("");

{
    let b = 200
    console.log(a);
    console.log(b);
    console.log("");
}
console.log(a);
// console.log(b); Cannot be accessed because it is declared inside the block with `let`
console.log("");

function abc() {
    let c = 300
    console.log(a);
    // console.log(b);
    console.log(c);
}

abc()
console.log(a);
// console.log(b);
// console.log(c);