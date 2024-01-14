function solution(X, Y) {
    var answer = '';
    X = X.split('');
    Y = Y.split('');
    
    for (let i = 0; i < 10; i++) {
        let x_cnt = X.filter(x => Number(x) === i).length;
        let y_cnt = Y.filter(y => Number(y) === i).length;
        answer += i.toString().repeat(Math.min(x_cnt, y_cnt));
    }
    
    if (answer === '') {
        return '-1';
    } 
    else if (answer.split('').filter(x => x === '0').length === answer.length) {
        return '0';
    } 
    else {
        return answer.split('').sort().reverse().join('');
    }
    
    return answer;
}