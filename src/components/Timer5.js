import React, {useState, useEffect} from 'react'

const Timer5 = ({ duration }) => {
    const [time, settime] = useState(duration)
   //console.log(duration);
    
   useEffect(()=>{ 
    setTimeout(()=>{
        settime(time - 1000);
    }, 1000)
     }, [time]);

     const  getFormattedTime = (milliseconds) => {
        let total_seconds = parseInt(Math.floor(milliseconds/1000));
        let total_minutes = parseInt(Math.floor(total_seconds/60))
        let total_hours = parseInt(Math.floor(total_minutes/60))
        let days = parseInt(Math.floor(total_hours/24))

        let seconds = parseInt(total_seconds % 60);
        let minutes = parseInt(total_minutes % 60);
        let hours = parseInt(total_hours % 24);

        return`${days}: ${hours}: ${minutes}: ${seconds}`
     }
  return (
    <div>
        
        <div> {getFormattedTime(time)} </div>
    </div>
  )
}

export default Timer5
