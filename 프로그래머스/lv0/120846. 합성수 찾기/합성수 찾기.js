const getIsCount = (i) => {
    let isCount = false;
    for(let num = 2; num < i-1; num++) {
        if(i % num === 0) {
            // 합성수
            isCount = true;
        }
    }
    return isCount;
}

function solution(n) {
    let answer = 0;
    for(let i = n; i >= 1; i--) {
        // i는 합성수인지 비교해야 하는 숫자
        const isCount = getIsCount(i);
        // isCount로 합성수 여부를 확인
        if(isCount) {
            answer += 1;
        }
    }
    
    return answer;
}