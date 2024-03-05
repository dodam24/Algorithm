function solution(storey) {
    var answer = 0;
    
    if(storey < 5) return storey;
    
    const remainder = storey % 10;
    const quotient = (storey - remainder) / 10;
    
    return Math.min(solution(quotient) + remainder, 10 - remainder + solution(quotient + 1));
    
    return answer;
}