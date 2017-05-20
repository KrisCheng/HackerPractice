# filter
def is_odd(n):
    return n % 2 == 1
print(list(filter(is_odd,[1,2,3,4,5,7])))

#打印1000以内的素数
def _odd_iter():
    n = 1
    while True:
        n = n + 2
        yield n

def _not_divisible(n):
    return lambda x: x % n > 0

def primes():
    yield 2
    it = _odd_iter()
    while True:
        n = next(it)
        yield n
        it = filter(_not_divisible(n), it)

print('1000内的素数:')
for n in primes():
    if n < 1000:
        print(n)
    else:
        break

#打印回数
def is_palindrome(n):
    t = str(n)
    return t == t[::-1]
output = filter(is_palindrome, range(1, 1000))
print(list(output))
