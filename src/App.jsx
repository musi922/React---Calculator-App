import React from 'react';
import './App.css'
import { useState } from 'react';

function App() {
  const [input, setInput] = useState("0")
  const [operator,setOperator]=useState("")
  const [previousInput,setPreviousInput] = useState("")
  const [result,setResult] = useState(null)

  function handleInput(event) {
    const {value} = event.target
    if (input==="0") {
      setInput(value) 
    }
    else{
      setInput(prev=>prev+value)
    }
  }

  function handleOperatorClick(event) {
    const {value} = event.target
    setOperator(value)
    setPreviousInput(input)
     setInput("")
  }
  
  function handleResult() {
    if (previousInput && input && operator) {
      const num1 = parseFloat(previousInput)
      const num2 = parseFloat(input)

      let calculateresult
      
      if (operator === '+') {
       calculateresult = num1 + num2
        
      }
      if (operator === '-') {
       calculateresult = num1 - num2
        
      }
      if (operator === '*') {
       calculateresult = num1 * num2
        
      }
      if (operator === '/') {
       calculateresult = num1 / num2
        
      }
      setResult(calculateresult)
      setInput("")
      setOperator("")
      setPreviousInput("")
    }
    
  }

  function handleErase() {
    setResult(null)
    setInput("0")
    setOperator("")
    setPreviousInput("");
  }

  function handlePercentage() {
    setInput(prev=>prev/100)
    
  }

  function handleNegatives() {
    setInput(prev=>prev*(-1))
  }
 
  return (
    <>

   <div className='ml-[80%] '>
   <div id="cssportal-grid" className='rounded-none'>
      <input id="div1" className="bg-gray-500 text-white font-bold text-right text-4xl" value={input || result}/>
      <button id="div2" className='bg-gray-300 rounded-none border-b-gray-600 border-l-gray-600 w-32 h-28' onClick={handleErase}>AC</button>
	    <button id="div3" className='bg-gray-300 rounded-none  border-b-gray-600 border-l-gray-600 w-32 h-28' onClick={handleNegatives}>+/-</button>
	    <button id="div4" className='bg-gray-300 rounded-none  border-b-gray-600 border-l-gray-600 w-32 h-28' onClick={handlePercentage}>%</button>
	    <button id="div5" className='bg-[#ff2700] rounded-none ] border-b-gray-600 border-l-gray-600 w-32 h-28' value={'/'} onClick={handleOperatorClick}>/</button>
	    <button id="div6" className='bg-gray-300 rounded-none  border-b-gray-600 border-l-gray-600' value={7}  onClick={handleInput} >7</button>
	    <button id="div7" className='bg-gray-300 rounded-none  border-b-gray-600 border-l-gray-600' value={4} onClick={handleInput}>4</button>
	    <button id="div8" className='bg-gray-300 rounded-none  border-b-gray-600  border-l-gray-600' value={1}  onClick={handleInput}>1</button>
	    <button id="div10" className='bg-gray-300 rounded-none  border-b-gray-600 border-l-gray-600' value={8}  onClick={handleInput}>8</button>
	    <button id="div11" className='bg-gray-300 rounded-none  border-b-gray-600 border-l-gray-600' value={9}  onClick={handleInput}>9</button>
	    <button id="div12" className='bg-[#ff2700] rounded-none  border-b-gray-600 border-l-gray-600' value={'*'} onClick={handleOperatorClick}>X</button>
	    <button id="div13" className='bg-gray-300  rounded-none  border-b-gray-600 border-l-gray-600' value={5}  onClick={handleInput}>5</button>
	    <button id="div14" className='bg-gray-300 rounded-none  border-b-gray-600 border-l-gray-600' value={6}  onClick={handleInput}>6</button>
	    <button id="div15" className='bg-[#ff2700] rounded-none  border-b-gray-600 border-l-gray-600' value={'-'} onClick={handleOperatorClick}>-</button>
	    <button id="div16" className='bg-gray-300 rounded-none border-b-gray-600 border-l-gray-600' value={2}  onClick={handleInput}>2</button>
	    <button id="div17" className='bg-gray-300 rounded-none border-b-gray-600 border-l-gray-600' value={3}  onClick={handleInput}>3</button>
	    <button id="div18" className='bg-[#ff2700] rounded-none border-b-gray-600  border-l-gray-600 ' value={'+'} onClick={handleOperatorClick}>+</button>
	    <button id="div19" className='bg-gray-300 rounded-none border-b-gray-600 border-l-gray-600 ' value={0} onClick={handleInput}>0</button>
	    <button id="div20" className='bg-gray-300 rounded-none border-b-gray-600  border-l-gray-600' value={"."} onClick={handleInput}>.</button>
	    <button id="div21" className='bg-[#ff2700] rounded-none  border-b-gray-600 border-l-gray-600' onClick={handleResult}>=</button>
    </div>
   </div>


    </>
  )
}

export default App
