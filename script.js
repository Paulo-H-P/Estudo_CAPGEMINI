let numero = 8;
let num0 = 0;
let num1 = 1;
let fib = 1;

console.log(num0);
for (let cont = 0; cont <= numero; cont++) {
  console.log(fib);
  fib = num1 + num0;
  num0 = num1;
  num1 = fib;
}
