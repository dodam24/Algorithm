// 코드 1
function solution(a, b, n) {
    // 받은 콜라 병 수
    let change = 0
    
    // 교환 가능한 수량이 아닐 때까지 반복
    while(n >= a) {
        change += Math.floor(n / a) * b
        n = Math.floor(n / a) * b + (n % a)
    }
    return change
}



// 코드 2
function solution(a, b, n) {
    // 받은 콜라 병 수
    var answer = 0;
    
    // 교환 가능한 수량이 아닐 때까지 반복
    while(n >= a) {
        answer += Math.floor(n / a) * b
      	// 현재 가지고 있는 빈 병의 수 - 바꿀 수 있는 최대 콜라 병 수 + 새로 받은 콜라 병 수
        n = n - Math.floor(n / a) * a + Math.floor(n / a) * b
    }
    return answer;
}
