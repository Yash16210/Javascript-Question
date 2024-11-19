function stringFunctionsDemo() {
    const str = "   Hello, JavaScript World!   ";
  
    // 1. `trim()` - Removes whitespace from both ends of the string
    const trimmedStr = str.trim();
    console.log(`Trimmed String: '${trimmedStr}'`);
  
    // 2. `toUpperCase()` - Converts the string to uppercase
    const upperStr = str.toUpperCase();
    console.log(`Uppercase String: '${upperStr}'`);
  
    // 3. `toLowerCase()` - Converts the string to lowercase
    const lowerStr = str.toLowerCase();
    console.log(`Lowercase String: '${lowerStr}'`);
  
    // 4. `substring()` - Extracts a part of the string from a specified index
    const subStr = str.substring(7, 18);
    console.log(`Substring: '${subStr}'`);
  
    // 5. `replace()` - Replaces a part of the string with a new substring
    const replacedStr = str.replace("JavaScript", "Node.js");
    console.log(`Replaced String: '${replacedStr}'`);
  }
  
  stringFunctionsDemo();