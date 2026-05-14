/*
lap di lap lai 1 cong viecj naoo day
for
while
for of
for in
forEach
map
filter
find
reduce
* */

/*
while
let i = 0

while (i < 10) {
  console.log(i)
  i = i + 2
}
*/

/*
// find -> tim kiem 1 phan tu theo 1 dkien
// ko tim dc -> undefined
const students = [
  { id: 3, name: 'test 001', age: 20 },
  { id: 2, name: 'test 002', age: 30 },
]
// tim hv co tuoi = 30
// const student = students.find((student, index) => student.age > 15)
//
// console.log('result', student)
// viet 1 ham hs theo ten
// students -> array
// name -> string

// tim ten hs: findStudentName
// tim hs co ten la ...: findStudentByName
const findStudentByNameOrNull = (students, name) => {
  if (students.length === 0 && name) return undefined

  return students.find((student) => student.name.trim().toLowerCase() === name.trim().toLowerCase())
}

const student = findStudentByNameOrNull(students, 'test 001             ')
console.log(student)
*/

/*
// filter: loc lay ra nhieu phan tu
const students = [
  { id: 3, name: 'test 001', age: 20 },
  { id: 2, name: 'test 002', age: 30 },
  { id: 4, name: 'test 003', age: 50 },
]
const filteredStudents = students.filter(student => student.age > 25)
console.log(filteredStudents)
*/

// const students = [
//   { id: 3, name: 'test 001', age: 20 }, // 0x01
//   { id: 2, name: 'test 002', age: 30 }, // 0x02
//   { id: 4, name: 'test 003', age: 50 }, // 0x03
// ]
// moi phan tu trong object can then isComfirmed = true
// for (const student of students) {
//   student.isConfirmed = true
// }

// const student = students[0] // 0x01
// student.isComfirmed = true
// console.log(students)


// const confirmedStudents = students.map((student) => {
//   // student.isConfirmed = true
//   // return student
//   return {...student, isConfirmed: true}
// })
// confirmedStudents[0].id = 300
//
// console.log(confirmedStudents)
// console.log(students)

/*
const student = {
  id: 1, name: 'test 1', age: 30
}

for (const key in student) {
  console.log(key, student[key])
}
*/

// const students = [
//   { id: 3, name: 'test 001', age: 20, score: 8 },
//   { id: 2, name: 'test 002', age: 30, score: 6 },
//   { id: 4, name: 'test 003', age: 50, score: 9 },
// ]
// tim nhung ban co score >= 7 -> danh dau la rank = 'very good'
// tim nhung ban co score < 7 -> danh dau la rank = 'good'
// ket hop filter + map

/*
const goodStudents = students
  .filter((student) => student.score >= 7)
  .map(student => {
    return {...student, rank: 'good'}
  })

console.log(goodStudents)
*/