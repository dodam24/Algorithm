import sys
input = sys.stdin.readline 

n = int(input())
arr = []

for i in range(n):
    arr.append(int(input()))
    
arr.sort()  # 중앙값을 구하기 위해 정렬

print(round(sum(arr)/len(arr)))  # 산술평균
print(arr[len(arr)//2])  # 중앙값

# 최빈값
dic = dict()
for i in arr:  # 빈도수 구하기
    if i in dic:
        dic[i]+=1
    else:
        dic[i]=1
    
mx = max(dic.values())  # 빈도수 중 최댓값 구하기
mx_dic = []  # 최빈값을 저장할 배열

for i in dic:
    if mx == dic[i]:
        mx_dic.append(i)
    
if len(mx_dic) > 1:  # 최빈값이 여러 개일 경우
    print(mx_dic[1])  # 두 번째로 작은 값 출력
else:
    print(mx_dic[0])  # 해당 값 출력

print(max(arr)-min(arr))  # 범위