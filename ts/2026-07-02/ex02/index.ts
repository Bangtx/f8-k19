/*
* OOP
* */

class Animal {
  // name: string // attribute
  private id: number
  private name: string

  constructor(id: number,name: string) {
    this.id = id
    this.name = name
  }

  public getId(): number {
    return this.id
  }

  public setName(name: string) {
    this.name = name
  }

  public getName(): string {
    return this.name
  }
  public toString() {
    return `Animal[id = ${this.id}, name = ${this.name}]`
  }
}

const cat = new Animal(1, 'Cat')  // make new instance
cat.setName('Tom')
console.log(cat.toString())

// khi khoi tao doi tuomh -> truen vao id, name
// co 1 ham nao do log id=1, name=name

// cat.go()
// console.log('dog', dog.name)

//
// class Person
//   go() {
//     console.log('the men is going')
//   }
//
//   eat() {
//     console.log('the men is eating')
//   }
// }
//
// // instance
// const cat = new Animal()
// const dog = new Animal()
//
// dog.go()
// dog.eat()
//
// // instance
// const men = new Person()
// men.eat()