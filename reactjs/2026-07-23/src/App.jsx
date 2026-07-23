// react hook
import {useState} from "react";

function App() {
  let [member, setMember] = useState({
    name: 'My Member',
    age: 28
  })

  console.log('app dc reload')

  const onClickBtn = () => {
    setMember({...member, age: member.age + 1})
  }

  const onInput = (e) => {
    setMember({...member, name: e.target.value})
  }

  return (
    <>
      <h1>Name: {member.name}</h1>
      <h1>Age: {member.age}</h1>
      <button onClick={onClickBtn}>click me</button>
      <br/>
      <input
        placeholder={'name'}
        value={member.name}
        onChange={onInput}
      />
    </>
  )
}

export default App
