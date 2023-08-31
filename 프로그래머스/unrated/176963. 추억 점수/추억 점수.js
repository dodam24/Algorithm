function solution(name, yearning, photo) {
    var answer = [];
    
    for(let i of photo) {
        let value = 0;
        for(let j=0; j < name.length; j++) {
            if(i.includes(name[j])) {
                value += yearning[j]
            }
        }
        answer.push(value);
    }
    
    return answer;
}