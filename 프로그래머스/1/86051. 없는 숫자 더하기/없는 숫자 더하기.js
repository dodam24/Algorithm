function solution(numbers) {
    var answer = 0;
    for(let i = 0; i < 10; i++) {
        if(!numbers.includes(i)) answer += i;
    }
    return answer;
}


// reduce 함수 사용
/*
    function solution(numbers) {
        var answer = 0;
        
        sum = [0, 1, 2, 3].reduce(function (accumulator, currentValue)) {
            return accumulator + currentValue;
        }, 0);
        
        return answer;
    }


*/