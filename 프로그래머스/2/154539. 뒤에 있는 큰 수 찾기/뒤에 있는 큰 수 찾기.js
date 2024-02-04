function solution(numbers) {
    var answer = [];
    let stack = [];
    
    while(numbers.length) {
        if(!stack.length) {
            answer.push(-1);
            stack.push(numbers.pop());
        } else {
            if(stack[stack.length - 1] > numbers[numbers.length - 1]) {
                answer.push(stack[stack.length - 1]); 
                stack.push(numbers.pop());
            } else {
                stack.pop();
            }
        }
    }
    return answer.reverse();
}