function getPrimeFactors(n) {
    const factors = [];
    for (let i = 2; i * i <= n; i++) {
        while (n % i === 0) {
            factors.push(i);
            n = n / i;
        }
    }
    if (n > 1) {
        factors.push(n);
    }
    return factors;
}

// Input
const num = parseInt(process.argv[2]);

console.log(`Prime Factors of ${num}:`, getPrimeFactors(num));