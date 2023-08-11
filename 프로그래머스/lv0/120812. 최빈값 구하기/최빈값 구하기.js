function solution(array) {
    // compareFunction
    let sortedArray = array.sort((a,b) => a-b); 
    let cnt = 0;
    
    let mode = -1; // 배열의 최빈값
    let modeRepeatCnt = 0; // 최빈값이 연속으로 나타나는 횟수
    let repeatCnt = 0; // 현재 요소의 반복 횟수
    let beforeNumber = -1; // 현재 요소 이전의 요소
    let isDupMode = false; // 최빈값이 중복되는지 여부
    
    while(cnt < array.length) {
        // 현재 요소가 이전 요소와 다른지 확인
        if(beforeNumber !== array[cnt]) {
            repeatCnt = 1;
        } else {
            repeatCnt = repeatCnt + 1;
        }
        
        // 현재 요소의 반복 횟수가 최빈값의 반복 횟수와 같은지 확인
        if(repeatCnt === modeRepeatCnt) {
            // 현재 요소가 현재 최빈값과 다른지 확인
            if(mode !== array[cnt]) {
                isDupMode = true; // 중복된 최빈값
            }
        }
        
        // 새로운 최빈값이 등장
        if(repeatCnt > modeRepeatCnt) {
            mode = array[cnt]; // 최빈값을 현재 요소로 업데이트
            modeRepeatCnt = repeatCnt; // 최빈값의 반복 횟수 업데이트
            isDupMode = false;
        }
        
        beforeNumber = array[cnt]; // 이전 요소 업데이트
        cnt = cnt + 1;
    }
    // 최빈값이 중복되는지 확인하고 적절한 결과 반환
    if(isDupMode) return -1;
    return mode;
}