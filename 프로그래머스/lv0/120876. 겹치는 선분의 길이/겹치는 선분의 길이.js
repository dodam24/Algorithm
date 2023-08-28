function solution(lines) {
    const start = Math.min(... lines.flat())
    const end = Math.max(... lines.flat())
    const lst = [...Array(end-start)].fill(0)
    
    lines.forEach(el => {
        for(let i = el[0]; i < el[1]; i++) {
            lst[i-start] += 1
        }
    })
    return lst.reduce((a, c) => c > 1 ? a + 1 : a, 0);
}

// ...lines.flat() : lines 배열의 모든 요소(중첩 배열)를 풀어서 1차원 배열로 만들어주는 역할

// arr.reduce((누적 계산값, 현재 값) => { return 계산값 });
// : c가 1보다 크면 누적값 a에 1을 더해주고, 그렇지 않으면 누적값 a를 그대로 유지