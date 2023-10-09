# 입력
import sys
input = sys.stdin.readline
n = int(input())
board = [list(map(int, input().split())) for _ in range(n)]
result = 1e9  # 결괏값 출력을 위한 result값을 문제의 범위를 벗어나는 큰 수로 초기화
visited = [False for _ in range(n)]  # 방문 여부를 확인하는 리스트

# backTracking 정의
def backTracking(depth, idx):  # 깊이와 인덱스를 나타내는 변수
  global result
  if depth == (n // 2):  # n // 2번 만큼 재귀를 돌면 (= 사람들 중 절반을 돌았다면 남은 절반은 다른 팀)
    start, link = 0, 0  # start팀과 link팀을 0으로 선언
    for i in range(n):
      for j in range(n):
        if visited[i] and visited[j]:  # 방문한 사람을 start팀에 추가
          start += board[i][j]
        elif not visited[i] and not visited[j]:  # 방문 안 한 사람을 link팀에 추가
          link += board[i][j]
    result = min(result, abs(start-link))  # 최솟값을 결괏값에 대입
    return
  
  for i in range(idx, n):  # start팀을 완성하지 못했을 때 백트래킹 실시
    if not visited[i]:
      visited[i] = True
      backTracking(depth+1, i+1)  # 깊이 +1, 같은 번호 중복을 막기 위한 idx+1로 재귀 호출
      visited[i] = False

backTracking(0, 0)  # backTracking 호출
print(result)  # 결괏값 출력