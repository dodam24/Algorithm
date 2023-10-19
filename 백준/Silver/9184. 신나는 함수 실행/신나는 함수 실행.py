import sys
input = sys.stdin.readline

# dp는 21 x 21 x 21인 3차원 배열로, 모든 요소를 0으로 초기화. 이전에 계산된 결과를 저장
dp = [[[0] * (21) for _ in range(21)] for _ in range(21)]  

def w(a, b, c):
  if a <= 0 or b <= 0 or c <= 0:
    return 1
  if a > 20 or b > 20 or c > 20:
    return w(20, 20, 20)
  if dp[a][b][c]:   # 계산한 결과가 dp[a][b][c]에 있다면
    return dp[a][b][c]   # 해당 결과를 반환
  
  if a < b < c:
    dp[a][b][c] = w(a, b, c-1) + w(a, b-1, c-1) - w(a, b-1, c)
    return dp[a][b][c]
  dp[a][b][c] = w(a-1, b, c) + w(a-1, b-1, c) + w(a-1, b, c-1) - w(a-1, b-1, c-1)
  return dp[a][b][c]

while True:
  a, b, c = map(int, input().split())
  if a == -1 and b == -1 and c == -1:
    break
  print(f'w({a}, {b}, {c}) = {w(a, b, c)}')   # w(a, b, c)를 호출하여 계산된 결과를 출력
