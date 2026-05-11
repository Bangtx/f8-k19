const a = [1, 2, 3]

const b = [3, 4, 5]
const b2 = [3, 4, 5]

const c = [ ...b, ...a, 1000, ...b2]
/*
*  c = []
*  c[0]  = a[0]...
* */

const d = [2, 4, 5, 7, 2, 3, 1]

const mid = Math.floor(d.length / 2)

const midValue = d[mid]
console.log(midValue)