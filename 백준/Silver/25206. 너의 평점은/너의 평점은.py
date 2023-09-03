rating = ['A+', 'A0', 'B+', 'B0', 'C+', 'C0', 'D+', 'D0', 'F']
grade = [4.5, 4.0, 3.5, 3.0, 2.5, 2.0, 1.5, 1.0, 0]

total = 0    # 학점의 총합
result = 0    # 전공평점

for i in range(20):
    sub, cre, grd = input().split()
    cre = float(cre)
    if grd != 'P':
        total += cre
        result += cre * grade[rating.index(grd)]
        
print('%.6f' % (result / total))