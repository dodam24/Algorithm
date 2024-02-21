function solution(arr) {
    
    // 최대공약수
    const gcd = (a, b) => {
        if(b === 0) return a;
        return gcd(b, a % b);
    };
    
    // 최소공배수
    const lcm = (a, b) => {
        return a * b / gcd(a, b);
    };
    
    return arr.reduce((acc, cur) => lcm(acc, cur));
}