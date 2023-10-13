import sys
input = sys.stdin.readline

n = int(input())
arr = []
for i in range(n):
  arr.append(list(map(int, input().strip().split())))
  
  # n x 3 형태의 2차원 DP 배열을 만들어 R, G, B 페인트를 칠했을 때의 최솟값들을 저장
  # 예를 들어, DP[N][0]은 현재 N번 집에 R 페인트를 칠했을 때의 최솟값을 저장
  
for i in range(1, n):  # 현재 색을 제외하고 나머지 두 가지 색 중 최솟값을 현재 비용에 더해준다.
  arr[i][0] += min(arr[i-1][1], arr[i-1][2])  # R
  arr[i][1] += min(arr[i-1][0], arr[i-1][2])  # G
  arr[i][2] += min(arr[i-1][0], arr[i-1][1])  # B
    
print(min(arr[n-1]))