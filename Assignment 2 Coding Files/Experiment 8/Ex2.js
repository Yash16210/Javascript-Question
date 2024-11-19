function checkRandomNumbers() {
    const num1 = Math.floor(Math.random() * 100) + 1;
    const num2 = Math.floor(Math.random() * 100) + 1;
    const num3 = Math.floor(Math.random() * 100) + 1;
  
    console.log(`Generated numbers: ${num1}, ${num2}, ${num3}`);
  
    if (num1 === num2 && num2 === num3) {
      console.log("All numbers are the same!");
    } else {
      console.log("The numbers are not the same.");
    }
  }
  
  checkRandomNumbers();