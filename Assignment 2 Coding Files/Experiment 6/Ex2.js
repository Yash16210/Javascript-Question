function capitalizeWords(input) {
    return input
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

const result = capitalizeWords("hello world! welcome to javascript.");
console.log(result);