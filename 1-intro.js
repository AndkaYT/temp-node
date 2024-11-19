const limit = 1000000;
let x = 1;
for(let i = 2; i < limit; i++) {
  console.log(x);
  x *= i;
}