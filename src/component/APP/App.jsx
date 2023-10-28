
import { useState, useRef } from 'react';
import './App.css'
import Cads from '../CARD/card';
import Filter from '../filter//filter';


function App() {
  const inpuEl=useRef(null)
  const [cardTogal , setcardTogal]=useState(true )
  const [state ,setstate]= useState([{
    first:"ahmed",
    phone:"11111111",
    age:31,

  },
  {
    first: "longo",
    phone:"222222222",
    age:32,

  }, 
  {
    first: "ayoub", 
    phone:"3333333333",
    age:33,

  },]);
  const deletFt=(e, clickidx)=>{
    const detOb=state.filter((el,idx)=> idx !== clickidx)//
    setstate((prevState)=>{
      
      return prevState.filter((el,idx) => idx !== clickidx);
    });
   
    console.log("inside",state);
  }
  console.log("outside",state);
  const hideAndshow=()=>{
   
    setcardTogal(!cardTogal)

  }
  const tetsHendler=()=>{
    console.log(inpuEl.current.value);
  }

 const filtername=(name)=>{
  console.log(name);
 }
  return (
    <>
      <div className='john'>
        <h1>boys</h1>
        <button style={{marginBottom: "20px"}} onClick={hideAndshow}>{cardTogal? "hide name":"showname"} </button>
        <div className={cardTogal? 'show':'hiden'}>
          <Filter filtration={filtername} />
         <Cads nameList={state} type='men ' delt={deletFt} />
         </div>
     
      </div>  
     
    </>
  )
}

export default App
