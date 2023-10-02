// 계단 오르기
// 다이나믹 프로그래밍 (DP, Dynamic Programming), 동적 계획법
// : 복잡한 문제를 간단한 여러 개의 문제로 나누어 푸는 방법

/*
 1. dp 배열 만들기
 2. 1계단, 2계단 미리 저장
 3. 반복문 → dp 테이블 채우기
 4. formula 적용
 5. 최종 결과값 리턴
 */

function climbingStairs(n) {
  if (n == 0) {
    return 0;
  }

  let dp = new Array(n+1);

  dp[1] = 1;
  dp[2] = 2;

  for (let i=3; i <= n; i++) {
    dp[i] = dp[i-1] + dp[i-2];
  }
  return dp[n];
}

console.log(climbingStairs(3), climbingStairs(4), climbingStairs(5))