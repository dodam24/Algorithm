import sys
input = sys.stdin.readline

alphabet = input()
dial = ['ABC', 'DEF', 'GHI', 'JKL', 'MNO', 'PQRS', 'TUV', 'WXYZ']
time = 0

for i in range(len(alphabet)):
    for j in dial:
        if alphabet[i] in j:
            time += dial.index(j) + 3

print(time)
