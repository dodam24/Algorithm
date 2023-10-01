import sys
from collections import deque
input = sys.stdin.readline

n = int(input())
a = list(map(int, input().split()))
b = list(map(int, input().split()))
m = int(input())
c = list(map(int, input().split()))

# deque는 queue와 stack의 특성을 모두 가지고 있는 자료형 구조
queStack = deque()

# 자료구조의 개수 n만큼 반복한다.
for i in range(n):
  if a[i] == 0:
    queStack.append(b[i])
else:
  if len(b) == 0:
    print(*c)
    sys.exit()

# 수열의 길이 m만큼 queStack에 넣어서 pop한다.
for i in range(m):
  queStack.appendleft(c[i])
  print(queStack.pop(), end= " ")