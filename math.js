const mathExt = {
  getRandBetween(min, max) {      
    return Math.round(Math.random() * (max - min)) + min;
  },

  isPrime(num) {
    const numsq = Math.sqrt(num);

    if(num === 1) return false;
    else if(num === 2 || num === 3) return true;

    let isPrime = true;
    for(let i = 2; i <= numsq; i++) {
      if(num % i === 0) {
        isPrime = false;
      }
    }
    return isPrime;
  },

  factorial(num) {
    let s = 1;
    while(num > 1) {
      s *= num;
      num--;
    }
    return s;
  },

  primesUntil(num) {
    if(num < 2) return;

    let numsArray = [];

    for(let i = 2; i < num; i++) {
      if(this.isPrime(i)) {
        numsArray.push(i);
      }
    }
    return numsArray;
  },
};
module.exports = mathExt;