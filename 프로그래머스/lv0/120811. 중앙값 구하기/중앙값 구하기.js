function solution(array) {
   
    let arrayCnt = 0;
    let newArray = [];
    while(arrayCnt < array.length) {
        let minNumber = 1000;

        // 배열에서 최솟값을 찾는다.
        let cnt = 0;
        while(cnt < array.length) {
            if(minNumber > array[cnt]) {
                minNumber = array[cnt];
            }
            cnt = cnt + 1;
        }
        // minNumber을 새 배열에 넣는다.
        newArray.push(minNumber);

        // 기존 배열에서 찾은 값을 지운다.
        let cnt2 = 0;
        while(cnt2 < array.length) {
            if(minNumber === array[cnt2]) {
                array[cnt2] = 1000;
                break;
            }
            cnt2 = cnt2 + 1;
        }
        
        arrayCnt = arrayCnt + 1;
    }
    console.log("new Array : ", newArray);
    // 중앙값 return
    return newArray[Math.floor(array.length / 2)];
}