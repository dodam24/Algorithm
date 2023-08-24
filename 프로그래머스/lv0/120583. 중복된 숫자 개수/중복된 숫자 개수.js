function solution(array, n) {
    let cnt = 0;
    for(let i=0; i < array.length; i++) {
        const item = array[i];
        if(item === n) {
            cnt++;
        }
    }
    return cnt;
}