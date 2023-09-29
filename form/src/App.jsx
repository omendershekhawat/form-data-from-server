import React, { useState } from 'react'
import axios from 'axios'
// import "bootstrap/dist/css/bootstrap.css"
import { useNavigate } from 'react-router-dom'

const App = () => {
  const navigate = useNavigate()
  const [name, setName] = useState("")
  const [phone, setphone] = useState("")
  const [age, setAge] = useState("")


  const sendData = (e) => {
    // e.preventDefault()
    axios.post("http://localhost:4000/student/new", {
      name: name,
      phone: phone,
      age: age
    })
      .then((result) => {
        console.log(typeof result.statusText)
        if (result.statusText == "Created") {
          navigate("/")
        }
      });
  };
  return (
    <form id='Container' onSubmit={(e) => {
      e.preventDefault()
      sendData()

    }
    }>
      <div className='input-box'>
        <label htmlFor="name">Name</label>
        <input id='Name' type="text" value={name}
          placeholder='Enter Your Name'
          onChange={(e) => setName(e.target.value)} />

      </div>


      <div className='input-box'>
        <label htmlFor="phone.no">Phone.no</label>
        <input id='phone.no' type="number" value={phone}
          placeholder='Enter Your Phone.no'
          onChange={(e) => setphone(e.target.value)} />
      </div>

      <div className='input-box'>
        <label htmlFor="age">Age</label>
        <input id='age' type="number" value={age}
          placeholder='Enter Your Age'
          onChange={(e) => setAge(e.target.value)} />
      </div>
      <div id='button' className='input-box'>
        <input type="Submit" />
      </div>
    </form>
  )
}

export default App