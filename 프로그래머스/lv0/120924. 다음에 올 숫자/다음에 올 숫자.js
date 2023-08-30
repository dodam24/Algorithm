function solution(common) {
    var answer = 0;
    
    var c1 = common[1] - common[0]
    var c2 = common[2] - common[1]
    
    if (c1 === c2) {
        answer = common[common.length-1] + c1
    } else {
        answer = common[common.length-1] * (common[1] / common[0])
    }
    return answer;
}