function solution(n, lost, reserve) {
    const clothes = Array(n).fill(1);
    
    lost.map((lost) => {clothes[lost-1] = 0});
    
    reserve.map((reverse) => {clothes[reverse-1] += 1});
    
    for (let i = 0; i < n; i++) {
        if (clothes[i] === 0 && clothes[i-1] === 2) {
            clothes[i] = 1;
            clothes[i-1] = 1;
        }
        
        else if (clothes[i] === 0 && clothes[i+1] === 2) {
            clothes[i] = 1;
            clothes[i+1] = 1;
        }
    }
    
    return clothes.filter(c => c > 0).length;
}

// lost, reverse 배열 가져와서 빈 배열에 담고 각 숫자를 꺼내서 숫자끼리 비교
// reverse에서 +1 또는 -1인 숫자가 lost에 있으면 result +1
// result의 기본값은 전체 학생 수(n) - lost.length