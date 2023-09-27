import sys
input = sys.stdin.readline

from collections import deque   # List로 구현 시 시간초과 발생, 따라서 collection 모듈의 deque로 풀이

N = int(input())
Q = deque()

for i in range(N):
  order = input().split()
  
  if order[0] == 'push':
    Q.append(order[1])
  elif order[0] == 'pop':
    print(-1) if len(Q) == 0 else print(Q.popleft())
  elif order[0] == 'size':
    print(len(Q))
  elif order[0] == 'empty':
    print(1) if len(Q) == 0 else print(0)
  elif order[0] == 'front':
    print(-1) if len(Q) == 0 else print(Q[0])
  elif order[0] == 'back':
    print(-1) if len(Q) == 0 else print(Q[-1])