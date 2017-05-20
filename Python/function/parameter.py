#默认参数和可变参数

#默认参数
def enroll(name, gender, age=6, city='Shanghai'):
    print('name: ', name)
    print('gender: ', gender)
    print('age: ', age)
    print('city:', city)

enroll('Kris', 'male', 10, city='Beijing')

#可变参数
def calc(numbers):
    sum = 0
    for n in numbers:
        sum = sum + n * n
    return sum
print(calc([1, 2, 3, 4]))
