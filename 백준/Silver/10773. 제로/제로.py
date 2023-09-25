K = int(input())
stack = []  # 스택 리스트

for i in range(K):
  num = int(input())
  if(num == 0): # num이 0이면 pop
    stack.pop()
  else:
    stack.append(num) # append = push
  
print(sum(stack))