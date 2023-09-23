import sys
n = int(sys.stdin.readline())
result = 0
x = 1
while x*x <= n:
  x += 1
  result +=1
print(result)