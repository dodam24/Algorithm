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