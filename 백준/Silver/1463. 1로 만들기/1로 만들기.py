x = int(input())
dp = [0] * (x + 1)  # dp 리스트 초기화

# dp[1]은 0으로, 1이 1이 되는데 필요한 연산은 0회이므로 dp[2]부터 x까지 반복
for i in range(2, x+1):
  dp[i] = dp[i-1] + 1  # 숫자 i가 1이 되는데 걸리는 최소한의 연산 횟수를 저장
                       # i에서 1을 빼면 i-1이 되므로 +1을 함으로써 초기화
  if i % 2 == 0:
    dp[i] = min(dp[i], dp[i//2] + 1)
  if i % 3 == 0:
    dp[i] = min(dp[i], dp[i//3] + 1)
    
print(dp[x])  # x가 1이 되는데 필요한 연산의 최소 횟수 dp[x]를 출력