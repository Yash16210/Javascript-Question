function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  
  function printPrimes(start, end) {
    let primes = [];
    for (let i = start; i <= end; i++) {
      if (isPrime(i)) primes.push(i);
    }
    console.log(`Prime numbers between ${start} and ${end}:`, primes);
  }
  
  let start = 10; 
  let end = 50; 
  printPrimes(start, end);