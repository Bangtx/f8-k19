// const h1Es = document.getElementsByTagName('h1')
// const hEs = document.getElementsByClassName('heading')

// document.getElementById('heading')
// console.log(document.getElementById('heading'))

// const homeEl = document.querySelector('ul li:first-child')
// console.log(homeEl.getAttribute('class'))
// homeEl.setAttribute('style', "color: blue")
//
// // homeEl.innerHTML = '<a href="https://youtube.com">youbute</a>'
// // homeEl.innerText = 'chao anh em'
//
// const aEl = document.createElement('a')
// aEl.innerText = 'youtube hihihi'
// aEl.setAttribute('href', 'https://youtube.com')
//
// homeEl.append(aEl)

const categories = [
  'home', 'products', 'customers'
]

const app = document.querySelector('#app')

// navhtml = ``
// navhtml += '<ul>'
// categories.forEach(c => {
//   navhtml += `<li>${c}</li>`
// })
// navhtml += '</ul>'
//
// app.innerHTML = navhtml

const ulElement = document.createElement('ul')
categories.forEach(c => {
  const liElement = document.createElement('li')
  liElement.innerText = c

  ulElement.append(liElement)
})
app.append(ulElement)

