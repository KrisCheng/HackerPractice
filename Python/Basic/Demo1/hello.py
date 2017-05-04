# ptyhon basic
name = input('Please input your name:')
print('Hello,', name)
age = int(input('Please input your age:'))
if age >= 18:
    print('your age is:', age)
    print('adult')
elif age >= 6:
    print('your age is:', age)
    print('teenager')
else:
    print('your age is:', age)
    print('baby')

#loop
# names=['Kris','Chan','Jack']
# for name in names:
#     print(name)
sum = 0
for x in range(101):
    if x > 10:
        break
    sum += x
print(sum)
