function solution(s){
    
    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log('Hello Javascript')

    let stack = [];
    
    for(let i = 0; i < s.length; i++) {
        if(stack[stack.length - 1] === '(' && s[i] === ')') {
            stack.pop();
        } else {
            stack.push(s[i]);
        }
    }
    
    return !stack.length;
}