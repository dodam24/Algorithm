# 재귀 함수를 이용한 팩토리얼 구현
def factorial(n):
  if n == 0:
    return 1
  return n * factorial(n-1)

n, k = map(int, input().split())
print(factorial(n) // (factorial(k) * factorial(n-k)))