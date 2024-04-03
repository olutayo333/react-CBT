import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
//import regis from '../assets/Regis Logo 12 Transparent bg.png'
import regis from '../assets/Regis Logo 12 Transparent bg.png'
//import regis from '../assets/images/Regis Logo 12 Transparent bg.png'
const Home = () => {
  return (
    <center>
    <div className='container-fluid my-5 py-5'>
      <h2 className='text-dark'>COMPUTER BASED TEST</h2>
      <img src={regis} alt="" className='img-fluid img-responsive animate__animated animate__pulse animate__infinite infinite my-5 w-25 ' />
      
      {/* <button btn btn-lg btn-secondary> <Link to="/admin"> EXAMINER</Link> </button>
      <button>EXAMINEE </button> */}
      <div className='row ms-5'>
      <Link to="/admin" className='col-5 text-danger'> <h2>EXAMINER </h2></Link>
       <h1 className=' col-1'><b>|</b></h1> 
      <Link to="/intro" className='col-5 text-primary'> <h2> EXAMINEE</h2></Link>
      </div>
      {/* <Link className="navbar-brand ms-lg-5" to="/"><img src={regislogo} width={60} alt="" className='imglogo'/></Link> */}
    </div>
    </center>
  )
}

export default Home
