import api from './plugins/axios.js';

const getProducts = async () => {
  try {
    const response = await api.get('products')

    const {data} = response
    return data
  } catch (e) {
    alert('error')
  }
}

const init = async () => {
  const products = await getProducts()
  console.log(products)
}

init()