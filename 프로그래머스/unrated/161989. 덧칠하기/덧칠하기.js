function solution(n, m, section) {  
    // 벽의 길이: n, 롤러의 길이: m, section: 페인트칠 해야 하는 구역
    var answer = 0;
    let painted = 0;
    
    for (let i of section) {
        if (i < painted) {
            continue;
        }
        painted = i + m;
        answer += 1;
    }
    
    return answer;
}