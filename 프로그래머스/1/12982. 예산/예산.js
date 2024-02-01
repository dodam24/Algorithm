function solution(d, budget) {
    d.sort((a, b) => a - b);
    
    while(d.reduce((acc, cur) => (acc + cur), 0) > budget) d.pop();
    
    return d.length;
}
