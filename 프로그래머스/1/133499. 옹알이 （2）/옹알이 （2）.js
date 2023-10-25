function solution(babbling) {
    const word = ['aya', 'ye', 'woo', 'ma'];  // 발음할 수 있는 단어들
    let count = 0;
    
    for(let i = 0; i < babbling.length; i++) {  // babbling 문자열을 문자 단위로 순회
        let babble = babbling[i];  // babble 변수에 현재 문자를 저장
        
        for(let j = 0; j < word.length; j++) {  // word 배열 안의 단어들에 대해 반복
            if(babble.includes(word[j].repeat(2))) {  // 현재 babble 문자열이 word[j]를 두 번 연속 포함하면 반복문을 종료
                break;
            }
            
            babble = babble.split(word[j]).join(" ");  // 현재 babble 문자열에서 word[j]를 찾아서 공백으로 변경
        }
        
        if(babble.split(" ").join("").length === 0) {  // babble 문자열을 공백으로 대체하고, 그 결과 문자열의 길이가 0이면 (= 모든 단어가 제거되었다면)
            count += 1;  // count 변수 1 증가
        }
    }
    
    return count;
}