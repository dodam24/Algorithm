function solution(quiz) {
    const answer = [];
    
    for(let i=0; i < quiz.length; i++) {
        const item = quiz[i];
        const itemArr = item.split(' ');
        const fstNum = Number(itemArr[0]);
        const op = itemArr[1];
        const secNum = Number(itemArr[2]);
        const result = Number(itemArr[4]);
        
        const calResult = op === '+' ? fstNum + secNum : fstNum - secNum;

        if(calResult === result) {
            answer.push("O");
        } else {
            answer.push("X");
        }
    }
    
    return answer;
}

// 1. quiz 배열의 원소를 하나씩 꺼낸다.
// 2. 그 원소를 ' '으로 나눠서 숫자와 연산자를 구분한다.
// " 3 - 4 = -3" => ["3", "-", "4", "=", "-3"]
// arr[0] : 첫 번째 숫자
// arr[1] : 연산자
// arr[2] : 두 번째 숫자
// arr[4] : 계산 결과
// 3. 실제로 계산해보고 값이 맞으면 O를, 아니면 X를 answer에 넣는다.

// 1. quiz 배열의 원소를 하나씩 꺼낸다.
// 2. 그 원소를 ' '으로 나눠서 숫자와 연산자를 구분한다.
// " 3 - 4 = -3" => ["3", "-", "4", "=", "-3"]
// arr[0] : 첫 번째 숫자
// arr[1] : 연산자
// arr[2] : 두 번째 숫자
// arr[4] : 계산 결과
// 3. 실제로 계산해보고 값이 맞으면 O를, 아니면 X를 answer에 넣는다.
