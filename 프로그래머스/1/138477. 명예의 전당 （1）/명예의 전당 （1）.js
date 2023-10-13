function solution(k, score) {
    var answer = [];
    
    // 1. 명예의 전당(k)을 담는 배열을 생성 
    var nums = [];
    
    // 2. score에 담긴 점수를 하나씩 꺼낸다.
    score.forEach(num => {
        // 3. 명예의 전당에 넣는다.
        nums.push(num);
        
        // 4. 명예의 전당 배열을 내림차순 정렬하고, 상위 k번까지 자른다.
        nums.sort((a, b) => b - a).splice(k);
        
        // 5. 명예의 전당 배열의 최솟값을 answer에 담는다.
        answer.push(Math.min.apply(null, nums));
    });
    // 6. 일차별 명예의 전당에 담긴 최솟값을 return 한다.
    return answer;
}