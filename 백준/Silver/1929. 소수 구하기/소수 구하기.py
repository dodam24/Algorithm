# 풀이 1
# import sys 
# import math

# m, n = map(int, sys.stdin.readline().split())

# def isPrime(x):
#   if x == 1:
#     return False
#   for i in range(2, int(math.sqrt(x)+1)):
#     if x % i == 0:
#       return False
#   return True

# for i in range(m, n+1):
#   if isPrime(i):
#     print(i)
    
    
   
# 풀이 2 
# 에라토스테네스의 체 알고리즘을 이용한 풀이
import sys

# n보다 작거나 같은 소수들의 리스트를 반환하는 함수
def getPrimes(n):
  # 0과 1은 소수가 아니므로 False로 초기화
  isPrime = [False, False] + [True] * (n-1)
  primes = []
  for i in range(2, n+1):
    if isPrime[i]:
      primes.append(i)
      # i의 배수들을 모두 소수가 아닌 것으로 표시
      for j in range(i*2, n+1, i):
        isPrime[j] = False
  return primes

# 입력 받은 두 수의 범위를 저장
m, n = map(int, sys.stdin.readline().split())

# n보다 작거나 같은 소수들의 리스트를 구함
primes = getPrimes(n)

# m부터 n까지의 수 중에서 소수인 수를 출력
for p in primes:
  if p >= m:
    print(p)
    

# getPrimes 함수를 호출하여
# n 이하의 소수들의 리스트를 미리 구해놓은 후, 
# m 이상의 수 중에서 소수인 수를 찾아서 출력한다.