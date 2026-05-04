// object
/*
* dict / hashmap
* {
*   key1: value
*   key2: value
* }
* array
* */

// const student = {
//   name: 'tran van a',
//   age: 20,
//   address: 'Ha Noi',
//   doHomework: function () {
//     console.log(`${this.name} is doing homework`)
//   }
// }
//
// const teacher = {
//   name: 'nguyen van b',
//   age: 40
// }
//
// console.log(typeof student)

const student = {
  name: 'hoang',
  age: 28,
  country: 'VN',
  parent: {
    name: 'bo cua hoang'
  }
}

// const mentor = {
//   name: 'bang',
//   age: 28,
//   country: 'VN'
// }

// const mentor = {}
// mentor.name = student.name
// mentor.age = student.age
// mentor.country = student.country
// mentor.parent = student.parent

// es6
// const mentor = {...student}
// mentor.parent = {}
// mentor.parent.name = student.parent.name
//
// mentor.name = 'bang'
//
// mentor.parent.name = 'bo cua bang'
//
// console.log(mentor)
// console.log(student)

// console.log(JSON.stringify(student))
//
// console.log(JSON.parse(`{"id":1}`))

const mentor = JSON.parse(JSON.stringify(student))
mentor.parent.name = 'bo cua bang'

console.log(mentor)
console.log(student)
