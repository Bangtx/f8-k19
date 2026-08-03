import { useEffect, useState } from 'react'
import api from '../../plugins/axios'
import FTable from '../../components/FTable'
import ProductDialog from '../../components/ProductDialog'
import styles from './index.module.css'

const headers = [
  { key: 'image', text: 'Image' },
  { key: 'categoryName', text: 'Category' },
  { key: 'name', text: 'Product Name' },
  { key: 'price', text: 'Price' },
  { key: 'rate', text: 'Rate' },
  { key: 'action', text: '' },
]

function Products() {
  const [products, setProducts] = useState([])
  const [selectingProductId, setSelectingProductId] = useState(null)
  const [categories, setCategories] = useState([])
  const [keyword, setKeyword] = useState('')
  const [isOpenProductDialog, setIsOpenProductDialog] = useState(false)

  const getData = async () => {
    try {
      const [productData, categoryData] = await Promise.all([
        api.get('products'),
        api.get('categories')
      ])

      const productsTmp = productData.data

      for (const p of productsTmp) {
        const c = categoryData.data.find(
          (c) => String(c.id) === String(p.categoryId)
        )
        p.categoryName = c.name
      }

      setProducts(productsTmp)
      setCategories(categoryData.data)
    } catch (e) {
      console.log(e)
    }
  }

  const onOpenProductDialog = () =>  {
    setIsOpenProductDialog(true)
    setSelectingProductId(null)
  }

  const onClickEditProduct = (productId) => {
    onOpenProductDialog()
    setSelectingProductId(productId)
  }

  useEffect(() => {
    getData()
  }, [])

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(keyword.toLowerCase())
  )

  return (
    <>
      <div className={styles.header}>
        <h1>Product List</h1>

        <div className={styles.actions}>
          <input
            type="text"
            placeholder="Search product..."
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            className={styles.search}
          />

          <button className={styles.addBtn} onClick={onOpenProductDialog}>
            + Add New
          </button>
        </div>
      </div>

      <FTable
        columns={headers}
        rows={filteredProducts}
        onClickEdit={onClickEditProduct}
      />
      <ProductDialog
        productId={selectingProductId}
        isOpen={isOpenProductDialog}
        onClose={() => setIsOpenProductDialog(false)}
        categories={categories}
      />
    </>
  )
}

export default Products