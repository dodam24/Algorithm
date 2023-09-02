# 테스트 케이스
T = int(input())

for i in range(T):
    R, S = input().split()    # 입력 값을 R, S로 나눔
    R = int(R)    # 형변환
    S = str(S)
    
    for i in range(len(S)):
        print(R*S[i], end='')    # 문자열의 인덱스*R의 개수만큼. end는 공백을 없애는 역할
    print()