# 返回函数
def lazy_sum(*args):
    def sum():
        ax = 0
        for n in args:
            ax = ax + n
        return ax
    return sum
f = lazy_sum(1,2,3,4,5,6)
print(f)
print(f())

# 闭包
f1 = lazy_sum(1,2,3)
f2 = lazy_sum(1,2,3)
print(f1 == f2)

def count():
    fs = []
    for i in range(1,4):
        def f():
            return i*i
        fs.append(f)
    return fs
f1,f2,f3 = count()
# 返回函数不要引用任何循环变量，或者后续会发生变化的变量。
print(f1()) #9
print(f2()) #9
print(f3()) #9

# 立即执行
def countInst():
    def f(j):
        def g():
            return j*j
        return g
    fs = []
    for i in range(1, 4):
        fs.append(f(i))
    return fs
f1,f2,f3 = countInst()
print(f1()) #1
print(f2()) #4
print(f3()) #9
