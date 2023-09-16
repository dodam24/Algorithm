import sys

n = int(sys.stdin.readline())
num_list = [0] * 10001

for _ in range(n):    # append를 사용할 경우, 메모리 재할당이 이루어져 메모리 초과로 실패
    num_list[int(sys.stdin.readline())] += 1
    
for i in range(10001):
    if num_list[i] != 0:
        for j in range(num_list[i]):
            print(i)