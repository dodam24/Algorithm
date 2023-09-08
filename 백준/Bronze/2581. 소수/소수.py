m = int(input())
n = int(input())
lst = []

for i in range(m, n+1):
    for j in range(2, i+1):
        if j == i:
            lst.append(i)
        if i % j == 0:
            break
            
if not lst:
    print(-1)
else:
    print(sum(lst))
    print(lst[0])  