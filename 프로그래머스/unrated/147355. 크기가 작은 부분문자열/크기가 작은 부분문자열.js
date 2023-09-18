function solution(t, p) {
    var answer = 0;
    
    for (let i = 0; i <= t.length - p.length; i++) {
        let num = t.substr(i, p.length);    // string.substr(start, length): 특정 구간의 문자열 추출
        
        if (Number(num) <= Number(p))
            answer ++
    }
    return answer;
}