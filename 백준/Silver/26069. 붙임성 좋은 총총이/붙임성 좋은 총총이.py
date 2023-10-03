import sys
input = sys.stdin.readline
from collections import defaultdict

# defaultdict() : key값이 없을 경우 미리 지정해 놓은 초기(default)값을 반환하는 dictionary

dance = defaultdict(bool) # 모든 해시에 대해 디폴트 값은 false가 된다.
dance['ChongChong'] = True  # 단, 무지개 댄스를 처음부터 추던 ChongChong의 값만 True로 변경
answer = 1

for i in range(int(input())):
    A, B = input().split()

    if dance[A]:
        if not dance[B]:
            dance[B] = True
            answer += 1
    elif dance[B]:
        dance[A] = True
        answer += 1

print(answer)