function solution(my_string) {
    let answer = '';
    
    for(let i=0; i < my_string.length; i++) {
        const ch = my_string[i];
        const isCapital = ch < 'a';
        if(isCapital) {
            answer += ch.toLowerCase();
        } else {
            answer += ch.toUpperCase();
        }
    }

    return answer;
}