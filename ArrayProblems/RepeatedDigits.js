function findRepeatedDigits() {
    const repeatedDigits = [];
    
    for (let i = 0; i <= 100; i++) {
        let strNum = i.toString();
        if (strNum[0] === strNum[1]) {
            repeatedDigits.push(i);
        }
    }

    return repeatedDigits;
}

console.log("Repeated Digit Numbers:", findRepeatedDigits());