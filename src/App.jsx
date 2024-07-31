import React from 'react';
import './App.css'
import { useState } from 'react';

function App() {
  const [input,setInput] = useState({
    numbers:""
  })

  function handleInput(event) {
    const {value,name} = event.target
    setInput(prev=>({
      ...prev,
      [name]: prev[name] + value
    }))
    
  }

  return (
    <>

   <div className='ml-[80%] '>
   <div id="cssportal-grid" className='rounded-none'>
      <input id="div1" className="bg-gray-500 text-white font-bold text-right text-4xl" value={input.numbers}/>
      <button id="div2" className='bg-gray-300 rounded-none border-b-gray-600 border-l-gray-600 w-32 h-28'>AC</button>
	    <button id="div3" className='bg-gray-300 rounded-none  border-b-gray-600 border-l-gray-600 w-32 h-28'>+/-</button>
	    <button id="div4" className='bg-gray-300 rounded-none  border-b-gray-600 border-l-gray-600 w-32 h-28'>%</button>
	    <button id="div5" className='bg-[#ff2700] rounded-none ] border-b-gray-600 border-l-gray-600 w-32 h-28'>/</button>
	    <button id="div6" className='bg-gray-300 rounded-none  border-b-gray-600 border-l-gray-600' value={7} name='numbers' onClick={handleInput} >7</button>
	    <button id="div7" className='bg-gray-300 rounded-none  border-b-gray-600 border-l-gray-600' value={4} name='numbers' onClick={handleInput}>4</button>
	    <button id="div8" className='bg-gray-300 rounded-none  border-b-gray-600  border-l-gray-600' value={1} name='numbers' onClick={handleInput}>1</button>
	    <button id="div10" className='bg-gray-300 rounded-none  border-b-gray-600 border-l-gray-600' value={8} name='numbers' onClick={handleInput}>8</button>
	    <button id="div11" className='bg-gray-300 rounded-none  border-b-gray-600 border-l-gray-600' value={9} name='numbers' onClick={handleInput}>9</button>
	    <button id="div12" className='bg-[#ff2700] rounded-none  border-b-gray-600 border-l-gray-600'>X</button>
	    <button id="div13" className='bg-gray-300  rounded-none  border-b-gray-600 border-l-gray-600' value={5} name='numbers' onClick={handleInput}>5</button>
	    <button id="div14" className='bg-gray-300 rounded-none  border-b-gray-600 border-l-gray-600' value={6} name='numbers' onClick={handleInput}>6</button>
	    <button id="div15" className='bg-[#ff2700] rounded-none  border-b-gray-600 border-l-gray-600' >-</button>
	    <button id="div16" className='bg-gray-300 rounded-none border-b-gray-600 border-l-gray-600' value={2} name='numbers' onClick={handleInput}>2</button>
	    <button id="div17" className='bg-gray-300 rounded-none border-b-gray-600 border-l-gray-600' value={3} name='numbers' onClick={handleInput}>3</button>
	    <button id="div18" className='bg-[#ff2700] rounded-none border-b-gray-600  border-l-gray-600'>+</button>
	    <button id="div19" className='bg-gray-300 rounded-none border-b-gray-600 border-l-gray-600 ' value={0} name='numbers' onClick={handleInput}>0</button>
	    <button id="div20" className='bg-gray-300 rounded-none border-b-gray-600  border-l-gray-600'>.</button>
	    <button id="div21" className='bg-[#ff2700] rounded-none  border-b-gray-600 border-l-gray-600'>=</button>
    </div>
   </div>


    </>
  )
}

export default App
