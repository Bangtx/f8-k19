/*
lap di lap lai 1 cong viecj naoo day
for
while
for of
forEach
map
filter
find
reduce
* */

/*
for (start; run condition; next step) {
  logic - code
}

let i = 0
1st: i = 0 -> check i < 10 -> console.log('hello anh em') -> i = 1
2nd: i = 1 -> check i < 10 -> console.log('hello anh em') -> i = 2
3rd: i = 2 -> check i < 10 -> console.log('hello anh em') -> i = 3
4th: i = 3 -> check i < 10 -> console.log('hello anh em') -> i = 4
5th: i = 4 -> check i < 10 -> console.log('hello anh em') -> i = 5
6th: i = 5 -> check i < 10 -> console.log('hello anh em') -> i = 6
7th: i = 6 -> check i < 10 -> console.log('hello anh em') -> i = 7
8th: i = 7 -> check i < 10 -> console.log('hello anh em') -> i = 8
9th: i = 8 -> check i < 10 -> console.log('hello anh em') -> i = 9
10th: i = 9 -> check i < 10 -> console.log('hello anh em') -> i = 10
11th: i = 10 -> check i < 10 -> stop

let i = 0
1st: i = 0 -> check i < 10 -> console.log('hello anh em') -> i = 2
2nd: i = 2 -> check i < 10 -> console.log('hello anh em') -> i = 4
3rd: i = 4 -> check i < 10 -> console.log('hello anh em') -> i = 6
4th: i = 6 -> check i < 10 -> console.log('hello anh em') -> i = 8
5th: i = 8 -> check i < 10 -> console.log('hello anh em') -> i = 10
11th: i = 10 -> check i < 10 -> stop
* */

// for (let i = 0; i < 10; i = i - 2) {
//   console.log(i, 'hello anh em')
// }

// const numbers = [3, 3, 5, 2, 1, 10]
/* in ra man hinh console tat ca cac phan thu cua mang numbers */
/* in ra man hinh console cac phan tu co gia tri le cua mang numbers */

/*
* i = 0 -> first element
* */
// for (let i = 0; i < numbers.length; i = i + 1) {
//   if (numbers[i] % 2 === 1) {
//     console.log(numbers[i])
//   }
// }

/* tinh tong cac phan tu cua mang + in man hinh ket qua cuoi cung */
// let sum = 0
// for (let i = 0; i < numbers.length; i = i + 1) {
//   sum = sum + numbers[i]
// }

/* tinh tong cac phan tu co gia tri chan cua mang + in man hinh ket qua cuoi cung */
// let sum = 0
// for (let i = 0; i < numbers.length; i = i + 1) {
//   if (numbers[i] % 2 === 0) sum = sum + numbers[i]
// }
// console.log(sum)

// const students = [
//   { id: 2, name: 'anh doan', age: 20 },
//   { id: 1, name: 'bang huu', age: 21 },
//   { id: 8, name: 'Đạt Nguyễn', age: 28 },
//   { id: 12, name: 'Toàn Nguyễn', age: 18 },
// ]
//
// /* in ra ten hv co tuoi lon hon hoac bang 21 */
// for (let i = 0; i < students.length; i = i + 1) {
//   const student = students[i]
//
//   if (student.age >= 21) {
//     console.log(student.name)
//   }
// }


// const employees = [
//   { id: 2, name: 'anh doan', salary: 20000000 },
//   { id: 1, name: 'bang huu', salary: 21000000 },
//   { id: 8, name: 'Đạt Nguyễn', salary: 28000000 },
//   { id: 12, name: 'Toàn Nguyễn', salary: 18000000 },
//   { id: 12, name: 'Bang', salary: null },
// ]

/* tinh luong trung binh cua cac nv */
// let totalSalary = 0
// for (let i = 0; i < employees.length; i = i + 1) {
//   if (employees[i].salary !== null) totalSalary = totalSalary + employees[i].salary
// }
//
// const avgSalary = totalSalary / employees.length
// console.log(avgSalary)


// const number = 13
/*
* viet ham check xem so 13 co phai so nguyen to hay ko
*
* so nguyen to: la so co 1 nghiem duy nhat la 1 & chinh so do
*
* output -> true / false
* isPrimeNumber(13) -> true
* isPrimeNumber(11) -> true
* isPrimeNumber(12) -> false
* */

// const isPrimeNumber = (number) => {
//   /*
//     number
//
//     for i in 2 -> n - 1
//         i = 2, 3, 4, ...., n - 1
//
//         numer % i === 0
//           │
//           │  yes
//           │
//           ▼
//         return false
//
//     return true
//   * */
//
//   if (number < 2) return false
//   if (number === 2) return true
//
//   for (let i = 2; i < number; i = i + 1) {
//     if (number % i === 0) return false
//   }
//
//   return true
// }
//
// console.log(isPrimeNumber(10000))

// i < number / 2 + 1

/*
* 32 -> 5.6
* 1, 2, 4, 8, 16, 32
* 1 * 32 = 32
* 2 * 16 = 32
* 4 * 8 = 32
*
*
* 12  -> 3.46
* 1, 2, 3, 4, 6, 12
*
* 1 * 12 = 12
* 2 * 6 = 12
* 3 * 4 = 12
*
* 9 -> 3
* 1, 3, 3, 9
*
* 1 * 9 = 9
* 3 * 3 = 9
* */

// in ra tat ca cac nghiem cua 1 so bat ki

const startTime = performance.now()

const number = 3200000000

// for (let i = 1; i <= number; i = i + 1) {
//   if (number % i === 0) {
//     console.log(i)
//   }
// }

for (let i = 1; i <= number ** 0.5; i = i + 1) {
  if (number % i === 0) {
    console.log(i, number / i)
  }
}

const endTime = performance.now()

console.log(`Call to doSomething took ${endTime - startTime} milliseconds`)