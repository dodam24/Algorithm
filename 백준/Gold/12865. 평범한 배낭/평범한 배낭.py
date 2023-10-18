import sys
input = sys.stdin.readline

n, k = map(int, input().split())
items = []

# n개의 물건 정보를 입력 받아 items 리스트에 저장
for _ in range(n):
  w, v = map(int, input().split())
  items.append((w, v))
  
dp = [0 for _ in range(k+1)]

# 각 물건에 대해 무게(w)와 가치(v)를 순회하며 최적의 해를 계산
for item in items:  
  w, v = item
  for i in range(k, w-1, -1):  # k부터 시작하여 w보다 작거나 같을 때까지 거꾸로 순회
    dp[i] = max(dp[i], dp[i-w]+v)  # 물건을 넣었을 때와 넣지 않았을 때 중 최대 가치를 선택

print(dp[-1])  # 배낭에 넣을 수 있는 무게 k에서의 최대 가치를 출력