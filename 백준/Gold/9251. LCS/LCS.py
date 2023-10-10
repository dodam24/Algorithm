import sys
input = sys.stdin.readline

strA = ' ' + input().rstrip()
strB = ' ' + input().rstrip()
dp = [[0] * len(strB) for _ in range(len(strA))]

for i in range(1, len(strA)):
  for j in range(1, len(strB)):
    if strA[i] == strB[j]:
      dp[i][j] = dp[i-1][j-1] + 1
    else:
      dp[i][j] = max(dp[i-1][j], dp[i][j-1])
      
print(dp[-1][-1])