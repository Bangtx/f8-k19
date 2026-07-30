import styles from './index.module.css'

const FTable = ({ columns, rows }) => {
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
            {columns.map((col) => (
              <td key={col.key}>{row[col.key]}</td>
            ))}
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  )
}

export default FTable