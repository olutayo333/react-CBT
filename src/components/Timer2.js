import React, { useEffect, useState } from 'react'

const Timer2 = () => {
    const [seconds, setseconds] = useState(60)
    const [minutes, setminutes] = useState(10)

    const [timer, setTimer] = React.useState(10);
    const id =React.useRef(null); const id2 =React.useRef(null);
    const clear=()=>{window.clearInterval(id.current)}
    const clear2=()=>{window.clearInterval(id2.current)}

//     React.useEffect(()=>{
//     id.current=window.setInterval(()=>{
//      setTimer((time)=>time-1)
//    },1000)
//    return ()=>clear();
//     },[])

//     React.useEffect(()=>{
//     if(timer===0){
//         setminutes(minutes-1)
//       clear()
//     }
//     },[timer])

    const countdown = () =>{
        id.current=window.setInterval(()=>{
            setTimer((time)=>time-1)
          },1000)
          
          return ()=>clear();
          
    }
    React.useEffect(()=>{
            if(timer===0){
                setminutes(minutes-1)
              clear()
            }
            },[timer])

    // React.useEffect(()=>{
    //     id.current=window.setInterval(countdown, 10000)
    //     clear2()
    // }) 
   
    return (
    <div>
        {seconds}
        

<div>Time left : {timer} {minutes}</div>
        <button onClick={countdown}>start</button>
</div>

  )

  
  
  //setInterval(convert, 2000)
}

export default Timer2
