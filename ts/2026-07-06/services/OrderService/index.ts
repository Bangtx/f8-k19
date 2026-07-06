class OrderService implements OrderServiceI {
    private items: OrderItem[] = []

    createOrder(productId: string, customerId: string): void {
        this.items.push({productId, customerId})
    }
    removeOrder(orderId: string): void {
        throw new Error("Method not implemented.");
    }

    getOrderItems() {
        return this.items
    }
}

const orderService: OrderServiceI = new OrderService()

export {
    orderService
}