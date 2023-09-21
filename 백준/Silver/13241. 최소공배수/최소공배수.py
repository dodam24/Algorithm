A, B = map(int, input().split())
res = A * B

# 최대공약수
while B: 
  if A > B:
    A, B = B, A
  B %= A

# 최소공배수
print(res // A)