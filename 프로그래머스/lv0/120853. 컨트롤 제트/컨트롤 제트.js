function solution(s) {
    
    let numbers= [];
    let collectNumber = ''
    for(let i=0; i < s.length; i++) {
        const item = s[i];
        if(item === 'Z') {
            numbers.pop();
        } else if (item === ' ') {
            numbers.push(Number(collectNumber))
            collectNumber = '';
        } else {
            // 숫자
            collectNumber += item;
        }
     }
    if(collectNumber !== '') {
        numbers.push(Number(collectNumber))
    }
    
    // numbers 배열에 있는 모든 숫자를 더함
    let sum = 0;
    for(let i=0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}

// 1. -, 0~9 사이의 숫자
// 2. Z
// 3. 공백