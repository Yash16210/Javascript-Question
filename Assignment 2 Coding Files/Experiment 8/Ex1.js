function binaryToDecimal(binary) {
    let decimal = 0;
    for (let i = 0; i < binary.length; i++) {
      decimal += binary[binary.length - 1 - i] * Math.pow(2, i);
    }
    return decimal;
  }
  
  const binary = "1011";
  console.log(`Binary: ${binary}, Decimal: ${binaryToDecimal(binary)}`);