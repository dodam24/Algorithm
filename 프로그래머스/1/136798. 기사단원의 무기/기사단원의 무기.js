function solution(number, limit, power) {
    var answer = 0;
    
    for (let i=1; i <= number; i++)  {
        let count = 0;  // i의 약수 개수를 저장할 변수
        
        for (let j=1; j <= i/2; j++) {
            if (i % j === 0) {  // i가 j로 나누어 떨어지면
                count += 1;  // count를 1 증가 (i의 약수를 찾는 과정)
            }
        }
        
        count += 1;  // 자기 자신도 약수에 포함되므로 count를 1 증가
        
        if (count > limit) {
            answer += power;
        } else {
            answer += count;
        }
    }
    
    return answer;
}