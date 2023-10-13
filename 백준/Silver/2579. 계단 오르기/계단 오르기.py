n = int(input())  # 계단의 개수
s = [int(input()) for _ in range(n)]  # 계단 리스트
dp = [0] * (n)  # dp 리스트

if len(s) <= 2:  # 계단이 2개 이하이면 점수를 모두 더해서 출력
  print(sum(s))
else:  # 계단이 3개 이상일 때
  dp[0] = s[0]  # 첫 번째 계단까지의 최대 점수
  dp[1] = s[0] + s[1]  # 두 번째 계단까지의 최대 점수
  for i in range(2, n):  # 3번째 계단부터 dp 점화식을 이용하여 최댓값 구하기
    dp[i] = max(dp[i-3]+s[i-1]+s[i], dp[i-2]+s[i])  # 2계단 연속 vs 1계단 건너뛴 것을 비교해서 최댓값을 갱신
  print(dp[-1])