import sys

words = [["*" for i in range(15)] for j in range(5)]    # 2차원 배열 선언
for i in range(5) :
    word = sys.stdin.readline().rstrip()    # 여러 줄을 입력받을 때 input() 대신 사용
    for j in range(len(word)) :
        words[i][j] = word[j]
        
for i in range(15) :
    for j in range(5) :
        if words[j][i] != "*" :
            print(words[j][i], end="")