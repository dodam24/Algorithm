import sys
input = sys.stdin.readline

n = int(input())
card = list(map(int, input().split()))  # 가지고 있는 카드
# 이진 탐색을 위한 정렬
card.sort()

m = int(input())
judge_card = list(map(int, input().split()))  # 판단해야 하는 카드

answer = []

def search(target, card):
  min = 0
  max = n-1
  
  while min <= max:
    mid = (min + max) // 2
    
    if card[mid] == target:
      return 1
    elif card[mid] > target:
      # [ x x x | x x x ] : target이 mid보다 왼쪽이므로 max를 mid-1
      max = mid - 1
    else:
      # [ x x x | x x x ] : target이 mid보다 오른쪽이므로 min을 mid+1
      min = mid + 1
  return 0 

for i in judge_card:
  answer.append(search(i, card))
  
result = " ".join(map(str, answer))
print(result)