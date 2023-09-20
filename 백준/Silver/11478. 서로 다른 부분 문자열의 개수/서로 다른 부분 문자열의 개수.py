s = input()
total = set()

for i in range(len(s)):   # s 문자열의 길이만큼 반복 입력
  for j in range(i, len(s)):
    total.add(s[i:j+1])   # i번째 문자부터 j번째 문자까지 부분 문자열 출력
    
print(len(total))