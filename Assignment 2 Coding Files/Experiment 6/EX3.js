function findArmstrongNumbers() {
    const armstrongNumbers = [];
    for (let num = 100; num < 1000; num++) {
        const digits = num.toString().split('').map(Number);
        const sumOfCubes = digits.reduce((sum, digit) => sum + Math.pow(digit, 3), 0);
        if (sumOfCubes === num) {
            armstrongNumbers.push(num);
        }
    }
    return armstrongNumbers;
}

const result = findArmstrongNumbers();
console.log("3-digit Armstrong numbers:", result);