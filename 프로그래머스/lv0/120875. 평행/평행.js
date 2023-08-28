function solution(dots) {
    var answer = 0;
    
    function calc(a, b, c, d) {
        let abDiff, cdDiff;
        
        abDiff = (b[1] - a[1]) / (b[0] - a[0]);
        cdDiff = (d[1] - c[1]) / (d[0] - c[0]);
        
        if(abDiff === cdDiff) {
            answer += 1;
        }
    }
    
    // 1-2, 3-4를 이었을 때
    calc(dots[0], dots[1], dots[2], dots[3]);
    
    // 1-3, 2-4를 이었을 때
    calc(dots[0], dots[2], dots[1], dots[3]);
    
    // 1-4, 2-3을 이었을 때
    calc(dots[0], dots[3], dots[1], dots[2]);
    
    return answer > 0 ? 1 : 0;
}

// 선분이 평행하다 = 기울기가 같다
// 기울기: y좌표 변화량 / x좌표 변화량
// 선분 조합의 경우: 4C2 (= 3개)
// (1-2, 3-4), (1-3, 2-4), (1-4, 2-3)의 경우를 계산