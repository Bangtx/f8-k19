const headers = [
  {
    key: 'id',
    text: 'Id'
  },
  {
    key: 'companyName',
    text: 'Company Name'
  },
  {
    key: 'email',
    text: 'Email'
  },
  {
    key: 'phone',
    text: 'Phone'
  },
  {
    key: 'address',
    text: 'Address'
  },
  {
    key: 'taxId',
    text: 'Tax ID'
  },
  {
    key: 'status',
    text: 'Status'
  }
]

const getCustomers = async () => {
  try {
    const response = await fetch('http://localhost:3000/customers')
    return await response.json()
  } catch {
    alert('get data failed')
  }
}

const renderTable = async () => {
  const customers = await getCustomers()

  const tbody = document.querySelector('.table-container table tbody')

  // render header
  const thead = document.querySelector('.table-container table thead')
  const headerRow = document.createElement('tr')

  for (const header of headers) {
    const th = document.createElement('th')
    th.innerText = header.text
    headerRow.append(th)
  }
  const actionC = document.createElement('th')
  actionC.innerText = 'Action'
  headerRow.append(actionC)
  thead.append(headerRow)

  for (const customer of customers) {
    const tr = document.createElement('tr')

    const id = document.createElement('td')
    id.innerText = customer.id

    tr.append(id)

    const name = document.createElement('td')
    name.innerText = customer.companyName

    tr.append(name)

    const email = document.createElement('td')
    email.innerText = customer.email

    tr.append(email)

    const phone = document.createElement('td')
    phone.innerText = customer.phone

    tr.append(phone)

    const address = document.createElement('td')
    address.innerText = customer.address

    tr.append(address)

    const tax = document.createElement('td')
    tax.innerText = customer.taxId

    tr.append(tax)

    const action = document.createElement('td')
    action.innerHTML = `<span class="badge badge-active">${customer.status}</span>`
    action.classList = 'actions'

    tr.append(action)

    tbody.append(tr)
  }
}

renderTable()