from collections import deque
n = deque(range(1, int(input())+1))
while len(n) != 1:
  n.popleft()
  n.rotate(-1)  # deque.rotate를 사용해서 리스트를 회전 (왼쪽 회전)
print(n[0])