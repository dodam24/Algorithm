n = int(input())
people = [input().split()for _ in range(n)]
people.sort(key=lambda x: int(x[0]))  # people 리스트를 첫 번째 요소(나이)를 기준으로 정렬

for x in people:
  print(' '.join(x)) 