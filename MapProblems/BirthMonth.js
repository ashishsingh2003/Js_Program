const birthMonthMap = new Map();

for (let i = 1; i <= 50; i++) {
    const month = Math.floor(Math.random() * 12) + 1;
    if (!birthMonthMap.has(month)) {
        birthMonthMap.set(month, []);
    }
    birthMonthMap.get(month).push(`Person ${i}`);
}

console.log("Birth Month Distribution:");
for (let [month, people] of birthMonthMap.entries()) {
    console.log(`Month ${month}: ${people.join(', ')}`);
}
    