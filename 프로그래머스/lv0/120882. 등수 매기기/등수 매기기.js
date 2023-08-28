function solution(score) {
    let avg = score.map(v => (v[0] + v[1]) / 2);
    let sorted = avg.slice().sort((a, b) => b - a);
    return avg.map(v => sorted.indexOf(v) + 1);
}

// slice(): 원본 배열은 유지하고, begin부터 end까지(end 미포함)의 새로운 배열 객체를 반환