x = int(input())  # 약수의 개수
a = list(map(int, input().split())) # N의 약수
a.sort()
print(a[0] * a[-1])