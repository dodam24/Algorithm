function solution(num) {
    if(num === 1) return 0;
    let count = 1;
    
    while(count <= 500) {
        num = num % 2 === 0 ? num / 2 : num * 3 + 1;
        
        if(num === 1) return count;
        else count += 1;
    }
    return -1;
}