function solution(n) {
    var answer = 0;
    for(let x = 2; x < n; x++) {    // 0, 1은 나눌 필요 없으므로 제외
        if (n % x === 1) {
            answer = x;
            break;
        }
    }
    return answer;
}
