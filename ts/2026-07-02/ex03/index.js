const person = {
  name: 'test',

  go() {
    console.log('go')
  }
}

const p1 = person
const p2 = person


p1.name = 'hhhhe'

console.log(p2)