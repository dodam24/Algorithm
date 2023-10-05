def cut(s, n):  # s = 시작점
  if n == 1:
    return 
  for i in range(s + n // 3, s + (n//3) * 2):
    result[i] = ' '
  cut(s, n//3)  # 왼쪽 잘라나가기
  cut(s + n//3 * 2, n//3) # 오른쪽 잘라나가기
  
import sys
while True:
  try:
    N = int(sys.stdin.readline())
    result = ['-'] * (3 ** N) # 최초 리스트 집합
    cut(0, 3 ** N)  # 자르기
    print(''.join(result))
  except:
    break