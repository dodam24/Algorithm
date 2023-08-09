function solution(num1, num2) {
    var answer = Math.floor(num1 / num2 * 1000);
    return answer;
}

// 1. num1을 num2로 나눈다.
// 2. 나눈 값에 1000을 곱한다.
// 3. 그 값의 정수 부분을 구한다.