import { groupBy, toHashMap } from './utils.js'

const employees = [
  { id: 1, name: "Alice", age: 23, status: 'working' },
  { id: 3, name: "Bob", age: 25, status: 'working' },
  { id: 6, name: "John", age: 27, status: 'working' },
  { id: 8, name: "David", age: 23, status: 'quit_job' },
  { id: 10, name: "Eve", age: 20, status: 'working' },
];


const products = [
  { id: 1, name: "Phone", price: 1200 },
  { id: 2, name: "Laptop", price: 3000  },
  { id: 3, name: "Tab", price: 2000  },
  { id: 4, name: "PC", price: 800  },
  { id: 5, name: "Monitor", price: 1500  },
]


const orders = [
  { id: 1, employeeId: 1, productId: 4, quantity: 1 },
  { id: 2, employeeId: 3, productId: 2, quantity: 4 },
  { id: 3, employeeId: 1, productId: 5, quantity: 3 },
  { id: 4, employeeId: 6, productId: 1, quantity: 2 },
  { id: 5, employeeId: 3, productId: 5, quantity: 3 },
  { id: 6, employeeId: 8, productId: 1, quantity: 1 },
  { id: 7, employeeId: 10, productId: 3, quantity: 2 },
];

/*
* {
*   1: [{id: 1, employeeId: 1,  quantity: 1 }, { id: 3, productId: 5, quantity: 3 }]
*   3: [{ id: 3, productId: 2, quantity: 4 }]
* }
* */

// O(n)

const groupedOrder = groupBy(orders, 'employeeId')
const productMap = toHashMap(products)

// ex08
for (const employee of employees) {
  const empOrders = groupedOrder[employee.id]
  let maxRevenueProductId = null

  let maxAmount = -Infinity

  for (const empOrder of empOrders) {
    let amount = 0
    const product = productMap[empOrder.productId]
    if (product.price && empOrder.quantity) amount = product.price * empOrder.quantity

    if (maxAmount < amount) {
      maxAmount = amount
      maxRevenueProductId = product.id
    }
  }

  const maxRevenueProduct = productMap[maxRevenueProductId]

  console.log(employee.id, maxRevenueProduct)
}

// console.log(JSON.stringify(employees))





