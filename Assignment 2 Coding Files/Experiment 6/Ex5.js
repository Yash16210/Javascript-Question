let oddNumbers = [];
let evenNumbers = [];

for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    evenNumbers.push(i);
  } else {
    oddNumbers.push(i);
  }
}

console.log("Even Numbers:", evenNumbers);
console.log("Odd Numbers:", oddNumbers);