function solution(s, n) {
    var answer = '';
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lower = "abcdefghijklmnopqrstuvwxyz";
    
    for(let i = 0; i < s.length; i++) {
        let string = s[i];
        if(string === " ") {
            answer += " ";
            continue;
        }
        
        let text = upper.includes(string) ? upper : lower;
        let index = text.indexOf(string) + n;
        if(index >= text.length) index -= text.length;
        answer += text[index];
    }
    
    return answer;
}