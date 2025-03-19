let numbers = Array.from({ length: 10 }, () => Math.floor(Math.random() * 900) + 100);

console.log("Generated Numbers:", numbers);

let max = Math.max(...numbers);
let min = Math.min(...numbers);

let secondMax = -Infinity;
let secondMin = Infinity;

for (let num of numbers) {
    if (num > secondMax && num < max) {
        secondMax = num;
    }
    if (num < secondMin && num > min) {
        secondMin = num;
    }
}

console.log(`2nd Largest Number: ${secondMax}`);
console.log(`2nd Smallest Number: ${secondMin}`);