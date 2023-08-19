function solution(numbers, k) {

    let cnt = 1;
    for(let i = 0; ; i += 2) {
        i %= numbers.length; // i = i % numbers.length;
        const item = numbers[i];
        if(cnt === k) {
            return item;
        }
        cnt+=1;
    }
    
}