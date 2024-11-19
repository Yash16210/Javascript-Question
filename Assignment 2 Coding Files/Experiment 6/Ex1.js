function findLargestInteger(num1, num2) {
    if (num1 > num2) {
        console.log(`The largest integer is: ${num1}`);
    } else if (num2 > num1) {
        console.log(`The largest integer is: ${num2}`);
    } else {
        console.log("Both integers are equal.");
    }
}

let number1 = 42;
let number2 = 27;

findLargestInteger(number1, number2);