// Example of bad JavaScript code

var x = 10;
if ((x = 5)) {
  console.log("x is five");
}
function foo() {
  y = 20;
  console.log(y);
}
foo();
console.log(z);

// More bad JavaScript code

function bar(a, b) {
  return
    a + b;
}

for (i = 0; i < 5; i++) 
console.log(i)

let arr = [1, 2, 3];
arr[5] = 10;

const obj = {};
obj = { name: "test" };

function baz() {
  undeclaredVar++;
}
baz();