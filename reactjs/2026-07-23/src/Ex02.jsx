import {useState, useEffect} from "react";


export default function () {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('tesxt')

  const onClick = () => {
    setCount(count + 1)
    console.log(count)
  }

  useEffect(() => {
    console.log("new count", count)
    console.log("new name", name)
  }, [])

  console.log('trc render')

  return (
    <>
      <h1>count: {count}</h1>
      <button onClick={onClick}>click</button>
      <button onClick={() => setName('gegege')}>setName</button>
    </>
  )
}