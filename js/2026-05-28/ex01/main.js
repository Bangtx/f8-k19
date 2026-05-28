const meta = {
  invoiceNo: "WM-20260521-0001",
  saleDate: "2026/05/21",
  currency: "VND",
  paymentMethod: "Cash"
}
const seller = {
  name: "WinMark 2 ba trung",
  address: "2 Ba trung - HN",
  phone: "012345678",
  representative: "Đại diện WinMark"
}

const customer = {
  name: "Nguyen Van A",
  age: 20,
  address: "Ha Dong Ha noi"
}

const orders = [
  {
    no: 1,
    name: "Ao Thun",
    size: "XL",
    quantity: 1,
    price: 200000
  },
  {
    no: 2,
    name: "Ao Thun",
    size: "XL",
    quantity: 1,
    price: 200000
  }
]

const promotion = {
  description: "Khuyen mai 50% chi KH than thiet",
  discountPercent: 50
}

const renderOrdersTable = (orders) => {
  // get tbody
  // set tr -> td
  const tbodyElement = document.querySelector('.orders tbody')

  orders.forEach(order => {
    const trE = document.createElement('tr')

    const keys = Object.keys(order)

    keys.forEach(key => {
      const tdE = document.createElement('td')
      tdE.innerText = order[key]

      trE.append(tdE)
    })

    tbodyElement.append(trE)
  })
}

renderOrdersTable(orders)