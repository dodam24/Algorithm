s = input()
alphabet = list(range(97,123))    # 아스키코드의 숫자 범위

for x in alphabet :
    print(s.find(chr(x)))
