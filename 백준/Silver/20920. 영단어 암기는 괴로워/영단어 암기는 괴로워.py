import sys
input = sys.stdin.readline

N,M = map(int, input().rstrip().split())  # N: 단어의 개수, M: 단어의 길이
word_lst = {}  # 딕셔너리

for i in range(N):
  word = input().rstrip()
  
  if len(word) < M:  # 단어가 M 미만인 경우
    continue
  else:  # 단어가 M 이상인 경우
    if word in word_lst:  # 단어가 있는 경우
      word_lst[word] += 1
    else:  # 단어가 없는 경우
      word_lst[word] = 1
      
word_lst = sorted(word_lst.items(), key = lambda x : (-x[1], -len(x[0]), x[0]))  # x[0] = 단어, x[1] = 단어의 빈도수
# -x[1] = 자주 나오는 단어를 앞에 배치
# -len(x[0]) = 단어의 길이가 길수록 앞에 배치
# x[0] = 단어를 알파벳 사전 순으로 정렬

for i in word_lst:
  print(i[0])