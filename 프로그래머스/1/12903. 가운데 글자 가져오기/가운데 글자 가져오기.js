function solution(s) {
    var answer = '';
    // s의 가운데 글자를 반환, 단어의 길이가 짝수라면 가운데 두글자를 반환
    if(s.length % 2 !== 0) {
        answer = s[Math.floor(s.length / 2)]
    } else {
        answer = s[s.length / 2 - 1] + s[s.length / 2]
    }
    return answer;
    
    // return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);
}