function solution(my_string) {
    let result = 0;
    
    for(let i = 0; i < my_string.length; i++) {
        let tmp = 0;
        while(!Number.isNaN(Number(my_string[i]))){
            tmp += my_string[i];
            i++;
        }
        result += Number(tmp);
    }
    return result;
}

// 문자열에 자연수가 없는 경우 0을 return
// Number.isNaN 함수는 인수가 Number type이 아닌 경우, 그 값을 숫자로 강제
// tmp에 숫자를 찾으면 하나씩 넣어주고, 붙어있는 숫자를 tmp에 저장
// tmp에 임시 저장된 문자 형태의 값을 Number(tmp)로 변환 후, result에 더하고 return result를 통해 답을 도출
