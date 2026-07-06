import {ProductI} from './type'
import {v7} from "uuid";

export class Product implements ProductI {
  private  id: string
  private name: string
  private price: number

  constructor(name: string, price: number) {
    this.id = v7().toString()
    this.name = name
    this.price = price
  }

  getId(): string {
    return this.id
  }
  getName(): string {
    return this.name
  }
  setName(name: string): void {
    this.name = name
  }

  getPrice(): number {
    return this.price
  }
  setPrice(price: number): void {
    this.price = price
  }

  toString() {
    return `Product { id: ${this.id}, name: ${this.name} }`
  }
}
