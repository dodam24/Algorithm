function solution(n, m) {
    let gcd = (a, b) => a % b === 0 ? b : gcd(b, a % b);
    let lcm = (a, b) => a * b / gcd(a, b);
    
    return [gcd(n, m), lcm(n, m)];
}