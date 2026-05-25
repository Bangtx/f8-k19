// promise

const doWorking = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() =>{
      console.log('working')
      resolve('working')
    }, 500)
  })
}

const comebackHome = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() =>{
      console.log('comeback home')
      resolve('comeback home')
    }, 200)
  })
}

// chaining
// async await
// doWorking()
//   .then(comebackHome)
//   .catch(() => {
//   console.log('error')
// })


const main = async () => {
  const a = await doWorking()
  console.log(a)

  const b = await comebackHome()

  console.log('done')
}

main()

// doSomething().then((value) => {
//   console.log('thuc thi xong', value)
//   return 100
// }).then((value) => {
//   console.log('sau kho done', value)
// })
//
// // const a = doSomething()
//
// // console.log(a)