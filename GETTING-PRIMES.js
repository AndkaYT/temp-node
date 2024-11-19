const limit = 1000000;
let primesList = "";
for(let i = 2; i <= limit; i++) {
  let isPrime = true;
  if(i === 2 || i === 3) {
    primesList += `${i}, `;
    continue;
  }
  const numsq = Math.sqrt(i);
  for(let n = 2; n <= numsq; n++) {
    if(i % n === 0) {
      isPrime = false;
    }
  }
  if(isPrime) primesList += `${i}, `;
}

const {writeFileSync} = require('fs');

writeFileSync(`./primes-until-${limit}.txt`, `${primesList}`);