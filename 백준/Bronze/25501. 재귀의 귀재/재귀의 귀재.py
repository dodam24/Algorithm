import sys
n = int(input())

def recursion(s, l, r):
  # recursion 함수가 호출될 때마다 cnt를 증가
  global cnt  
  cnt += 1
  if l >= r: return 1
  elif s[l] != s[r]: return 0
  else: return recursion(s, l+1, r-1)
  
def isPalindrome(s):
  return recursion(s, 0, len(s)-1)

for i in range(n):
  cnt = 0
  # sys.stdin.readline()은 줄바꿈(\n)이 포함되므로
  # rstrip을 이용하여 줄바꿈과 개행을 제거하고 인자로 반환한다.
  print(isPalindrome(sys.stdin.readline().rstrip()), cnt)