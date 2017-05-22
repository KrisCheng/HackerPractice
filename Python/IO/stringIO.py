# string IO

from io import StringIO
f = StringIO('Hello!\nKris\nGood Bye!')
while True:
    s = f.readline()
    if s == '':
        break
    print(s.strip())
