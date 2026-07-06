import {v7} from 'uuid'
import {CustomerI} from "./type";

export class Customer implements CustomerI {
  private  id: string
  private name: string

  constructor(name: string) {
    this.id = v7().toString()
    this.name = name
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
}