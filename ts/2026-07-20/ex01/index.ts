class Animal {
  eat() {
    console.log('the animal is eating')
  }

  go() {
    console.log('the animal is going')
  }

  doSomething() {
    this.eat()
    this.go()
  }
}

class Dog extends Animal {
  go() {
    super.go()
    console.log('the dog is going')
  }

  doSomething() {
    this.go()
  }
}

const animal1 = new Animal()
const dog1 = new Dog()
dog1.doSomething()