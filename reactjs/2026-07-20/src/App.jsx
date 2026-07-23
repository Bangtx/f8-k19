import styles from './App.module.css'

function App() {
  const name = 'F12'
  const slogan = 'hoc de di lam'
  const age = 3
  const logo = 'https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D'
  const employees = [
    {id: 1, name: 'tran xuan bang'},
    {id: 2, name: 'ta hoang an'},
    {id: 3, name: 'dang ngoc son'},
    {id: 4, name: 'hoang kong mink'}
  ]

  return (
    <>
      <img src={logo} width={150}/>
      <h1 className={styles.title}>{name} hello anh em</h1>
      <p>slogan: {slogan}</p>
      <p>mung sinh nhat {age} tuoi</p>
      <ul>
        {
          employees.map((e, index) => <li key={index}>{e.name}</li>)
        }
      </ul>
    </>
  )
}

export default App
