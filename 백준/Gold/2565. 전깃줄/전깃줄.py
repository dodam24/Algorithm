n = int(input())
list = []
dp = [1] * n  # 길이가 n인 리스트 생성, 모든 요소를 1로 초기화

for i in range(n):
  a, b = map(int, input().split())
  list.append([a, b])
  
list.sort()  # A 번호 기준으로 오름차순 정렬

# 최장 증가 부분 수열(LIS) 찾기
for i in range(1, n):
  for j in range(0, i):
    # 현재 원소(i)의 B 번호가 이전 원소(j)의 B 번호보다 크면 DP 카운팅 증가
    if list[j][1] < list[i][1]:
      dp[i] = max(dp[i], dp[j]+1)
      
print(n - max(dp))