import sys
input = sys.stdin.readline

n, k = map(int, input().split())
nums = list(map(int, input().split()))

result = []
result.append(sum(nums[:k]))  # 처음 k개의 원소의 합을 result 리스트에 추가

for i in range(n - k):  # 나머지 부분 수열에 대해 반복
  result.append(result[i] - nums[i] + nums[k+i])  # 기존에 저장한 결괏값에서 이전 값을 제외하고 이후 값만 더하는 방식으로 시간 초과 방지
  
print(max(result))