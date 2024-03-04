import { useState } from 'react'
import Student from './Components/Student'
import "./Index.css"



function App() {


  return (
    <>
      <Student name="Justus" age={40} isStudent={true} />
      <Student name="Tim" age={50} isStudent={false} />
    <Student name ="Jacob " age={24} isStudent={true}/>
    </>
  )
}

export default App
