# OOP basic

class Student(object):
    def __init__(self, __name, score):
        self.__name = __name
        self.score = score

    def print_score(self):
        print('%s %s' % (self.__name, self.score))

    def get_name(self):
        return self.__name

    def set_name(self,name):
        self.__name = name


bart = Student('Kris Chan', 100)
bart.print_score()

print(bart.get_name())
bart.name = "Devils"
print(bart.name)
print(bart.get_name())

print(bart)
print(Student)
