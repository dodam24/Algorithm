import sys

N = int(input())
arr = []

for _ in range(N):  # x, y 좌표를 리스트에 추가
    a, b = map(int, sys.stdin.readline().split())
    arr.append([a, b])
  
arr.sort()  # 정렬

for i in range(N):
  print(arr[i][0], arr[i][1]) # x좌표, y좌표 뽑아서 출력