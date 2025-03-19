let numbers = Array.from({ length: 10 }, () => Math.floor(Math.random() * 900) + 100);

console.log("Generated Numbers:", numbers);

numbers.sort((a, b) => a - b);

console.log("Sorted Numbers:", numbers);
console.log(`2nd Smallest Number: ${numbers[1]}`);
console.log(`2nd Largest Number: ${numbers[numbers.length - 2]}`);