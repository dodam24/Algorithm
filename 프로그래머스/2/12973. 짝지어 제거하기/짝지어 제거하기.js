function solution(s)
{
    const stack = [];

    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log('Hello Javascript')
    
    for(let i = 0; i < s.length; i++) {
        const cur = s.charAt(i);
        if(stack[stack.length - 1] === cur) {
            stack.pop();
        } else {
            stack.push(cur);
        }
    }

    return stack.length === 0 ? 1 : 0;
}