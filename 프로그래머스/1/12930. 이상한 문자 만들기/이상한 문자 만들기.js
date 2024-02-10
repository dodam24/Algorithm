function solution(s) {
    let answer = '';
    let words = s.split(" ");
    
    for(let i = 0; i < words.length; i++) {
        for(let j = 0; j < words[i].length; j++) {
            if(j % 2 === 0) {
                answer += words[i][j].toUpperCase();
            } else {
                answer += words[i][j].toLowerCase();
            }
        }
        if(i < words.length - 1) {
            answer += " ";
        }
    }
    return answer;
}


// function solution(s) {
//     let answer = '';
//     let words = s.split(" ");
    
//     words.forEach((el) => {
//         el.split("").forEach((word, i) => {
//             if(i % 2 === 0) {
//                 answer += word.toUpperCase();
//             } else {
//                 answer += word.toLowerCase();
//             }
//         })
//         answer += " "
//     })
    
//     return answer.slice(0, -1);
// }
