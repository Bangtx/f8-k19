import {useState, members} from "react";
import {v7} from 'uuid'

export default function () {
  const [members, setMembers] = useState([])
  const [inputtingMember, setInputtingMember] = useState({
    name: null,
    age: null,
    address: null
  })

  const onAddMember = () => {
    const newMembers = [...members]
    newMembers.push({...inputtingMember, id: v7()})
    setMembers(newMembers)
  }

  const onInput = (e) => {
    setInputtingMember({...inputtingMember, [e.target.name]: e.target.value})
  }

  return (
    <>
      <div>
        <input
          name={'name'}
          placeholder={'name'}
          value={inputtingMember.name ?? ''}
          onChange={onInput}
        />
        <input
          name={'age'}
          placeholder={'age'}
          value={inputtingMember.age ?? ''}
          onChange={onInput}
        />
        <input
          name={'address'}
          placeholder={'address'}
          value={inputtingMember.address ?? ''}
          onChange={onInput}
        />
        <button onClick={onAddMember}>save</button>
      </div>
      <div>
        <h1>Member List</h1>
        <ul>
          {
            members.map(member => {
              return <li>{member.id} -- {member.name} -- {member.age} -- {member.address}</li>
            })
          }
        </ul>
      </div>
    </>
  )
}