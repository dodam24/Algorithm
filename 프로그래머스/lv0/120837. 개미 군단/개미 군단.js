function solution(hp) {
    let cnt = 0;
    let arr = [5, 3, 1];
    
    let i = 0;
    while(i < arr.length) {
        let item = arr[i];
        if(hp >= item) {
            cnt += Math.floor(hp / item);
            hp -= Math.floor(hp/item) * item;
        }
        i += 1;
        
    }
    
    return cnt;
}