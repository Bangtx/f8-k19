import {Product} from "./models/Product";
import {ProductI} from "./models/Product/type";
import {Customer} from './models/Customer'
import {orderService} from './services/OrderService'

const iphone10 = new Product('iphone 10', 10000000)
const iphone12 = new Product('iphone 12', 12000000)

const customer1 = new Customer('Hoang Kong Minh')
const customer2 = new Customer('Dang Ngoc Son')

orderService.createOrder(iphone10.getId(), customer1.getId())
console.log(iphone10.toString())

// ke thua
// SOLID
// interface segregation

// interface MasterI {
//   id: number
//   name: string
// }
//
// interface ColorI extends MasterI{}
//
// interface SizeI extends MasterI{}
//
// const color: ColorI = {
//   id: 1,
//   name: 'red'
// }
//
// const size: SizeI  = {
//   id: 1,
//   name: 'XL'
// }


// interface AnimalI {
//   getNumberOfLegs(): number
// }
//
// interface Animal2I {
//   setNumberOfLegs(legs: number): void
// }
//
// class Animal implements AnimalI, Animal2I {
//   private type: string
//   private numberOfLegs: number
//
//   constructor(type: string, numberOfLegs: number) {
//     this.type = type
//     this.numberOfLegs = numberOfLegs
//   }
//
//   setNumberOfLegs(legs: number) {
//     this.numberOfLegs = legs
//   }
//
//   getNumberOfLegs(): number {
//     return this.numberOfLegs
//   }
//
//   go() {
//     console.log('dong vat di')
//   }
// }
//
// const animal: AnimalI = new Animal('cat', 4)
// animal.getNumberOfLegs()

// class Human extends Animal {
//   go() {
//     console.log(`con ng di ${this.getNumberOfLegs()} chan`)
//   }
// }
//
// const human = new Human('human', 2)
// human.go()


