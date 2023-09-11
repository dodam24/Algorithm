import sys
input = sys.stdin.readline

while True:
    a, b, c = map(int, input().split())
    if a == 0 and b == 0 and c == 0:
        break
        
    arr = sorted([a, b, c])
    if arr[0] + arr[1] <= arr[2]:
        print("Invalid")
        continue
        
    cnt = (a == b) + (b == c) + (a == c)
    if cnt == 0:
        print("Scalene")
    elif cnt == 1:
        print("Isosceles")
    else:
        print("Equilateral")