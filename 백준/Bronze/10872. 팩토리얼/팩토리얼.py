"""
# for문

n = int(input())
result = 1
if n > 0:
  for i in range(1, n+1):
    result *= i
print(result)
"""

# 재귀 함수
def factorial(n):
  result = 1
  if n > 0:
    result = n * factorial(n - 1)
  return result

n = int(input())
print(factorial(n))