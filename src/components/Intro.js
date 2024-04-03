import React from 'react'
import { Navigate } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Intro = () => {
  let navigate = useNavigate()
    //let questionURL = "http://localhost:7002/user/fetchquestions"
    const start = ()=>{
        
        navigate("/cbt") 
      }
  return (
    <center>
    <div className='container-fluid my-5 py-5 mt-30vh'>
        <h1 className='my-5 py-1'>The Test  is only for 10mins </h1>
      <button className='btn btn-danger btn-lg w-100 animate__animated animate__pulse animate__infinite infinite' onClick={start}>START </button>
    </div>
    </center>
  )
}

export default Intro
