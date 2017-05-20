#递归
#阶乘
def fact(n):
    if(1 == n):
        return 1;
    else:
        return n*fact(n-1)
print(fact(10));

# 汉诺塔
def hanoi(n, x, y, z):
    if(1 == n):
        print(x,' --> ', z)
    else:
        hanoi(n-1, x, z, y)
        hanoi(1, x, y, z)
        hanoi(n-1, y, x, z)
print(hanoi(3, 'A', 'B', 'C'))
