function solution(n, numlist) {
    const answer = [];
    
    for(let i=0; i < numlist.length; i++) {
        const item = numlist[i];
        if(item % n === 0) {
            answer.push(item);
        }
    }
    return answer;
}

// 10 % 3 !== 0 => 10은 3의 배수가 아니다.