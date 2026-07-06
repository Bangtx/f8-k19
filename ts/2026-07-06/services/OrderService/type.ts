interface OrderItem {
  productId: string
  customerId: string
}

interface OrderServiceI {
  createOrder(productId: string, customerId: string): void
  removeOrder(orderId: string): void
  getOrderItems(): OrderItem[]
}