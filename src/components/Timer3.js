import React, {useState, useEffect} from 'react'

const Timer3 = ({ duration }) => {
  //   const [time, settime] = useState(duration)
  //   useEffect(()=>{ 
  //   setTimeout(()=>{ settime(time - 1000);}, 1000) }, [time]);

  //    const  getFormattedTime = (milliseconds) => {
  //       let total_seconds = parseInt(Math.floor(milliseconds/1000));
  //       let total_minutes = parseInt(Math.floor(total_seconds/60))
  //       //let total_hours = parseInt(Math.floor(total_minutes/60))
  //       //let days = parseInt(Math.floor(total_hours/24))

  //       let seconds = parseInt(total_seconds % 60);
  //       let minutes = parseInt(total_minutes % 60);
  //       //let hours = parseInt(total_hours % 24);

  //       return` ${minutes} : ${seconds}`
  //    }
  // return (
  //   <div>
  //       <div className='py-1 my-2 ps-5 px-5 fs-1 rounded mx-auto w-50 align-items-center justify-content-center' style={{backgroundColor:"red", color:"white", position:"sticky", top:"0", letterSpacing:"40px",}}> <b  style={{paddingLeft:"20%"}}>{getFormattedTime(time)}</b> </div>
  //   </div>
  // )
}

export default Timer3
