import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Spinner from 'react-bootstrap/Spinner';
import { useNavigate } from 'react-router-dom';

const Cbt = () => {
    const [question1, setquestion1] = useState(""); const [option1A, setoption1A] = useState(""); const[option1B, setoption1B] = useState(""); const[option1C, setoption1C] = useState(""); const[option1D, setoption1D] = useState(""); const[answer1, setanswer1]=useState(""); const[correctAnswer1, setcorrectAnswer1]=useState("") 
    const [question2, setquestion2] = useState(""); const [option2A, setoption2A] = useState(""); const[option2B, setoption2B] = useState(""); const[option2C, setoption2C] = useState(""); const[option2D, setoption2D] = useState(""); const[answer2, setanswer2]=useState(""); const[correctAnswer2, setcorrectAnswer2]=useState("")
    const [question3, setquestion3] = useState(""); const [option3A, setoption3A] = useState(""); const[option3B, setoption3B] = useState(""); const[option3C, setoption3C] = useState(""); const[option3D, setoption3D] = useState(""); const[answer3, setanswer3]=useState(""); const[correctAnswer3, setcorrectAnswer3]=useState("")
    const [question4, setquestion4] = useState(""); const [option4A, setoption4A] = useState(""); const[option4B, setoption4B] = useState(""); const[option4C, setoption4C] = useState(""); const[option4D, setoption4D] = useState(""); const[answer4, setanswer4]=useState(""); const[correctAnswer4, setcorrectAnswer4]=useState("")
    const [question5, setquestion5] = useState(""); const [option5A, setoption5A] = useState(""); const[option5B, setoption5B] = useState(""); const[option5C, setoption5C] = useState(""); const[option5D, setoption5D] = useState(""); const[answer5, setanswer5]=useState(""); const[correctAnswer5, setcorrectAnswer5]=useState("")
    const [question6, setquestion6] = useState(""); const [option6A, setoption6A] = useState(""); const[option6B, setoption6B] = useState(""); const[option6C, setoption6C] = useState(""); const[option6D, setoption6D] = useState(""); const[answer6, setanswer6]=useState(""); const[correctAnswer6, setcorrectAnswer6]=useState("")
    const [question7, setquestion7] = useState(""); const [option7A, setoption7A] = useState(""); const[option7B, setoption7B] = useState(""); const[option7C, setoption7C] = useState(""); const[option7D, setoption7D] = useState(""); const[answer7, setanswer7]=useState(""); const[correctAnswer7, setcorrectAnswer7]=useState("")
    const [question8, setquestion8] = useState(""); const [option8A, setoption8A] = useState(""); const[option8B, setoption8B] = useState(""); const[option8C, setoption8C] = useState(""); const[option8D, setoption8D] = useState(""); const[answer8, setanswer8]=useState(""); const[correctAnswer8, setcorrectAnswer8]=useState("")
    const [question9, setquestion9] = useState(""); const [option9A, setoption9A] = useState(""); const[option9B, setoption9B] = useState(""); const[option9C, setoption9C] = useState(""); const[option9D, setoption9D] = useState(""); const[answer9, setanswer9]=useState(""); const[correctAnswer9, setcorrectAnswer9]=useState("")
    const [question10, setquestion10] = useState(""); const [option10A, setoption10A] = useState(""); const[option10B, setoption10B] = useState(""); const[option10C, setoption10C] = useState(""); const[option10D, setoption10D] = useState(""); const[answer10, setanswer10]=useState(""); const[correctAnswer10, setcorrectAnswer10]=useState("")
  
    const [score, setscore] = useState(0);
    const [visible2, setvisible2] = useState( false); const [visible3, setvisible3] = useState( false); const [visible4, setvisible4] = useState( false); const [visible5, setvisible5] = useState( false)
    const [visible6, setvisible6] = useState( false); const [visible7, setvisible7] = useState( false); const [visible8, setvisible8] = useState( false); const [visible9, setvisible9] = useState( false); const [visible10, setvisible10] = useState( false)
    const [izloading, setizloading]= useState(true);
    let allQuestions=[];
    let point =0
    //let questionURL = "http://localhost:7002/user/fetchquestions"
    let questionURL = "https://node-cbtserver.onrender.com/user/fetchquestions"

    const [timer, settimer] = useState(60)
    const timerF = () =>{
      timer = settimer(timer-2)
    }
    const navigate = useNavigate()
    // setInterval(timerF, 2000);

    useEffect(()=>{
      axios.get(questionURL, {
        headers: {"Content-Type": "application/json", "Accept": "application/json"}})
      .then((response)=>{ console.log(response);
        if(!response.data.status){alert(response.data.message)}
        else if (response.data.status){
          setizloading(false)
          allQuestions=response.data.result
          let index = Math.floor((Math.random()*allQuestions.length-1)+1);
          setquestion1(allQuestions[index].question); setoption1A(allQuestions[index].optionA); setoption1B(allQuestions[index].optionB); setoption1C(allQuestions[index].optionC); setoption1D(allQuestions[index].optionD); setcorrectAnswer1(allQuestions[index].correctAnswer);  
        }
      })
    }, [])

    const two = ()=>{
      axios.get(questionURL, {
        headers: {"Content-Type": "application/json", "Accept": "application/json"}})
      .then((response)=>{ console.log(response);
        if(!response.data.status){alert(response.data.message)}
        else if (response.data.status){
          allQuestions=response.data.result
          let index = Math.floor((Math.random()*allQuestions.length-1)+1);
          setquestion2(allQuestions[index].question); setoption2A(allQuestions[index].optionA); setoption2B(allQuestions[index].optionB); setoption2C(allQuestions[index].optionC); setoption2D(allQuestions[index].optionD); setcorrectAnswer2(allQuestions[index].correctAnswer); 
          setvisible2(true)
        }})
    }
    const three = ()=>{
      axios.get(questionURL, {
        headers: {"Content-Type": "application/json", "Accept": "application/json"}})
      .then((response)=>{ 
        if(!response.data.status){console.log(response.data.message);}
        else if (response.data.status){
          allQuestions=response.data.result
          let index = Math.floor((Math.random()*allQuestions.length-1)+1);
          setquestion3(allQuestions[index].question); setoption3A(allQuestions[index].optionA); setoption3B(allQuestions[index].optionB); setoption3C(allQuestions[index].optionC); setoption3D(allQuestions[index].optionD); setcorrectAnswer3(allQuestions[index].correctAnswer); 
          setvisible3(true)
        }})
    }

    const four = ()=>{
      axios.get(questionURL, {
        headers: {"Content-Type": "application/json", "Accept": "application/json"}})
      .then((response)=>{ 
        if(!response.data.status){console.log(response.data.message);}
        else if (response.data.status){
          allQuestions=response.data.result
          let index = Math.floor((Math.random()*allQuestions.length-1)+1);
          setquestion4(allQuestions[index].question); setoption4A(allQuestions[index].optionA); setoption4B(allQuestions[index].optionB); setoption4C(allQuestions[index].optionC); setoption4D(allQuestions[index].optionD); setcorrectAnswer4(allQuestions[index].correctAnswer); 
          setvisible4(true)
        }})
    }
    const five = ()=>{
      axios.get(questionURL, {
        headers: {"Content-Type": "application/json", "Accept": "application/json"}})
      .then((response)=>{ 
        if(!response.data.status){console.log(response.data.message);}
        else if (response.data.status){
          allQuestions=response.data.result
          let index = Math.floor((Math.random()*allQuestions.length-1)+1);
          setquestion5(allQuestions[index].question); setoption5A(allQuestions[index].optionA); setoption5B(allQuestions[index].optionB); setoption5C(allQuestions[index].optionC); setoption5D(allQuestions[index].optionD); setcorrectAnswer5(allQuestions[index].correctAnswer); 
          setvisible5(true)
        }})
    }
    const six = ()=>{
      axios.get(questionURL, {
        headers: {"Content-Type": "application/json", "Accept": "application/json"}})
      .then((response)=>{ 
        if(!response.data.status){console.log(response.data.message);}
        else if (response.data.status){
          allQuestions=response.data.result
          let index = Math.floor((Math.random()*allQuestions.length-1)+1);
          setquestion6(allQuestions[index].question); setoption6A(allQuestions[index].optionA); setoption6B(allQuestions[index].optionB); setoption6C(allQuestions[index].optionC); setoption6D(allQuestions[index].optionD); setcorrectAnswer6(allQuestions[index].correctAnswer); 
          setvisible6(true)
        }})
    }
    const seven = ()=>{
      axios.get(questionURL, {
        headers: {"Content-Type": "application/json", "Accept": "application/json"}})
      .then((response)=>{ 
        if(!response.data.status){console.log(response.data.message);}
        else if (response.data.status){
          allQuestions=response.data.result
          let index = Math.floor((Math.random()*allQuestions.length-1)+1);
          setquestion7(allQuestions[index].question); setoption7A(allQuestions[index].optionA); setoption7B(allQuestions[index].optionB); setoption7C(allQuestions[index].optionC); setoption7D(allQuestions[index].optionD); setcorrectAnswer7(allQuestions[index].correctAnswer); 
          setvisible7(true)
        }})
    }
    const eight = ()=>{
      axios.get(questionURL, {
        headers: {"Content-Type": "application/json", "Accept": "application/json"}})
      .then((response)=>{ 
        if(!response.data.status){console.log(response.data.message);}
        else if (response.data.status){
          allQuestions=response.data.result
          let index = Math.floor((Math.random()*allQuestions.length-1)+1);
          setquestion8(allQuestions[index].question); setoption8A(allQuestions[index].optionA); setoption8B(allQuestions[index].optionB); setoption8C(allQuestions[index].optionC); setoption8D(allQuestions[index].optionD); setcorrectAnswer8(allQuestions[index].correctAnswer); 
          setvisible8(true)
        }})
    }
    const nine = ()=>{
      axios.get(questionURL, {
        headers: {"Content-Type": "application/json", "Accept": "application/json"}})
      .then((response)=>{ 
        if(!response.data.status){console.log(response.data.message);}
        else if (response.data.status){
          allQuestions=response.data.result
          let index = Math.floor((Math.random()*allQuestions.length-1)+1);
          setquestion9(allQuestions[index].question); setoption9A(allQuestions[index].optionA); setoption9B(allQuestions[index].optionB); setoption9C(allQuestions[index].optionC); setoption9D(allQuestions[index].optionD); setcorrectAnswer9(allQuestions[index].correctAnswer); 
          setvisible9(true)
        }})
    }
    const ten = ()=>{
      axios.get(questionURL, {
        headers: {"Content-Type": "application/json", "Accept": "application/json"}})
      .then((response)=>{ 
        if(!response.data.status){console.log(response.data.message);}
        else if (response.data.status){
          allQuestions=response.data.result
          let index = Math.floor((Math.random()*allQuestions.length-1)+1);
          setquestion10(allQuestions[index].question); setoption10A(allQuestions[index].optionA); setoption10B(allQuestions[index].optionB); setoption10C(allQuestions[index].optionC); setoption10D(allQuestions[index].optionD); setcorrectAnswer10(allQuestions[index].correctAnswer); 
          setvisible10(true)
        }})
    }


    //  useEffect(()=>{
    //     let index = Math.floor((Math.random()*allQuestions.length-1)+1);
    //     question2 = allQuestions[index].question; let optionA= allQuestions[index].optionA; let optionB= allQuestions[index].optionB
    //     let optionC=allQuestions[index].optionC; let optionD=allQuestions[index].optionD; let correctAnswer1 = allQuestions[index].correctAnswer
    //     console.log(question1, question2);
    //  }, [])

    const submit = ()=>{
        //if(!answer.match(correctAnswer)){ console.log("wrong answer");}
        if (answer1.match(correctAnswer1)){point = point + 1; console.log("Correct Answer")}
        if (answer2.match(correctAnswer2)){point = point + 1}
        if (answer3.match(correctAnswer3)){point = point + 1}
        if (answer4.match(correctAnswer4)){point = point + 1}
        if (answer5.match(correctAnswer5)){point = point + 1}
        if (answer6.match(correctAnswer6)){point = point + 1}
        if (answer7.match(correctAnswer7)){point = point + 1}
        if (answer8.match(correctAnswer8)){point = point + 1}
        if (answer9.match(correctAnswer9)){point = point + 1}
        if (answer10.match(correctAnswer10)){point = point + 1}
        let percentage = (point/10)*100
        alert("Your Score is "+ " "+percentage + "%")
        //setscore(Number(score+1)) }
        //point++
          //console.log(point); alert(point)
          console.log("score = ", (point/10)*100);
          navigate("/home")
        }
      
  return (
    <center>
    <div className='container-fluid my-0'>  
      {/* {timer} <button onClick={timerF}> reduce </button> */}
      {/* <input type="text" onChange={(e)=>settext(e.target.value)} /> */}
      
      <div className='btn-group role="group text-white bg-danger me-5 pe-0 w-100 lg:w-100 ms-0 ps-0' style={{position:"sticky", top:"0"}}> 
        <button className='btn' disabled={question1}>1</button> <button className='btn' onClick={two} disabled={question2}>2</button> <button className='btn' onClick={three} disabled={question3}>3</button> <button className='btn' onClick={four} disabled={question4}>4</button> <button onClick={five} className='btn' disabled={question5}>5</button> <button className='btn' onClick={six} disabled={question6}>6</button><button className='btn' onClick={seven} disabled={question7}>7</button><button className='btn' onClick={eight} disabled={question8}>8</button><button className='btn' onClick={nine} disabled={question9}>9</button> <button className='btn' onClick={ten} disabled={question10}>10</button> 
            {/* <button>11</button> <button>12</button> <button>13</button> <button>14</button> <button>15</button> <button>16</button>
            <button>17</button> <button>18</button> <button>19</button> <button>20</button> */}
      </div> <hr />

         {
          !izloading?
          <>
          1.<span className='mx-3'>{question1}</span> <br />
            <input  type="radio" name='option' value={option1A} onChange={(e)=>setanswer1(e.target.value)} /> {option1A} <span className='mx-2'></span>
            <input  type="radio" name='option' value={option1B} onChange={(e)=>setanswer1(e.target.value)} /> {option1B}  <span className='mx-2' ></span>
            <input type="radio" name='option' value={option1C} onChange={(e)=>setanswer1(e.target.value)} /> {option1C}   <span className='mx-2'></span>
            <input type="radio" name='option' value={option1D} onChange={(e)=>setanswer1(e.target.value)} /> {option1D} <span className='mx-1'></span>
            <hr />
          </>:
          <>
          <Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true" /> Loading....   </> 
        }

        { visible2 ? 
          <>
          2.<span className='mx-3'>{question2}</span> <br />
          <input  type="radio" name='option2' value={option2A} onChange={(e)=>setanswer2(e.target.value)} /> {option2A} <span className='mx-2'></span>
          <input  type="radio" name='option2' value={option2B} onChange={(e)=>setanswer2(e.target.value)} /> {option2B}  <span className='mx-2' ></span>
          <input type="radio" name='option2' value={option2C} onChange={(e)=>setanswer2(e.target.value)} /> {option2C}   <span className='mx-2'></span>
          <input type="radio" name='option2' value={option2D} onChange={(e)=>setanswer2(e.target.value)} /> {option2D} <span className='mx-1'></span>
          <hr /></>
        : 
        <> </>
        }
       
       { visible3 ? 
          <>
          3.<span className='mx-3'>{question3}</span> <br />
          <input  type="radio" name='option3' value={option3A} onChange={(e)=>setanswer3(e.target.value)} /> {option3A} <span className='mx-2'></span>
          <input  type="radio" name='option3' value={option3B} onChange={(e)=>setanswer3(e.target.value)} /> {option3B}  <span className='mx-2' ></span>
          <input type="radio" name='option3' value={option3C} onChange={(e)=>setanswer3(e.target.value)} /> {option3C}   <span className='mx-2'></span>
          <input type="radio" name='option3' value={option3D} onChange={(e)=>setanswer3(e.target.value)} /> {option3D} <span className='mx-1'></span>
          <hr /></>
        : 
        <> </>
        }

        { visible4 ? 
          <>
        4.<span className='mx-3'>{question4}</span> <br />
          <input  type="radio" name='option4' value={option4A} onChange={(e)=>setanswer4(e.target.value)} /> {option4A} <span className='mx-2'></span>
          <input  type="radio" name='option4' value={option4B} onChange={(e)=>setanswer4(e.target.value)} /> {option4B}  <span className='mx-2' ></span>
          <input type="radio" name='option4' value={option4C} onChange={(e)=>setanswer4(e.target.value)} /> {option4C}   <span className='mx-2'></span>
          <input type="radio" name='option4' value={option4D} onChange={(e)=>setanswer4(e.target.value)} /> {option4D} <span className='mx-1'></span>
          <hr /></> : <> </>}
        
        { visible5 ? 
          <>
        5.<span className='mx-3'>{question5}</span> <br />
          <input  type="radio" name='option5' value={option5A} onChange={(e)=>setanswer5(e.target.value)} /> {option5A} <span className='mx-2'></span>
          <input  type="radio" name='option5' value={option5B} onChange={(e)=>setanswer5(e.target.value)} /> {option5B}  <span className='mx-2' ></span>
          <input type="radio" name='option5' value={option5C} onChange={(e)=>setanswer5(e.target.value)} /> {option5C}   <span className='mx-2'></span>
          <input type="radio" name='option5' value={option5D} onChange={(e)=>setanswer5(e.target.value)} /> {option5D} <span className='mx-1'></span>
          <hr /></> : <> </>}
          
          { visible6 ? 
          <>
        6.<span className='mx-3'>{question6}</span> <br />
          <input  type="radio" name='option6' value={option6A} onChange={(e)=>setanswer6(e.target.value)} /> {option6A} <span className='mx-2'></span>
          <input  type="radio" name='option6' value={option6B} onChange={(e)=>setanswer6(e.target.value)} /> {option6B}  <span className='mx-2' ></span>
          <input type="radio" name='option6' value={option6C} onChange={(e)=>setanswer6(e.target.value)} /> {option6C}   <span className='mx-2'></span>
          <input type="radio" name='option6' value={option6D} onChange={(e)=>setanswer6(e.target.value)} /> {option6D} <span className='mx-1'></span>
          <hr /></> : <> </>}
          
          { visible7 ? 
          <>
          7.<span className='mx-3'>{question7}</span> <br />
          <input  type="radio" name='option7' value={option7A} onChange={(e)=>setanswer7(e.target.value)} /> {option7A} <span className='mx-2'></span>
          <input  type="radio" name='option7' value={option7B} onChange={(e)=>setanswer7(e.target.value)} /> {option7B}  <span className='mx-2' ></span>
          <input type="radio" name='option7' value={option7C} onChange={(e)=>setanswer7(e.target.value)} /> {option7C}   <span className='mx-2'></span>
          <input type="radio" name='option7' value={option7D} onChange={(e)=>setanswer7(e.target.value)} /> {option7D} <span className='mx-1'></span>
          <hr /></> : <> </>}
            
          { visible8 ? 
          <>
          8.<span className='mx-3'>{question8}</span> <br />
          <input  type="radio" name='option8' value={option8A} onChange={(e)=>setanswer8(e.target.value)} /> {option8A} <span className='mx-2'></span>
          <input  type="radio" name='option8' value={option8B} onChange={(e)=>setanswer8(e.target.value)} /> {option8B}  <span className='mx-2' ></span>
          <input type="radio" name='option8' value={option8C} onChange={(e)=>setanswer8(e.target.value)} /> {option8C}   <span className='mx-2'></span>
          <input type="radio" name='option8' value={option8D} onChange={(e)=>setanswer8(e.target.value)} /> {option8D} <span className='mx-1'></span>
          <hr /></> : <> </>}

          { visible9 ? 
          <>
          9.<span className='mx-3'>{question9}</span> <br />
          <input  type="radio" name='option9' value={option9A} onChange={(e)=>setanswer9(e.target.value)} /> {option9A} <span className='mx-2'></span>
          <input  type="radio" name='option9' value={option9B} onChange={(e)=>setanswer9(e.target.value)} /> {option9B}  <span className='mx-2' ></span>
          <input type="radio" name='option9' value={option9C} onChange={(e)=>setanswer9(e.target.value)} /> {option9C}   <span className='mx-2'></span>
          <input type="radio" name='option9' value={option9D} onChange={(e)=>setanswer9(e.target.value)} /> {option9D} <span className='mx-1'></span>
          <hr /></> : <> </>}
          
          { visible10 ? 
          <>
          10.<span className='mx-3'>{question10}</span> <br />
          <input  type="radio" name='option10' value={option10A} onChange={(e)=>setanswer10(e.target.value)} /> {option10A} <span className='mx-2'></span>
          <input  type="radio" name='option10' value={option10B} onChange={(e)=>setanswer10(e.target.value)} /> {option10B}  <span className='mx-2' ></span>
          <input type="radio" name='option10' value={option10C} onChange={(e)=>setanswer10(e.target.value)} /> {option10C}   <span className='mx-2'></span>
          <input type="radio" name='option10' value={option10D} onChange={(e)=>setanswer10(e.target.value)} /> {option10D} <span className='mx-1'></span>
          </> : <> </>}

        <hr /> <button className='col-12 btn btn-lg btn-danger my-5' onClick={submit}> Submit </button>
        
      
    </div>
    </center>
  )
}

export default Cbt
