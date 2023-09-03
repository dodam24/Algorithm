word = input().upper()
unique = list(set(word))

cnt_list = []
for i in unique :
    cnt = word.count(i)
    cnt_list.append(cnt)
  
if cnt_list.count(max(cnt_list)) > 1 :
    print('?')
else :
    max_idx = cnt_list.index(max(cnt_list))
    print(unique[max_idx])