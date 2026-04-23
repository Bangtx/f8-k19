// javascript - js
// typescript - ts
/*
* js/ts la 1 ngon ngu lap trinh
* html/css khong phai la 1 ngon ngu lap trinh
* web - frontend
*   - jquery
*   - reactjs
*   - vuejs
*   - angular
* mobile
*   - react native
* desktop
*   - electron js
* backend
*   - express js
*   - nestjs
* AI
*
* ngon ngu lap trinh
* javascript -> ko chat -> de code -> kho bao tri -> ko ho tro OOP
*   tu duy lap trinh
*     - cau truc du lieu & thuat toan
* typescript -> bo dung type (java/C++), co the lap trinh huong doi tuong -> de bao tri -> code hoi lau
*   - oop: lap trinh huong doi tuong
*   - design pattern: 1 so cai quan trong
* dom -> thao tac vs giao dien - tuong tac vs HTML/CSS
* ---> du an ket thuc module (*)
*
* bien - variable
*   su dung de luu tru tam thoi 1 gia tri nao day
*     - luu tru tren ram
*     - chi co tac dung khi chay tien trinh hien tai (file code hien tai)
*
* Khai bao
*   [var/let/const] <tenBien>
* Khoi tao 1 bien
*   [var/let/const] <tenBien> = <value>
* */
// let a = 10, b = 200
//
// a = 100
//
// console.log(a, b)
//
// const c = 1000
// c = 2000
//
// console.log(c)

// number
/*
const a = 2
const b = 3

const c = a ** b

console.log(2 ** (1/2))
console.log(Math.sqrt(2))
*/
// string
/*
const firstName = '    An'
const lastName = 'nguyen'

// const fullName = firstName + " " + lastName
const fullName = `${firstName} ${lastName}`

// console.log(firstName / lastName)
console.log(fullName.toLowerCase().trim())

console.log('an nguyen'.includes('An N'.toLowerCase()))

console.log('an nguyen'.indexOf('en??'))
*/
// bool: true/false --- dai so bool
// is + adj / has + N
// and or nor not
const isStudent = true
const isBoy = false
// console.log(isStudent && isBoy)
// console.log(isStudent || isBoy)
// console.log(!!isStudent)
// kong minh la con gai -> false
// quoc anh la con trai -> true
// kong minh la con gai va quoc anh la con trai -> false
// kong minh la con gai hoac quoc anh la con trai -> true
/*
* 'va' chi dung khi cac ve cung dung (phep hoi chi dung khi 2 sio dung dung)
* 'hoac' chi sai khi tat ca deu sai (phep tuiyen chi sai khi 2 so cung sai)'
*
* phu dinh cua dung -> sai
* phu dingh cua sai -> dung
* */
// const number = 2
// console.log(!!!(number**2 >= 2))

// callback function
// todo is func
// function onActive(todo) {
//   console.log(2, 'start')
//   console.log(3, todo())
//   console.log(4, 'done')
// }
//
// function doSomething() {
//   console.log('hi do something')
// }
//
//
//
// console.log(doSomething())
// onActive(doSomething)

/*
### Bài 3: Callback nhận kết quả tính toán

```js

// Viết hàm cong(a, b, callback)

// Bên trong: tính tổng, rồi gọi callback(tong)

// Khi dùng: cong(3, 5, function(ketQua) { console.log(ketQua); })

// Kết quả: 8
* */

// function sum(a, b, log) {
//   const s = a + b
//   log(s)
// }
//
// function log(value) {
//   console.log(value)
// }
//
// sum(1, 2, log)


// ax^2 + bx + c = 0
// a, b, c cho trc
// viet ham giai phuongh trinh (a, b, c)

function solveQuadratic(a, b, c) {
  const denta = b**2 - 4*a*c

  if (denta < 0) {
    console.log('pt no nghiem')
  }
  else if (denta === 0) {
    const x = -b/(2*a)
    console.log(x)
  } else {
    const x1 = (-b + denta**(1/2))/(2*a)
    const x2 = (-b - denta**(1/2))/(2*a)
    console.log(x1, x2)
  }
}

// x^2 - 4x + 4
// x^2 - 6x + 5
solveQuadratic(1, -6, 5)
