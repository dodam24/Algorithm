function solution(array, n) {
    var answer = 0;
    let minAbs = 99999999;
    
    const sortedArray = array.sort((a,b) => a-b);
    
    for(let i=0; i < array.length; i++) {
        const item = array[i];
        if(minAbs > Math.abs(n-item)) {
            minAbs = Math.abs(n-item);
            answer = item;
        }
    } 
    return answer;
}