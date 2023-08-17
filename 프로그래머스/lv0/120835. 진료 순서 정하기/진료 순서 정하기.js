function solution(emergency) {
    let newEmergencyArray = [];
    let cnt = 0;
    while(cnt < emergency.length) {
        newEmergencyArray.push({value: emergency[cnt], idx: cnt});
        cnt = cnt + 1;
    }
    newEmergencyArray.sort((a,b) => b.value-a.value)

    var answer = new Array(emergency.length);
    
    cnt = 0;
    while(cnt < newEmergencyArray.length) {
        let item = newEmergencyArray[cnt];
        answer[item.idx] = cnt + 1;
        cnt = cnt + 1;
    }
    return answer;
}