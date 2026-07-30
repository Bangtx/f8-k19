import { useEffect, useState } from 'react'
import api from '../../plugins/axios'
import FTable from "../../components/FTable/index.jsx";

const headers = [
  {
    key: 'image',
    text: 'Image'
  },
  {
    key: 'categoryName',
    text: 'Category'
  },
  {
    key: 'name',
    text: 'Product Name'
  },
  {
    key: 'price',
    text: 'Price'
  },
  {
    key: 'rate',
    text: 'Rate'
  }
]

function Products() {
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])

  const getData = async () => {
    try {
      const [
        productData,
        categoryData
      ] = await Promise.all([
        api.get('products'),
        api.get('categories')
      ])

      const productsTmp = productData.data

      for (const p of productsTmp) {
        const c = categoryData.data.find(c => String(c.id) === String(p.categoryId))
        p.categoryName = c.name
      }

      setProducts(productsTmp)
      setCategories(categoryData.data)

    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    getData()
  }, []);

  return (
    <>
      <FTable columns={headers} rows={products}/>
    </>
  )
}

export default Products