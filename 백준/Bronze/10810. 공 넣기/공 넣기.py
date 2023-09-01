n, m = map(int, input().split())    # n개의 바구니에 공을 m번 넣음

basket = [0] * n

for _ in range(m):
    i, j, k = map(int, input().split())     # i번 바구니부터 j번 바구니까지 k가 적힌 공을 넣음
    for x in range(i, j+1):
        basket[x-1] = k     # 1번 바구니에 넣는다고 할 때, basket[0] 바구니에 넣어야 하기 때문에 인덱스를 x-1로 설정
                            # 바구니 index에 k번호가 적혀있는 공을 대입하면 기존의 숫자는 없어지기 때문에 들어있는 공을 빼고 새로 공을 넣는 것과 동일 

for x in range(n):
    print(basket[x], end=' ')