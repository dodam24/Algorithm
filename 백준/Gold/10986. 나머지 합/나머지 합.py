import sys
input = sys.stdin.readline

n, m = map(int, input().split())
num = list(map(int, input().split()))
sum = 0   # 부분합
remainder = [0] * m   # m으로 나눈 나머지

for i in range(n):
  sum += num[i]
  remainder[sum % m] += 1
  
result = remainder[0]   # 나머지가 0이 되는 경우의 수

for i in remainder:
  result += i * (i-1) // 2   # nC2 = n(n-1) / 2
  
print(result)