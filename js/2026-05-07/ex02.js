const provinces = Array.from({ length: 10000 }, (_, i) => ({
  id: i + 1,
  name: `test ${i + 1}`,
}))

const customers = Array.from({ length: 100 }, (_, i) => ({
  id: i + 1,
  name: `Customer ${i + 1}`,
  provinceId: provinces[Math.floor(Math.random() * provinces.length)].id,
}))

/*
* in ra man hinh
* ten khach hang - ten tinh thanh cua kh do
* Nguyen Cong Minh - HA NOI
* Tran Thi Lan - TP HCM
* */

const startTime = performance.now()

const provinceMapper = {}
for (let pIdx = 0; pIdx < provinces.length; pIdx = pIdx + 1) {
  const province = provinces[pIdx]

  provinceMapper[province.id] = province.name
}

for (let cIdx = 0; cIdx < customers.length; cIdx = cIdx + 1) {
  const customer = customers[cIdx]
  const provinceId = customer.provinceId
  const provinceName = provinceMapper[provinceId]
  // let provinceName = ''
  //
  // for (let pIdx = 0; pIdx < provinces.length; pIdx = pIdx + 1) {
  //   const province = provinces[pIdx]
  //
  //   if (province.id === provinceId) provinceName = province.name
  // }

  console.log(`${customer.name} - ${provinceName}`)
}

const endTime = performance.now()

console.log(`Call to doSomething took ${endTime - startTime} milliseconds`)

/*
*
const provinces = [
  { id: 10, name: 'DONG NAI' },
  { id: 1, name: 'HA NOI' },
  { id: 9, name: 'BINH DUONG' },
  { id: 20, name: 'TP HCM' },
  { id: 13, name: 'DA NANG' },
  { id: 7, name: 'NGHE AN' },
  { id: 4, name: 'HAI PHONG' },
  { id: 5, name: 'CAN THO' },
  { id: 6, name: 'QUANG NINH' },
  { id: 8, name: 'THANH HOA' },
]

* provinceMap = {
*   10: 'DONG NAI',
*   1: 'HA NOI',
*   9: 'BINH DUONG',
*   .
*   .
*   .
*   8: 'THANH HOA'
* }
*
* provinceId = 8
*
* provinceName = provinceMap[provinceId]
*
*
* m = 10000
* n = 100
*
* 1000000
*
* 100 + 10000 = 10100
* */

