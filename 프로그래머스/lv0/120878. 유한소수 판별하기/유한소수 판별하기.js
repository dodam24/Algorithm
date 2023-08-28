function solution(a, b) {
    
    // 1. 최대공약수 gcd를 구한다.
    let gcd = 1;
    for(let i = 1; i < b; i++) {
        if(a % i === 0 && b % i === 0) gcd = i;
    }
    
    // 2. 분모 b를 최대공약수 gcd로 나눈다.
    b = b/gcd
    
    // 3. b를 2와 5로 나눈 나머지 값이 0이 될 때까지 반복문을 실행
    // (= 2와 5를 제외한 소수가 있는지 확인)
    while (b % 2 === 0) b = b/2
    while (b % 5 === 0) b = b/5
    
    // 4. b가 1이라면 유한소수(분모의 소인수가 2와 5만 존재)이므로 1을 리턴
    // b가 그 외의 값이라면 무한소수(분모에 2와 5를 제외한 소수가 포함)이므로 2를 리턴
    return b === 1 ? 1 : 2;
}


// toFixed() 메소드를 사용한 풀이법
// : 숫자를 고정 소수점 표기법으로 표시 (= 소수점 아래 n자리까지 표기)

// 2번 풀이법 (= toFixed() 함수 이용)
// function solution(a, b) {
//     return Number((a/b).toFixed(10)) == a/b ? 1 : 2
// }

// 3번 풀이법
// function solution(a, b) {
//     return (a/b).toString().length > 10 ? 2 : 1;
// }