function solution(s) {
    let answer = 0;
    let x = 0;  // 첫 글자 s[0]과 같은 문자열일 때 1씩 커지는 변수
    let notX = 0;   // 첫 글자 s[0]과 다른 문자열일 때 1씩 커지는 변수
    
    while(s) {
        for (let i=0; i < s.length; i++) {
            if (s[i] === s[0]) {
                x += 1
            } else {
                notX += 1
            }
            
            if (x === notX) {  // x와 notX의 횟수가 같아지는 순간
                answer += 1 // 빈 배열에 분리한 문자열을 추가
                s = s.slice(i+1)    // 분리한 문자열의 다음 문자열부터 다시 시작
                break
            }
        }
        if (x !== notX) {
            answer += 1;
            break
        }
    }
    console.log(answer)
    return answer;
}
solution("banana")