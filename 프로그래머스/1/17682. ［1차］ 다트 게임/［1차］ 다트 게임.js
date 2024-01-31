function solution(dartResult) {
    let int = 0;
    let temp = [];
    let score = 0;
    
    // 문자열이 정수인 경우
    for(let i = 0; i < dartResult.length; i++) {
        if(dartResult[i] >= 0 && dartResult[i] <= 9) {
            if(dartResult[i] == 1 && dartResult[i + 1] == 0) {
                int = 10;
                i++;
            } else {
                int = dartResult[i];
            }
            
        // 문자열이 정수가 아닌 경우
        } else if(dartResult[i] === 'S') {  // S는 1제곱
            temp.push(int);
            
        } else if(dartResult[i] === 'D') {  // D는 2제곱
            temp.push(Math.pow(int, 2));
            
        } else if(dartResult[i] === 'T') {  // T는 3제곱
            temp.push(Math.pow(int, 3));
        
        // 아차상이면 해당 점수 * -1
        } else if(dartResult[i] === '#') {  
            temp[temp.length - 1] *= -1;
        
        // 스타상이면 해당 점수와 직전 점수를 각각 * 2
        } else if(dartResult[i] === '*') {  
            temp[temp.length - 1] *= 2;
            temp[temp.length - 2] *= 2;
        }
    }
    
    for(let i = 0; i < temp.length; i++) {
        score += Number(temp[i]);
    }
    
    return score;
}