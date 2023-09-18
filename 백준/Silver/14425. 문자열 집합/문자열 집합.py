import sys

n, m = map(int, sys.stdin.readline().split())
s = [str(sys.stdin.readline()) for _ in range(n)] # 집합 s
cnt = 0

# 반복문을 돌며 m개의 문자열을 확인
for i in range(m):
  word = str(sys.stdin.readline())
  
  # 집합 s에 문자열이 포함되어 있으면 count
  if word in s:
    cnt += 1
    
print(cnt)

# 문자열 탐색의 경우, set 또는 딕셔너리 자료형이 리스트 대비 속도가 빠름