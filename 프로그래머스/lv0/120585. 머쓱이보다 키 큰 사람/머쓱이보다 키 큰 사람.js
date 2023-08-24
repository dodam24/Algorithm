function solution(array, height) {
    let cnt = 0;
    for(let i=0; i < array.length; i++) {
        const item = array[i];
        if(item > height) {
            cnt++;
        }
    }
    return cnt;
}