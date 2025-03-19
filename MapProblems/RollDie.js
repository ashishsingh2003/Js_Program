const dieRolls = {};
let maxCount = 0;

while (maxCount < 10) {
    const roll = Math.floor(Math.random() * 6) + 1;
    dieRolls[roll] = (dieRolls[roll] || 0) + 1;

    if (dieRolls[roll] > maxCount) {
        maxCount = dieRolls[roll];
    }
}

console.log("Die Roll Results:", dieRolls);

const maxRolled = Object.keys(dieRolls).find(key => dieRolls[key] === maxCount);
const minRolled = Object.keys(dieRolls).reduce((a, b) => dieRolls[a] < dieRolls[b] ? a : b);

console.log(`Number that appeared most: ${maxRolled}`);
console.log(`Number that appeared least: ${minRolled}`);