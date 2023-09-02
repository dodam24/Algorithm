num1, num2 = input().split()
num1 = int(num1[::-1])    # [::-1] : 문자열을 역순으로 출력
num2 = int(num2[::-1])

print(num1) if num1 > num2 else print(num2)