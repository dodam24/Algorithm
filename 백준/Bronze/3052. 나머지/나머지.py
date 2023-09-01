arr = []

for i in range(10):
    num = int(input())
    if num % 42 not in arr:
        arr.append(num % 42)

print(len(arr))