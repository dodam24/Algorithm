function solution(n) {
    var answer = 0;
    let cnt = 1;
    let sum = 0;
    while(cnt <= n) {
        if(cnt % 2 === 0) {
            sum = sum + cnt;
        }
        cnt = cnt + 1;
    }
    return sum;
}