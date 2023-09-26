from collections import deque
import sys
input = sys.stdin.readline

N = int(input())
queue = deque(map(int, input().split()))  # 현재 줄 서있는 곳
res = list()
stack = list()  # 한 명씩만 설 수 있는 공간
target = 1

while True:
  if target > N: break
  elif len(stack) > 0 and stack[-1] == target:
    tmp = stack.pop()
    res.append(tmp)
    target += 1
  elif len(queue) > 0 and queue[0] == target:
    this = queue.popleft()
    res.append(this)
    target += 1
  elif len(queue) > 0:
    this = queue.popleft()
    stack.append(this)
  else: break
  
ans = [i for i in range(1, N+1)]
if res == ans:
  print("Nice")
else:
  print("Sad")