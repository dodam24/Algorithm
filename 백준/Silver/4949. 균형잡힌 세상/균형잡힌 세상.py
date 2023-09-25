while(True):
  str = input()
  
  stack = []
  if str == '.':  # .이 들어오면 종료
    break
  
  for i in str:
    if i == '(' or i == '[':  # 여는 괄호가 오면 stack에 추가
      stack.append(i)
    elif i == ')':  # ) 인 경우
      if len(stack) != 0 and stack[-1] == '(':  # stack이 비어있지 않고, 마지막 요소가 ( 이면 pop 
        stack.pop()
      else: # stack이 비어있거나 짝이 맞지 않으면 stack에 )을 추가하고 break 
        stack.append(i)
        break
    elif i == ']' : # ] 인 경우
      if len(stack) != 0 and stack[-1] == '[':  # stack이 비어있지 않고, 마지막 요소가 [ 이면 pop
        stack.pop()
      else: # stack이 비어있거나 짝이 맞지 않으면 stack에 ]을 추가하고 break
        stack.append(i)
        break
      
  if len(stack) == 0: # stack이 비어있으면 모든 괄호들의 균형이 맞으므로 yes 출력 
    print('yes')
  else: # stack이 비어있지 않으면 괄호들의 균형이 맞지 않으므로 no 출력
    print('no')