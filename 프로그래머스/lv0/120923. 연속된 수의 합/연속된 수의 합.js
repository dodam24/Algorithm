function solution(num, total) {
    let result = []
    
    // 가운데 값
    const avg = Math.ceil(total / num)
    
    // 가운데 값이 짝수인지 홀수인지에 따라서 시작 위치 구하기
    const x = Math.trunc(num / 2)
    
    // 시작 값
    const startNum = avg - x
    
    for(i = 0; i < num; i++) {
        result.push(startNum + i)
    }
    
    return result;
}