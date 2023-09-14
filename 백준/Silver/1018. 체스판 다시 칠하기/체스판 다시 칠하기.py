n, m = map(int, input().split())

chess=[]
cnt=[]

for i in range(n):
    chess.append(input())
    
for a in range(n-7):    # 8*8로 자르기 위해 -7
    for b in range(m-7):
        w_index = 0
        b_index = 0  
        for i in range(a, a+8):    # 행과 열의 시작지점 파악(= 짝수인지, 홀수인지 여부)
            for j in range(b, b+8):
                if (i+j)%2 == 0:
                    if chess[i][j]!='W':
                        w_index += 1
                    else:
                        b_index += 1
                else:
                    if chess[i][j]!='W':
                        b_index += 1
                    else:
                        w_index += 1
                        
        cnt.append(w_index)
        cnt.append(b_index)
print(min(cnt))