import styles from './index.module.css'
import api from '../../plugins/axios'
import {useEffect, useState} from "react";

const DEFAULT_PRODUCT = {
  id: null,
  name: null,
  price: null,
  description: null,
  categoryId: null,
  rate: null
}

const ProductDialog = ({ isOpen, productId, onClose, categories = [] }) => {
  const [inputtingProduct, setInputtingProduct] = useState({...DEFAULT_PRODUCT})
  // if (!isOpen) return null

  const body = {...inputtingProduct}

  const onSave = async () => {
    try {
      const {data} = await api.post('/products', body)
    } catch (e) {
      console.log(e)
    }
  }

  const onInput = (e) => {
    setInputtingProduct({...inputtingProduct, [e.target.name]: e.target.value})
  }

  const getCurProduct = async () => {
    try {
      const {data} = await api.get(`/products/${productId}`)
      return data
    } catch (e) {
      console.log(e)
    }
  }

  const onMounted = async () => {
    if (!isOpen) return

    if (productId) {
      const product = await getCurProduct()
      setInputtingProduct({...product})
      return
    }
    setInputtingProduct({...DEFAULT_PRODUCT})
  }

  useEffect(() => {
    onMounted()
  }, [isOpen, productId])

  return (
    <div className={styles.overlay} style={{display: isOpen ? 'flex': 'none'}}>
      <div className={styles.dialog}>
        <div className={styles.header}>
          <h2>Add Product</h2>

          <button className={styles.closeBtn} onClick={onClose}>
            ✕
          </button>
        </div>

        <div className={styles.body}>
          <div className={styles.formGroup}>
            <label>Product Name</label>
            <input
              type="text"
              placeholder="Enter product name"
              value={inputtingProduct.name || ''}
              name={'name'}
              onChange={onInput}
            />
          </div>

          <div className={styles.formGroup}>
            <label>Category</label>

            <select name="categoryId" onChange={onInput}>
              <option value="">Select category</option>

              {categories.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.row}>
            <div className={styles.formGroup}>
              <label>Price ($)</label>
              <input
                type="number"
                placeholder="0"
                name={'price'}
                value={inputtingProduct.price || ''}
                onChange={onInput}
              />
            </div>

            <div className={styles.formGroup}>
              <label>Rate</label>
              <input
                type="number"
                placeholder="0"
                name={'rate'}
                value={inputtingProduct.rate || ''}
                onChange={onInput}
              />
            </div>
          </div>

          <div className={styles.formGroup}>
            <label>Image URL</label>
            <input
              type="text"
              placeholder="https://example.com/image.jpg"
            />
          </div>

          <div className={styles.formGroup}>
            <label>Description</label>
            <textarea
              rows={5}
              placeholder="Product description..."
              name={'description'}
              value={inputtingProduct.description || ''}
              onChange={onInput}
            />
          </div>
        </div>

        <div className={styles.footer}>
          <button className={styles.cancelBtn} onClick={onClose}>
            Cancel
          </button>

          <button className={styles.saveBtn} onClick={onSave}>
            Save
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductDialog