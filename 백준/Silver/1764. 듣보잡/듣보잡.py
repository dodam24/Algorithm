import sys
input = sys.stdin.readline
n, m = map(int, input().strip('\n').split())

a = {input().strip('\n') for _ in range(n)}   # 듣도 못한 사람
b = {input().strip('\n') for _ in range(m)}   # 보도 못한 사람
c = sorted(list(a & b))   # 듣도 보도 못한 사람, 오름차순 정렬

print(len(c))   # 듣보잡의 수
for x in c:   # 명단
    print(x)