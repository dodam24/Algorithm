function solution(A, B) {
    // A 배열을 복사해서 새 배열을 생성
    let arr = [...A]
    for(let i = 0; i < arr.length; i++) {
        if(A === B)
            return i;
        else {
            arr.unshift(arr.pop())  // 배열의 마지막 요소를 맨 앞으로 이동 
            if(arr.join('') === B)
                return i+1;
        }
    }
    return -1;
}