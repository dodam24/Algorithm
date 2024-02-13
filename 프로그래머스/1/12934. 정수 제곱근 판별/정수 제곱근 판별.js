function solution(n) {
    var answer = 0;
    // return Number.isInteger(Math.sqrt(n)) ? Math.pow(Math.sqrt(n) + 1, 2) : -1;
    
    if(Math.sqrt(n) % 1 === 0) {
        let x = Math.sqrt(n)
        return Math.pow(x + 1, 2);
    } else {
        return -1;
    }
    
    return answer;
}