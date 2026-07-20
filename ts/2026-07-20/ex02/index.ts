class TransactionBase {
  private product: string
  private quantity: number

  constructor(product: string, quantity: number) {
    this.quantity = quantity
    this.product = product

    console.log('constructor in TransactionBase')
  }

  getProduct() {
    return this.product
  }

  getQuantity() {
    return this.quantity
  }
}

class ImportResult extends TransactionBase {
  private quality: string

  constructor(product: string, quantity: number, quality: string) {
    console.log('constructor in ImportResult')
    super(product, quantity)
    this.quality = quality
  }
}

const importResult1 = new ImportResult('Thit Ga', 100, 'A')