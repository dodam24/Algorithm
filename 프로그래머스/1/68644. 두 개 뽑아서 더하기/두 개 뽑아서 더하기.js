// 중첩 for문 사용
function solution(numbers) {
    let temp = [];
    
    for(i = 0; i < numbers.length; i++) {
        for(j = i+1; j < numbers.length; j++) {
            temp.push(numbers[i] + numbers[j])
        }
    }
    // 중복 제거, 오름차순 정렬
    return [...new Set(temp)].sort((a, b) => a - b);
}


// flatMap() 함수를 이용
function solution(numbers) {
    const temp = numbers.flatMap((value, i) => {
        return numbers.slice(i + 1).map((otherValue) => value + otherValue);
    });
    
    return Array.from(new Set(temp)).sort((a, b) => a - b);
}
