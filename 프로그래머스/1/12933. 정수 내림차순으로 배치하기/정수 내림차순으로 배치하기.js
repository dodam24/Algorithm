function solution(n) {
    var answer = 0;
    // n의 각 자릿수를 내림차순으로 정렬
    
    return Number(String(n).split('').sort((a, b) => b - a).join(''));
    return answer;
}