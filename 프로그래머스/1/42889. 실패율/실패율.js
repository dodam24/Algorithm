function solution(N, stages) {
    let result = [];
    let failureRate = 0;
    
    for (let i = 1; i <= N; i++) {
        let reachedCnt = stages.filter((x) => x >= i).length;
        let currCnt = stages.filter((x) => x === i).length;
        
        failureRate = currCnt / reachedCnt;
        
        result.push([i, failureRate]);
    }
    result.sort((a, b) => b[1] - a[1]);
    
    return result.map((x) => x[0]);
}