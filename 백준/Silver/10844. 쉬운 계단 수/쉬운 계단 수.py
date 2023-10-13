import sys
input = sys.stdin.readline

n = int(input())

dp = [[0] * 10 for _ in range(n+1)]

# 1 자릿수는 0을 제외하고(조건: 0은 앞에 올 수 없음) 1로 초기화
for i in range(1, 10):
  dp[1][i] = 1
  
# dp[N 자릿수][N자리 숫자일 때 해당 Index 앞에 올 수 있는 일의 자리 수]
# 2 자릿수부터 시작
for i in range(2, n+1):  # n 자릿수
  for j in range(10):  # Index
    # 뒷 자리가 0일 때는 앞에 숫자 1만 올 수 있음
    if j == 0: dp[i][j] = dp[i-1][j+1]
    # 뒷 자리가 9일 때는 앞에 숫자 8만 올 수 있음
    elif j == 9: dp[i][j] = dp[i-1][j-1]
    # 뒷 자리가 2~8일 때는 앞에 숫자가 2개씩 올 수 있음
    else: dp[i][j] = dp[i-1][j-1] + dp[i-1][j+1]
    
print(sum(dp[n]) % 1000000000)
