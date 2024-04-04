import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Admin = () => {
    const navigate = useNavigate()
    let adminURL ="https://node-cbtserver.onrender.com/user/admin"
    //let adminURL = "http://localhost:7002/user/admin"
    const [question, setquestion] = useState("")
    const [optionA, setoptionA] = useState("")
    const [optionB, setoptionB] = useState("")
    const [optionC, setoptionC] = useState("")
    const [optionD, setoptionD] = useState("")
    const [correctAnswer, setcorrectAnswer] = useState("")
    // function save_correct_word()
    //   {  count = -1
    //      correctWord = correct_word.value.toLowerCase();
    //      scrambledWord = scrambled_word.value.toLowerCase();
    //     obj_of_Arr = {correct: correctWord, scrambled: scrambledWord};
    //     myWord.push(obj_of_Arr);
    //     localStorage.setItem('correct&scrambled', JSON.stringify(myWord));
    //     alert("Correct Word:" +" "+ correctWord.toUpperCase() + " " + "&" + " " + "Scrambled Word:" + scrambledWord.toUpperCase() + " " + "has been saved")   
    //     correct_word.value= ""; scrambled_word.value= " "; correct_word.focus();
    //     count++
    //     displayItem();
    //   }

    const save = ()=>{
        //console.log(question, optionA, optionB, optionC, optionD, correctAnswer)
        axios.post (adminURL, {question, optionA, optionB, optionC, optionD, correctAnswer})
        .then((response)=>{console.log(response)
            if (response.data.status){alert("Question saved successfully"); 
            navigate("/admin")}
            else(alert(response.data.status))
             setquestion(""); setoptionA(""); setoptionB(""); setoptionC(""); setoptionD(""); setcorrectAnswer("")
            ;})
            
    }

  return (
    <center>
    <div className='container fluid my-5 py-5 shadow-lg '>
      <h2>Set Questions Here</h2>
        {/* <textarea name="" id="" cols="40" rows="5" onChange={(e)=>setquestion(e.target.value)} placeholder='Question'></textarea> */}
        <input type="text" value={question} placeholder='Question' onChange={(e)=>setquestion(e.target.value)} className='form form-control col-12 my-3' />
        <input type="text" value={optionA}  placeholder='Option A' onChange={(e)=>setoptionA(e.target.value)}/> 
        <input type="text" value={optionB} placeholder='Option B' onChange={(e)=>setoptionB(e.target.value)}/> 
        <input type="text" value={optionC} placeholder='Option C' onChange={(e)=>setoptionC(e.target.value)}/> 
        <input type="text" value={optionD} placeholder='Option D' onChange={(e)=>setoptionD(e.target.value)}/>
        <input type="text" value={correctAnswer} className='w-100 form form-control my-3' placeholder='Correct Answer' onChange={(e)=>setcorrectAnswer(e.target.value)} />
        <button className='w-100 btn btn-secondary my-5' onClick={save}> Save </button>
    </div>
    </center>
  )
}

export default Admin
