# assert
import logging
logging.basicConfig(level=logging.INFO)
def foo(s):
    n = int(s)
    logging.info('n = %d' % n)
    # assert n != 0, 'n is zero!'
    return 10 / n

def main():
    foo('0')

main()
