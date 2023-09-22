import sys
input = sys.stdin.readline

# 제한 범위만큼 에라토스테네스의 체를 미리 판별 (timeout 방지)
N = 123456*2 + 1
isPrime = [True] * N

# 2부터 N의 제곱근까지 반복
for i in range(2, int(N**0.5)+1):
  if isPrime[i]:
    # 각 소수 i에 대해, 그 배수를 소수가 아닌 것으로 표시
    for j in range(2*i, N, i):
      isPrime[j] = False

# 소수의 개수를 출력
def counting(inputValue): 
  cnt = 0
  for k in range(inputValue+1, inputValue*2 + 1):
    if isPrime[k]:
      cnt += 1
  print(cnt)

# 0을 입력할 때까지 계속해서 반복
while True:
  k = int(input())
  
  if not k:
    break
  counting(k)