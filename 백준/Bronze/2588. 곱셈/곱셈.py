a = int(input())
b = input()

for i in range(len(b), 0, -1):
    print(a * int(b[i-1]))
    
print(a * int(b))