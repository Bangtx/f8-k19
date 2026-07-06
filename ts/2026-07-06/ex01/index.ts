// interface OrderI {
//   product: string,
//   quantity: number
// }
//
// interface BuyerI {
//   addToCart(order: OrderI): void
//   removeFromCart(order: OrderI): void
// }
//
// // class Buyer implements BuyerI {
// //     addToCart(order: OrderI): void {
// //         throw new Error("Method not implemented.")
// //     }
// //     removeFromCart(order: OrderI): void {
// //         throw new Error("Method not implemented.")
// //     }
// // }
//
// abstract class Buyer {
//   abstract addToCart(order: OrderI): void
//   abstract removeFromCart(order: OrderI): void
//
//   doPayment () {
//     console.log('do payment')
//   }
// }

// mo phong lai hanh vi mua hang
// co 1 app mua hang, khi buyer click vao nut dat hang
// o duoi BE can xu ly createOrder, removeOrder

// customer (id, name, address)
// product (id, name, price)
// order (id, customer, product, items[{id, productId, customerId}], createOrder(productId, customerId), removeOrder(orderId))

