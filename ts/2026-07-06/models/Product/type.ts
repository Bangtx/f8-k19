export interface ProductI {
  getId(): string
  getName(): string
  setName(name: string): void
  getPrice(): number
  setPrice(price: number): void
}