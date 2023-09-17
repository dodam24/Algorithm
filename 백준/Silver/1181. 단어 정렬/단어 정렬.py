n = int(input())

words = [str(input()) for i in range(n)]

words = list(set(words))    # set 내장 함수를 이용하여 중복 값을 제거
words.sort()    # sort를 이용하여 1) 사전 순으로 정렬
words.sort(key=len)    # 2) 길이 순으로 정리 (= 길이가 짧은 것부터)

for i in words:
    print(i)