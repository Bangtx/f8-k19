/*
// company id: sorted - sap xep | be -> loon
const sortedCompanies = [
  {id: 3, name: 'fpt'},
  {id: 5, name: 'viettel'},
  {id: 6, name: 'f8'},
  {id: 8, name: 'vnpt'},
]

// company id: sorted - sap xep | be -> loon
const employees = [
  {id: 1, name: 'tran van a', companyId: 3 },
  {id: 3, name: 'tran van b', companyId: 3 },
  {id: 4, name: 'tran van c', companyId: 5 },
  {id: 6, name: 'tran van d', companyId: 8 },
  {id: 8, name: 'tran van e', companyId: 8 },
]

const results = []
let cIdx = 0, eIdx = 0
let count = 0


while (cIdx < sortedCompanies.length && eIdx < employees.length) {
  const employee = employees[eIdx]
  const company = sortedCompanies[cIdx]

  count = count + 1
  if (employee.companyId === company.id) {
    results.push({
      id: employee.id,
      name: employee.name,
      companyName: sortedCompanies[cIdx].name
    })
    eIdx = eIdx + 1
  }
  else if (employee.companyId > company.id) {
    cIdx = cIdx + 1
  }
  else {
    eIdx = eIdx + 1
  }
}

console.log(results)
console.log(count)

*/

// for (let eIdx = 0; eIdx < employees.length; eIdx = eIdx + 1) {
//   const employee = employees[eIdx]
//   const companyId = employee.companyId
//
//   while (companyId !== sortedCompanies[cIdx].id && cIdx < sortedCompanies.length) {
//     cIdx = cIdx + 1
//     count = count + 1
//   }
//
//   results.push({
//     id: employee.id,
//     name: employee.name,
//     companyName: sortedCompanies[cIdx].name
//   })
// }
//
// console.log(results)
// console.log(count)



// employeesWithCompanyName {id, name, companyName}
/*
* c1: companyMap -> hash join
* c2: 2 for long nhau -> nested loop
* */

/*
Nested Loop: 20   O(n2)   -> uu tien khi du lieu it
Hash Join: 9      O(n)    -> uu tien neu can toc do + ko dc sap xep + du lieu nhieu
Merge Join: 8     Olog(n) -> nhanh nhung phai sap xep trc
*/

