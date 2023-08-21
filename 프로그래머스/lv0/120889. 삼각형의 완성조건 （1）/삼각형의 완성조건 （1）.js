function solution(sides) {
    var answer = 0;
    
    let maxV = -1;
    let maxVIdx = -1;
    for(let i=0; i < sides.length; i++) {
        const item = sides[i];
        if(maxV < item) {
            maxV = item;
            maxVIdx = i;
        }
    }
    let sum = 0;
    for(let i=0; i < sides.length; i++) {
        if(i !== maxVIdx) {
            sum += sides[i];
        }
    }
    return maxV < sum ? 1 : 2;
}