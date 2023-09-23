import sys

T = int(input())

arr = [True for _ in range(1000001)]    # 처음에는 0, 1을 제외한 모든 수가 소수(True)인 것으로 초기화

# 에라토스테네스의 체를 이용하여 소수 찾기
for i in range(2, 1001):    # 2부터 n의 제곱근까지의 모든 수를 확인
  if arr[i]:
    for j in range(i+i, 1000001, i):
      arr[j] = False

# 각 테스트 케이스에 대해 반복
for _ in range(T):
  result = 0
  n = int(sys.stdin.readline().rstrip())
  
  # n을 합산하는 소수 쌍 찾기
  for i in range(2, n // 2 + 1):
    if arr[i] and arr[n-i]:
      result += 1
  print(result)