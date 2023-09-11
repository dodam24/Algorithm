num_list = sorted(list(map(int, input().split())))

# 가장 긴 변의 길이 < 다른 두 변의 길이의 합
if num_list[2] >= num_list[0] + num_list[1]:
    print(2 * (num_list[0] + num_list[1]) -1)
else:
    print(sum(num_list))