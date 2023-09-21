import sys, math
input = sys.stdin.readline

# 소수 여부 판별
def isPrime(num):
  if num == 0 or num == 1:  # 0 또는 1일 경우, 소수 X
    return False
  else:
      # 2부터 num의 제곱근 +1까지 나눠보며 소수인지 아닌지 확인
      for i in range(2, int(math.sqrt(num)) + 1):
        if num % i == 0:
            return False
      return True
 
# 테스트 케이스만큼 반복   
n = int(input())
for _ in range(n):
    num = int(input())
    while True:
        if isPrime(num) == True:  
            print(num)
            break
        else:
            num += 1