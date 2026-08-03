import styles from './index.module.css'

const FTable = ({ columns, rows, onClickEdit }) => {
  return (
    <div className={styles.wrapper}>
      <table className={styles.table}>
        <thead>
        <tr>
          {columns.map((col) => (
            <th key={col.key}>{col.text}</th>
          ))}
        </tr>
        </thead>

        <tbody>
        {rows.map((row, index) => (
          <tr key={index}>
            {columns.map((col) => {
              if (col.key === 'action') {
                return (
                  <td key={col.key}>
                    <span onClick={() => onClickEdit(row.id)} className={styles.editBtn}>edit</span>
                    <span className={styles.delBtn}>del</span>
                  </td>
                )
              }
              return <td key={col.key}>{row[col.key]}</td>
          })}
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  )
}

export default FTable