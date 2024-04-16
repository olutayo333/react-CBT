
import React, { useState, useEffect } from "react";

const Topbutton = () => {
    const [count, setCount] = useState(10);
    const [count2, setCount2] = useState(10);
    const [min, setmin] = useState(0)
 
    useEffect(() => {
        //Implementing the setInterval method
        const interval =
        
         setInterval(() => {setCount(count - 1) }, 20000);
 
        // if(count =9){ setmin(1)}
    

        //Clearing the interval
        return () => clearInterval(interval);
    }, [count]);

    const forcount = ()=>{
        //for (let i = 0; i < count2; i--)
        //{
            setCount2(count2-1)
        //}
    }

  return (
    <div>
        <div
            style={{
                display: "flexbox",
                margin: "auto",
                textAlign: "center",
            }}
        >
            <h1 style={{ color: "green" }}>
                GeeksforGeeks
            </h1>
            <h3>
                React Example for using setInterval method
            </h3>
            <h1>{count}Minutes</h1>
            <h2>{count2} count2</h2>
            <button onClick={forcount}>for count</button>
        </div>
    
    </div>
  )
}

export default Topbutton
