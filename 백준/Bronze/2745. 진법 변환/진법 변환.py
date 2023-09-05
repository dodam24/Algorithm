num_list = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
n, b = input().split()
answer = 0

for i, num in enumerate(n[::-1]):
    answer += int(b) ** i * num_list.index(num)

print(answer)

# 참고: 파이썬의 int 함수는 임의의 진법 수를 10진법으로 변환
# n, b = input().split()
# print(int(n, int(b)))