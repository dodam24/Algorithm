function solution(balls, share) {
    var answer = 0;
    
    const n = balls;
    const r = share;
    
    let nume = 1;
    for(let i = n; i >= n-r+1; i--) {
        nume *= i;
    }
    let denom = 1;
    for(let i = r; i >= 1; i--) {
        denom *= i;
    }
    answer = Math.floor(nume / denom)
    return answer;
}