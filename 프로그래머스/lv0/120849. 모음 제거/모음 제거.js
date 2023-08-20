function solution(my_string) {
    let answer = '';
    const vowels = ['a', 'e', 'i', 'o', 'u']
    for(let i=0; i < my_string.length; i++) {
        const item = my_string[i];

        let isVowel = false;
        for(let j=0; j < vowels.length; j++) {
            if(item === vowels[j]) {
                isVowel = true;
                break;
            }
        }
        if(isVowel) continue;
            answer += item;
    }
    return answer;
}