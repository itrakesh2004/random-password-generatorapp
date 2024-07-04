import React, { useState } from 'react'
import './App.css'
import { LC, NC, SC, UC } from './data/PassChar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [UpperCase,setUpperCase]=useState(false);
  const [lowerCase,setlowerCase]=useState(false);
  const [number,setNumber]=useState(false);
  const [symbol,setSymbol]=useState(false);
  const [passwordlength,setPasswordlength]=useState(10);
  const [fpass,setpass]=useState('')

let createPassword = () => {
  let finalPass='';
  let charSet='';
  if(UpperCase||lowerCase||number||symbol){
    if(UpperCase) charSet += UC;
    if(lowerCase) charSet += LC;
    if(number) charSet += NC;
    if(symbol) charSet += SC;
    
    for(let i=0;i<passwordlength;i++){
        finalPass +=charSet.charAt(Math.floor(Math.random()*charSet.length))
    }
    setpass(finalPass);
  }else{
    toast.error("plese fill up data")
  }

}

let copyPass=()=>{
  navigator.clipboard.writeText(fpass)
}
  return(
    <>
      <ToastContainer/>
      <div className='passwordBox'>
        <h2>Password gernetor</h2>
        <div className='passwordboxin'>
          <input type="text" readOnly value={fpass} /><button onClick={copyPass}>copy</button>
        </div>
        <div className='passwordlength'>
                <label>Password length</label>
                <input type="number" max={20} value={passwordlength} onChange={(e)=> setPasswordlength(e.target.value)} />
        </div>
        <div className='passwordlength'>
                <label>Include UpperCase</label>
                <input type="checkbox" checked={UpperCase} onChange={()=> setUpperCase(!UpperCase)}/>
        </div>
        <div className='passwordlength'>
                <label>Include lowerCase</label>
                <input type="checkbox" checked={lowerCase} onChange={()=> setlowerCase(!lowerCase)} />
        </div>

        <div className='passwordlength'>
                <label>Include Number</label>
                <input type="checkbox" checked={number} onChange={()=> setNumber(!number)} />
        </div>

        <div className='passwordlength'>
                <label>Include Symbol</label>
                <input type="checkbox" checked={symbol} onChange={() => setSymbol(!symbol)} />
        </div>
        
          <button className='btn' onClick={createPassword}>Gernet Password</button>
        
      </div>
    </>
  )
}

export default App
