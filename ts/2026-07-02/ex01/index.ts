/*
type khong ro rang
ko ho tro OOP
-> TS sinh ra
* */

// let a: number = 1
// let b: string = "123"
//
// a = 10
//
// console.log(a, b)

// const isCorrect: boolean = false

// const numbers: number[] = [1, 2, 3]
//
// for (const n of numbers) {
//   console.log(n)
// }

// DRY: don't repeat yourself
interface MasterI {
  name: string
  age: number | null
}

interface PersonI extends MasterI {
  id: number
}

interface EmployeeI extends MasterI {
  id: string
}

interface DirectorI extends EmployeeI {}

const person: PersonI = {
  id: 11,
  name: 'test ythoii',
  age: 20
}

const employee: EmployeeI = {
  id: '1q2345s',
  name: 'Kong Minh',
  age: 22
}

const employees: EmployeeI[] = [
  {
    id: '1q2345s',
    name: 'Kong Minh',
    age: 22
  },
  {
    id: '12sd23',
    name: 'Ngoc Son',
    age: 32
  }
]
// viet ham tim ra nx lon tuoi nhat
// ham do return ve gi, truyen vao gi


// const getOldestEmployee: EmployeeI = (employees: EmployeeI[]) => {
//   return null
// }

// function getOldestEmployee(employees: EmployeeI[]): EmployeeI {
//   return null
// }
