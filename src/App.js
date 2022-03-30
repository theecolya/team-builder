import './App.css';
import React, { useState } from 'react';
import Form from './Comps/Form';


function App() {

  const [memberList, setMemberList] = useState([])
  const [member, setMember] = useState({name: '', email: '', role: ''})
  const onSubmit = () => {
    setMemberList([member, ...memberList]);
    setMember({name: '', email: '', role: ''})
  }
  const onChange = (name, value) => {
    setMember({...member, [name]: value})
  }
  return (
    <div className="App">
      <h1>My Team!</h1>
      <Form
        member={member}
        change={onChange}
        submit={onSubmit}
      />
      {memberList.map((member, idx) => {
        return (
          <div key={idx}>
            {member.name}, {member.email}, {member.role}
          </div>
        )
      })}
    </div>
  );
}

export default App;
