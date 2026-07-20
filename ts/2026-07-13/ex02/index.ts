import {v7} from 'uuid'

class Customer {
  private id: string
  private name: string

  constructor(name: string) {
    this.id = v7()
    this.name = name
  }

  getName() {
    return this.name
  }
}

class Product {
  private id: string
  private name: string
  private remaining: number

  constructor(name: string, remaining: number) {
    if (remaining < 0) throw new Error('wrong format')

    this.id = v7()
    this.name = name
    this.remaining = remaining
  }

  getId() {
    return this.id
  }

  getName() {
    return this.name
  }

  setRemaining(remaining: number) {
    this.remaining = remaining
  }

  getRemaining() {
    return this.remaining
  }
}

class CustomerService {
  private customers: Customer[] = []

  add(customer: Customer) {
    this.customers.push(customer)
  }

  getCustomers () {
    return this.customers
  }

  sendNoti() {
    for (const cst of this.customers) {
      console.log(cst.getName(), 'nhan dc thong bao')
    }
  }
}

class Store {
  private id: string
  private name: string
  private products: Product[] = []
  private subscriber: {
    [key: string]: Customer[]
  } = {}

  constructor(name: string) {
    this.id = v7()
    this.name = name
  }

  subscribe(productId: string, customer: Customer) {
    if (Object.keys(this.subscriber).includes(productId)) {
      if (Array.isArray(this.subscriber[productId])) {
        this.subscriber[productId].push(customer)
      }
    } else {
      this.subscriber[productId] = []
      this.subscriber[productId].push(customer)
    }
  }

  import(product: Product, quantity: number) {
    product.setRemaining(quantity)
    if (quantity > 0) {
      const csts = this.subscriber[product.getId()]
      if (!csts) return
    }
  }

  getProducts() {
    return this.products
  }

  getSubscriber() {
    return this.subscriber
  }
}

const cst1 = new Customer('Hoang Kong Minh')
const cst2 = new Customer('Vu Quoc Dung')

const customerServices = new CustomerService()
customerServices.add(cst1)
customerServices.add(cst2)

// them sp moi
const store = new Store('The Gioi Di Dong')

const iphone17 = new Product('i phone 17', 10)
const iphone18 = new Product('i phone 18', 0)
store.addNewProduct(iphone17)
store.addNewProduct(iphone18)

store.subscribe(iphone18.getId(), cst1)
store.subscribe(iphone18.getId(), cst2)

console.log(store.getSubscriber())

// store.addNewProduct('IPhone 19')
// observer pattern