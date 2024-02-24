function solution(k, tangerine) {
    var answer = 0;
    const obj = {};
    
    tangerine.forEach((i) => {
        obj[i] = ++obj[i] || 1;
    });
    
    const sortedObj = Object.values(obj).sort((x, y) => y - x);
    
    let sum = 0;
    
    for(let num of sortedObj) {
        ++answer;
        sum += num;
        if(k <= sum) {
            break;
        }
    }
    
    return answer;
}