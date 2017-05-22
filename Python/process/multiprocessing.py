# multiprocessing

import os

print('Process (%s) start ... ' % os.getpid())

pid = os.fork()
if pid == 0:
    print('I am child process (%s) and my parent is %s.' % (os.getpid(), os.getppid()))
else:
    print('I (%s) just created a childe process (%s).' % (os.getpid(), pid))
