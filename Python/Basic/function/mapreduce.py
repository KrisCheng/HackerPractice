# map reduce

# map
def f(x):
    return x*x
r = map(f,[1,2,3,4,5,6,7,8,9])
print(list(r))

# reduece
from functools import reduce
def add(x, y):
    return x + y
print(reduce(add,[1,2,3,4,5,6,7,8,9,10]))

# usage
def normalize(name):
    return name.capitalize()
L1 = ['adam', 'LISA', 'barT']
L2 = list(map(normalize, L1))
print(L2)

from functools import reduce
def prod(L):
    def func(x, y):
        return x*y
    return reduce(func,L)
print('3 * 5 * 7 * 9 =', prod([3, 5, 7, 9]))

def str2float(s):
    point = s.index('.')
    s1 = s[0:point]
    s2 = s[point+1:len(s)]
    def fn(x, y):
        return x * 10 + y
    def char2num(s):
         return {'0': 0, '1': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9}[s]
    return(reduce(fn, map(char2num,s1)) + (reduce(fn, map(char2num,s2))/(10**(len(s)-point-1))) )

print('str2float(\'123.456\') =', str2float('1233.0045688'))
