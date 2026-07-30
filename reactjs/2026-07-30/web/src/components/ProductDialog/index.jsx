import styles from './index.module.css'

const ProductDialog = ({ open, onClose, categories = [] }) => {
  if (!open) return null

  return (
    <div className={styles.overlay}>
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
            <input type="text" placeholder="Enter product name" />
          </div>

          <div className={styles.formGroup}>
            <label>Category</label>

            <select>
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
              <input type="number" placeholder="0" />
            </div>

            <div className={styles.formGroup}>
              <label>Rate</label>
              <input type="number" placeholder="0" />
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
            <textarea rows={5} placeholder="Product description..." />
          </div>
        </div>

        <div className={styles.footer}>
          <button className={styles.cancelBtn} onClick={onClose}>
            Cancel
          </button>

          <button className={styles.saveBtn}>
            Save
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductDialog