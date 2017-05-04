# function
def my_abs(x):
    if x >= 0:
        return x
    else:
        return -x
a = -100
# print(my_abs(a))

# 求一元二次方程组
import math
def quadratic(a,b,c):
    if a == 0:
        return -c/b
    elif (b^2)-4*a*c<0:
        return None
    else:
        x1 = (-b+math.sqrt((b^2)-4*a*c)) / (2*a)
        x2 = (-b-math.sqrt((b^2)-4*a*c)) / (2*a)
        return x1, x2

v1 = quadratic(0,2,1)
v2 = quadratic(3,3,20)
v3 = quadratic(1,10,-3)
print(v1)
print(v2)
print(v3)
