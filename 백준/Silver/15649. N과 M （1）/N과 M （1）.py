# 1부터 n까지 자연수 중에서 중복 없이 m개를 고른 순열
n, m = map(int, input().split())

s = []
def dfs():
  if len(s) == m:   # s에 저장된 숫자의 개수가 m과 같다면
    print(' '.join(map(str, s)))  # s에 저장된 숫자들을 문자열로 변환 후, 공백으로 구분하여 출력 
    return
  
  for i in range(1, n+1):
    if i in s:  # 현재 숫자 i가 이미 s에 포함되어 있다면
      continue    # 다음 숫자로 넘어간다.
    s.append(i)   # 그렇지 않다면, i를 s에 추가
    dfs()   # 함수 dfs()를 재귀적으로 호출
    s.pop()   # 함수의 재귀적 호출 후, i를 s에서 제거 -> 다른 순열을 시도
    
dfs()
