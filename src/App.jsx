import React from 'react'
import { useState, useEffect } from 'react'
import './App.css'

const App = () => {
  const [inputField, setInputField] = useState('')
  const [fields, setFields] = useState([])

  useEffect(() => {
    const data = localStorage.getItem("task-tracker-tasks")
    setFields(JSON.parse(data))
  }, [])


  useEffect(() => {
    localStorage.setItem("task-tracker-tasks", JSON.stringify(fields))
  })

  const addField = (e) => {
    e.preventDefault()
    let copy = fields
    copy.push(inputField)
    setFields(copy)
    setInputField('')
  }



  const handleDelete = (name) => {
    let new_list = fields.filter(field => {
      return field !== name
    })

    setFields(new_list)
  }


      return (
        <div>
          <center>
        <form action="" autoComplete="off" onSubmit={addField}>
            <input className="inp-field" type="text" required value={inputField} onChange={e => setInputField(e.target.value)}/>
            <br/><br/>
            <button id="sub">Add Task</button>
        </form>
        <br/>
        <br/>
        <br/>
        {(fields.length !== 0) ? fields.map(field => (<div className="list-item">
          {field}
          <button className="del" onClick={() => handleDelete(field)}>Delete</button>
        </div>)) : <div className="list-item"> No tasks here.</div>}
        </center>
        </div>
      )
}

export default App
