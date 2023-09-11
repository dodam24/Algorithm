a = int(input())
b = int(input())
c = int(input())

if (a + b + c) == 180:
    if (a == 60) & (b == 60):
        print('Equilateral')
    elif (a == b) | (b == c) | (a == c):
        print('Isosceles')
    else:
        print('Scalene')
        
else:
    print("Error")