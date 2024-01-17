function solution(numbers) {
    var answer = 0;
    for(let i = 0; i < 10; i++) {
        if(!numbers.includes(i)) answer += i;
    }
    return answer;
}


// reduce 함수 사용
/*
// 0~9까지의 합인 45에서 .reduce 함수를 적용하여 합산한 배열의 모든 값을 빼준다.

function solution(numbers) {
	return 45 - numbers.reduce((cur, acc)) => cur + acc, 0);
}
    }
*/
