

// function doSomething () {
//   console.log('do st')
// }

// const doSomething = () => {
//   console.log('do st')
// }

// lambda function
// const doSomething = () => console.log('do st')

// doSomething()

// function sum(a, b) {
//   return a + b
// }

// const sum = (a, b) => a + b
// const a = sum(10, 20)
// console.log(a)

const doSt = (prev, next) => {
  prev()
  next()
}

const goToTheStore = () => {
  console.log('di den cua hang')
}

const buyThePhone = () => {
  console.log('mua DT')
}

const goHome = () => {
  console.log('ve nha')
}

doSt(goToTheStore, buyThePhone)

