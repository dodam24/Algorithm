n = int(input())
dp = []

for i in range(n):
  dp.append(list(map(int, input().split())))
  
for i in range(1, n):
  for j in range(i + 1):
    if j == 0:  # 행의 첫 번째 숫자인 경우
      dp[i][j] = dp[i-1][j] + dp[i][j]
    elif j == i:  # 행의 마지막 숫자인 경우
      dp[i][j] = dp[i-1][j-1] + dp[i][j]
    else:  # 이외의 경우
      dp[i][j] = max(dp[i-1][j] + dp[i][j], dp[i-1][j-1] + dp[i][j])
      
print(max(dp[n-1]))