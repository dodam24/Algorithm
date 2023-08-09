function solution(numbers) {
    var answer = [];
    
    for(let i = 0; i < numbers.length; i++) {
        answer.push(numbers[i] * 2);
    }
    
    // let i = 0;
    // while(i < numbers.length) {
    //         answer.push(numbers[i] * 2);
    //         i = i + 1;
    // }
    
    return answer;
}