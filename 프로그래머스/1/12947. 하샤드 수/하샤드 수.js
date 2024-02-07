function solution(x) {
    var answer = true;
    
    let sum = Array.from(String(x)).reduce((a, b) => Number(a) + Number(b));
    
    if(x % sum === 0) return true;
    else return false;
    
    return answer;
}