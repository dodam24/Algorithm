# 입력 및 초기화
import sys
input = sys.stdin.readline
N = int(input())
a = map(int, input().split())

# hash에 num 개수 반영
hash = {}
for num in a:
  # hash에 num이라는 key가 있으면 그 값을 가져오고, 없으면 0을 반환
  hash[num] = hash.setdefault(num, 0) + 1

# hash에서 num 개수 출력
M = int(input())
b = map(int, input().split())
for num in b:
  print(hash.setdefault(num, 0), end = ' ')