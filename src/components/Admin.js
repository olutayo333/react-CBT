import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Admin = () => {
    const navigate = useNavigate()
    let adminURL ="https://node-cbtserver.onrender.com/user/admin"
    let displayQuestionURL = "https://node-cbtserver.onrender.com/user/displayQuestions"
    let deleteURL = "https://node-cbtserver.onrender.com/user/deleteQestion"
    let editURL = "https://node-cbtserver.onrender.com/user/editQuestion"
    //"http://localhost:7002/user/editQuestion"

    const [allQuestions, setallQuestions] = useState([])
    const [question, setquestion] = useState("")
    const [optionA, setoptionA] = useState("")
    const [optionB, setoptionB] = useState("")
    const [optionC, setoptionC] = useState("")
    const [optionD, setoptionD] = useState("")
    const [correctAnswer, setcorrectAnswer] = useState("")
    const [eQuestion, seteQuestion] = useState(""); const [eOptionA, seteOptionA]=useState(""); const [eOptionB, seteOptionB]=useState("");
    const [eOptionC, seteOptionC]=useState(""); const [eOptionD, seteOptionD]=useState(""); const[eCorrectAnswer, seteCorrectAnswer]=useState("");
    const [editID, seteditID] = useState("")

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    //const handleShow = () => setShow(true);
    
    const save = ()=>{
        if ((correctAnswer.match(optionA)) || (correctAnswer.match(optionB)) || (correctAnswer.match(optionC)) || (correctAnswer.match(optionD)))
        {
          axios.post (adminURL, {question, optionA, optionB, optionC, optionD, correctAnswer})
          .then((response)=>{console.log(response)
            if (response.data.status){alert("Question saved successfully"); 
              setquestion(""); setoptionA(""); setoptionB(""); setoptionC(""); setoptionD(""); setcorrectAnswer("");
              reloadQues();}
            else{alert(response.data.status)}
            ;})
        }
        else{ alert(`Invalid Answer, Answer must match one of the Options `)}
                
    }

    useEffect(()=>{
      axios.get(displayQuestionURL, { headers: {"Content-Type": "application/json", "Accept": "application/json" }})
        .then((response)=>{
          if(!response.data.status){
            // navigate("/signin")
            console.log("cannot fetch data");
          }
          else if(response.data.status)
          { console.log(response);
            setallQuestions([...response.data.result]) ;
              console.log(allQuestions);
           }
        })
    },[])
    const reloadQues = () => { axios.get(displayQuestionURL, { headers: {"Content-Type": "application/json", "Accept": "application/json" }})
        .then((response)=>{ if(!response.data.status){  console.log("cannot fetch data")} 
        else if(response.data.status){ setallQuestions([...response.data.result]) } })}
        
    const deleteQuestion =(each)=>{
      alert("Are you sure you want to delete question", each.index+1)
      let _id = each._id;
      axios.post(deleteURL, {_id})
      .then((response)=>{
        if (response.data.status){alert(response.data.message); reloadQues()}
        else{console.log(response.data.message); alert(response.data.message)}
      })
    }

    const editQues = (each)=>{
      setShow(true); seteditID(each._id)
      seteQuestion(each.question); seteOptionA(each.optionA); seteOptionB(each.optionB); seteOptionC(each.optionC); seteOptionD(each.optionD); seteCorrectAnswer(each.correctAnswer)
      //console.log(eQuestion, eOptionA, eOptionB, eOptionC);
    }

    const confirmEditQuestion= ()=>{
      //console.log(eQuestion, eOptionA, eOptionB, eOptionC, eOptionD, eCorrectAnswer);
      if ((eCorrectAnswer||correctAnswer.match(eOptionA || optionA)) || (eCorrectAnswer||correctAnswer.match(eOptionB || optionB)) || (eCorrectAnswer||correctAnswer.match(eOptionC||optionC)) || (eCorrectAnswer||correctAnswer.match(eOptionD||optionD)))
     { axios.post(editURL, {editID, eQuestion, eOptionA, eOptionB, eOptionC, eOptionD, eCorrectAnswer })
      .then((response)=>{
        if (response.data.status){alert(response.data.message); setShow(false); reloadQues()}
        else{alert(response.data.message);}
      })
    }
    else{alert("Answer must match one of the options")}
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
        
        <button className='w-100 btn btn-secondary my-5'disabled={!question || !optionA || !optionB || !optionC || !optionD || !correctAnswer } onClick={save}> Save </button>
    </div>
      <h2 style={{letterSpacing:"5px"}}> <u>All Questions</u> </h2>
    <div>
    <table className='table'>
            <tbody>
            <tr>
                <th> S/N </th>
                <th>Question</th>
                <th>Option A</th>
                <th>Option B</th>
                <th> Option C </th>
                <th> Option D </th>
                <th> Answer </th>
            </tr> 

          {
              allQuestions.map((each, index)=>(
              <tr key={index}>
                  <td> {index+1} </td>
                  {/* <td>{each._id}</td> */}
                  <td>{each.question} </td>  
                  <td>{each.optionA}</td>
                  <td>{each.optionB}</td>
                  <td>{each.optionC}</td>
                  <td>{each.optionD}</td>
                  <td>{each.correctAnswer}</td>
                  <td><button onClick={()=>editQues(each)} className='btn btn-small btn-warning'>Edit</button> </td>
                    {/* <td> <input type='text'  onChange={(e)=>setemail(e.target.value) }  /> </td> */}                    
                  <td><button onClick={()=>deleteQuestion(each)} className='btn btn-small btn-danger'>Delete</button></td>
                    
              </tr>
              ))
          }
            </tbody>
        </table> 
        <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Edit Question </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                 <p> <small><b> Question </b> </small> <input type="text" value={eQuestion} className='form form-control' onChange={(e)=>seteQuestion(e.target.value)} /> </p>
                 <small> <b> Option A </b> </small> <input type="text" className='form form-control' value={eOptionA} onChange={(e)=>seteOptionA(e.target.value)} />
                 <small> <b>Option B </b> </small> <input type="text" className='form form-control' value={eOptionB} onChange={(e)=>seteOptionB(e.target.value)} />
                 <small> <b>Option C </b></small> <input type="text" className='form form-control' value={eOptionC} onChange={(e)=>seteOptionC(e.target.value)} />
                 <small> <b> Option D </b></small><input type="text" className='form form-control' value={eOptionD} onChange={(e)=>seteOptionD(e.target.value)} />
                 <small> <b> Answer </b> </small> <input type="text" className='form form-control' value={eCorrectAnswer} onChange={(e)=>seteCorrectAnswer(e.target.value)} />
                </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}> Close</Button>
                        <Button variant="primary" onClick={confirmEditQuestion}> Confirm Edit </Button>
                    </Modal.Footer>
        </Modal>
    </div>
    </center>
  )
}

export default Admin
