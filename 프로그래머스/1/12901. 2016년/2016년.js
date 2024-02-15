function solution(a, b) {
    var answer = '';
 
    let date = new Date(2016, (a - 1), b);
    return date.toString().slice(0, 3).toUpperCase();
    
    return answer;
}