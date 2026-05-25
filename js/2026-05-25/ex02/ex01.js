// setTimeout

// const log = () => {
//   console.log('1234')
// }
//
// setTimeout(
//   () => {
//     log()
//   },
//   100
// )
//

// setTimeout + callback
// setInterval(log, 1000)

// polling


/*
* di den cong ty
* (3s)
* lam viec
* (8s)
* di ve
* (3s)
* ve den nha
* */

const gotoCompany = () => {
  console.log('di den cong ty')
}

const doWorking = () => {
  console.log('lam viec')
}

const comebackHome = () => {
  console.log('di ve')
}

const atHome = () => {
  console.log('o nha r')
}

//
// gotoCompany()
//
//
// setTimeout(() => {
//   doWorking()
//
//   setTimeout(() => {
//     comebackHome()
//
//     setTimeout(() => {
//       atHome()
//     }, 300)
//   }, 8000)
//
// }, 3000)

// const startTime = null
//
// while (true) {
//   if (bat dau chay ham) startTime = 7.45
//
//   if (currentTime -  startTime >= 2) {thuc hien}
//       2.000000001 2.000000004 2.00000000000000000000000001
//   // ve len may tinh
// }

// const a = 1
// console.log('123456')
// console.log('54321')
//
// setTimeout(() => {
//   console.log('876544321')
// })
//
// console.log('11111')