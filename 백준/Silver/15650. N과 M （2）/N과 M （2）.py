"""
ex. [1,2]와 [2,1]은 중복되는 수열에 해당하므로 
    앞의 숫자가 뒤의 숫자보다 작은 경우를 제외
    따라서 1부터 n까지 X. start부터 n까지의 숫자를 사용
"""

n, m = map(int, input().split())
s = []

def dfs(start):
  if len(s) == m:
    print(' '.join(map(str, s))) 
    return
  
  for i in range(start, n+1):
    if i in s:
      continue
    s.append(i)
    dfs(i+1)  # 재귀함수를 호출할 때는 i를 이용하여 자신의 다음 숫자를 호출
    s.pop()
    
dfs(1)
