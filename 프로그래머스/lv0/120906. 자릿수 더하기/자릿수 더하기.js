function solution(n) {
    let sum = 0;
    const strN = String(n);
    
    for(let i=0; i < strN.length; i++) {
        const item = strN[i];
        sum += Number(item);
    }
    return sum;
}