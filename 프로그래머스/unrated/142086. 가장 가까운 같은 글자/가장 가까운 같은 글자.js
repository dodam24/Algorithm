function solution(s) {
    var answer = [];
    
    for(let i =0 ; i< s.length ; i++){
        const before = s.slice(0,i)    // 현재 글자의 앞 부분까지 자르기
        ret.push(before.lastIndexOf(s[i]) === -1 ? -1 : i-before.lastIndexOf(s[i]))    // lastIndexOf(): 뒤에서부터 문자열의 위치 찾기
    }
    
    return answer;
}
