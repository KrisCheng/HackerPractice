#高级函数

#slice 切片
L = ['A', 'B', 'C', 'D', 'E']
print(L[1:3])

L1 = ['Hello', 'World', 18, 'Apple', None]
L2 = [x.lower() for x in L1 if isinstance(x,str)]
print(L2)

#generator
#杨辉三角
