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

function doSomething() {
  return; // Unnecessary return statement
  console.log("This will never run"); // Dead code
}
