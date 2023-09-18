import sys
input = sys.stdin.readline

n = int(input())
company = {}  # 빈 딕셔너리 생성, 여기에 이름과 상태 저장
for _ in range(n):
  people, state = input().rstrip().split()  # rstrip(): 공백 제거
  if state == 'enter':
    # 딕셔너리에 해당 사람을 key로 추가하고, 값은 True로 설정 (입장)
    company[people] = True
  else:
    # 딕셔너리에서 해당 사람을 삭제 (퇴장)
    del company[people]

# 딕셔너리의 키를 역순으로 정렬하여 출력
print("\n".join(sorted(company.keys(), reverse=True)))