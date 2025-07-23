import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter]=useState(0)

  const addValue=()=>{
    console.log("Clicked",counter);
    if(counter<20){
      counter++;
    }else{
      alert("Counter value cannot be greater than 20");
    }
    
    setCounter(counter);
  }

  const removeValue=()=>{
    console.log("Clicked",counter);
    if(counter>0){
      counter--;
    }else{
      alert("Counter value cannot be less than 0");
    }
    setCounter(counter);
  }
  
  return (
    <>
     <h1>Chai aur react</h1>
     <h2>Counter value : {counter}</h2>
     <button
     onClick={addValue}
     >Increase</button>
     <button
     onClick={removeValue}
     >Decrease</button>
    </>
  )
}

export default App
