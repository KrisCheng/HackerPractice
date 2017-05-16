#高阶函数（函数的参数能够接收别的函数）

def add(x, y, f):
    return f(x) + f(y)

x = -5;
y = 10;
print(add(x, y, abs))
