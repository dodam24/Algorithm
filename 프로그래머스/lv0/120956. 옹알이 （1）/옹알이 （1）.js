function solution(babbling) {
    var answer = 0;
    const Arr = ["aya", "ye", "woo", "ma"];
    
    // 발음해야 할 문자열 순회
    babbling.forEach(bab => {
        // 발음 가능한 문자열 순회
        Arr.forEach(Arr => {
            // 발음 가능한 문자열인 경우, 문자열을 쪼개고 공백을 포함시켜 합침
            if(bab.includes(Arr)) {
                bab = bab.split(Arr).join(' ');
            }
        })
        // 공백을 제외한 문자열의 길이가 0이면 count
        if(bab.trim().length === 0)
            answer++;
    })
    return answer;
}


// 참고 - 정규 표현식을 사용한 문제 해결 방법

// function solution(babbling) {
//   var answer = 0;
//   const regex = /^(aya|ye|woo|ma)+$/;

//   babbling.forEach(word => {
//     if (regex.test(word)) answer++;  
//   })

//   return answer;
// }
