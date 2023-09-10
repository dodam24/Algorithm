function solution(s, skip, index) {
    
    // skip 문자를 제거한 알파벳 배열을 반환
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const afterSkip = alphabet.filter((a) => !skip.includes(a)); 

    // map 함수를 이용하여 문자열(s) + index에 위치한 값을 반환
    return s.split('').map((a) => afterSkip[(afterSkip.indexOf(a)+index) % afterSkip.length]).join('');
}




