def factorial(n):
  if n > 1:
    return (n * factorial(n-1))
  else:
    return 1
  
t = int(input())
for i in range(t):
  n, m = list(map(int, input().split()))
  print (factorial(m) // (factorial(n) * factorial(m-n)))