import sys
input = sys.stdin.readline

n = int(input())
s = set() # 유저의 닉네임을 저장
ans = 0
input()

for i in range(n - 1):
  user = input().strip()
  if user == "ENTER":
    ans += len(s)
    s.clear() # 다음 ENTER 명령어를 위한 초기화
  else:
    s.add(user)
ans += len(s)

print(ans)