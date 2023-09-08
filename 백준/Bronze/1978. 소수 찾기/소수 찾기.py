n = int(input())
data = list(map(int, input().split()))
count = 0

for x in data:
   for i in range(2, x+1):    # 1은 소수가 아니므로 예외 처리
      if x % i == 0:
         if x == i:    # 숫자가 x에 도달 후 나누어 떨어지면 소수에 해당
            count += 1         
         break

print(count)