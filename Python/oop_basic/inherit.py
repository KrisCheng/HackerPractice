# inherit %% polymorphism

class Animal(object):
    def run(self):
        print('Animal is Running...')

class Dog(Animal):
    def run(self):
        print('Dog is Running...')

class Cat(Animal):
    pass

def run_twice(animal):
    animal.run()
    animal.run()

run_twice(Dog())

dog = Dog()
dog.run()

print(isinstance(dog, Dog))
print(isinstance(dog, Animal))
