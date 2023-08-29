function solution(i, j, k) {
    let a = ''; // 빈 문자열 변수로 선언 (=> 문자열의 +값으로 계산)
    for(i; i <= j; i++) {
        // console.log(`${i}`);
        a += i;
        // console.log(`${a}`);
    }
    
    return a.split(k).length - 1;
}