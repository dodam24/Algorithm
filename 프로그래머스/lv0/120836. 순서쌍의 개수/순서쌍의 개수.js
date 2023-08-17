function solution(n) {
    var answer = 0;
    let cnt = 1;
    let maxNumber = 1000001
    while(true) {
        if(cnt > n) {
            break;
        }
        if(n % cnt === 0) {
            answer = answer + 1;
            maxNumber = n / cnt;
        }
        cnt = cnt + 1;
    }
    return answer;
}