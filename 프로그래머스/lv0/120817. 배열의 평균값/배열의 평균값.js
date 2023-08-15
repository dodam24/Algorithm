function solution(numbers) {
    let sum = 0;
    let i = 0;
    while(i < numbers.length) {
        sum = sum + numbers[i];
        i = i + 1;
    }
    // sum: 배열의 총합이 들어 있음
    
    return sum / numbers.length;
}