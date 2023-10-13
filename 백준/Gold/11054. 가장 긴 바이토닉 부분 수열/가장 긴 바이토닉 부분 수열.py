n = int(input())
lst = list(map(int, input().split()))

inc = [1] * n
dec = [1] * n

# 증가하는 가장 긴 부분 수열
for i in range(n):
  for j in range(i):
    if lst[i] > lst[j] and inc[i] <= inc[j]:
      inc[i] = inc[j] + 1
  
# 감소하는 가장 긴 부분 수열   
for i in range(n-1, -1, -1):
  for j in range(i, n):
    if lst[i] > lst[j] and dec[i] <= dec[j]:
      dec[i] = dec[j] + 1

# 증가 부분 수열과 감소 부분 수열을 합친 길이를 계산    
for i in range(n):
  inc[i] = inc[i] + dec[i] - 1
  
print(max(inc))