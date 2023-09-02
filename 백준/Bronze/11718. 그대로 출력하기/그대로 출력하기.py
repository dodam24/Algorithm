while True:
    try:
        print(input())
    except EOFError:    # EOF(End Of File): 입력이 끝날 때까지 출력
        break