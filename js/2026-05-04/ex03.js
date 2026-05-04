// array - mang
// const numbers = [1, 2, 4, 6, 7, 10]
// const array = [1, "2", 4, 6, 7, 10]

// console.log(typeof numbers)
// console.log(numbers[0])
// console.log(numbers[1])

// console.log(numbers.indexOf(1))
// console.log(Array.isArray(numbers))
// console.log(numbers.toString())

// numbers.shift()
// numbers.unshift(0)
// numbers.slice(1, 4)

// console.log(numbers.slice(1, 4))
// console.log(numbers)

const students = [
  {
    id: 1,
    name: 'duy dong',
    age: 20
  },
  {
    id: 2,
    name: 'nguyen minh',
    age: 21
  }
]

const tmpStudents = JSON.parse(JSON.stringify(students))
tmpStudents[0].id = 10

console.log(students)
