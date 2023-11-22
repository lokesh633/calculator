import React,{useState} from 'react';
import "./calculator.css"

export default function Calculator() {

    const [inputVal,setInputVal] = useState("");

    const handleButton = (val)=>{
       setInputVal(inputVal.concat(val))
    }
    const hanadleEqual = ()=>{
      try{
        setInputVal(eval(inputVal))
      }catch(err){
        setInputVal("Error")
      }
        
    }
    const handleDel = ()=>{
      setInputVal(inputVal.slice(0,inputVal.length-1))
    }

  return (
    <div className='main'>
       <div className='calc-main'>
        <div className='calc-sub'>
        <div className='form-main'>
            <div className='form'>
                <input type="text" value={inputVal} placeholder='0' onChange={({target:{value}})=>setInputVal(value)} />
            </div>
        </div>
        <div className='btns'>
               <button onClick={()=>setInputVal("")} className='del'>Clr</button>
               <button onClick={handleDel}>⌫</button>
               <button onClick={()=>handleButton("/")} className="symbol">/</button>
               <button onClick={()=>handleButton(7)}>7</button>
               <button onClick={()=>handleButton(8)}>8</button>
               <button onClick={()=>handleButton(9)}>9</button>
               <button onClick={()=>handleButton("*")} className="symbol">*</button>
               <button onClick={()=>handleButton(4)}>4</button>
               <button onClick={()=>handleButton(5)}>5</button>
               <button onClick={()=>handleButton(6)}>6</button>
               <button onClick={()=>handleButton("-")} className="symbol">-</button>
               <button onClick={()=>handleButton(1)}>1</button>
               <button onClick={()=>handleButton(2)}>2</button>
               <button onClick={()=>handleButton(3)}>3</button>
               <button onClick={()=>handleButton("+")} className="symbol">+</button>
               <button onClick={()=>handleButton(".")}>.</button>
               <button onClick={()=>handleButton(0)}>0</button>
               <button className='equal' onClick={hanadleEqual}>=</button>
        </div>
      </div>
    </div>
    </div>
  )
}
