import sys

input = sys.stdin.readline

n = int(input())  # 수의 개수 입력 받기 
num = list(map(int, input().split()))  # 수열 입력 받기
op = list(map(int, input().split()))  # 연산자(+, -, *, //)의 개수

# 최댓값과 최솟값을 초기화
maximum = -1e9
minimum = 1e9

# DFS 메서드 정의
def dfs(depth, total, add, sub, mul, div):
  global maximum, minimum
  if depth == n:  # 주어진 수열을 다 받았을 경우, 최댓값과 최솟값을 계산
    maximum = max(total, maximum)
    minimum = min(total, minimum)
    return
  
  if add:
    dfs(depth+1, total+num[depth], add-1, sub, mul, div)
  if sub:
    dfs(depth+1, total-num[depth], add, sub-1, mul, div)
  if mul:
    dfs(depth+1, total*num[depth], add, sub, mul-1, div)
  if div:
    dfs(depth+1, int(total/num[depth]), add, sub, mul, div-1)

# DFS 메서드 호출    
dfs(1, num[0], op[0], op[1], op[2], op[3])

# 최댓값과 최솟값을 출력
print(maximum)
print(minimum)