import { useState, useCallback, useEffect, useRef } from 'react'


//"useCallback memoizes the function so it only changes if its dependencies change. 
// useEffect calls that function after rendering, only when its dependencies (including the function) change."


// watching 2nd time got more clear to the concepts sir ji
// 1. use Callback: used for optimization it calls the function inside it when the dependencies are changed and returns a memorized function 
// 2.useeffect: runs the function inside it whenever the page renders first-time or dependencies are changed
// 3.use ref : used to give reference of selected components in our page so that functions can be performed on referenced values

//UseCallback wale array me jo dependencies hain agar usme se kuch change hota hai to aur method run hota hai to usko optizimize karne ke liye use kiya jata hai
//UseEffect wale array me jo dependencies hain agar usme se kuch change hota hai to useEffect wale function ko run karne ke liye use kiya jata hai
//UseRef hook is used to directly access a DOM element, without using DOM methods like getElementById or querySelector. It allows you to create a reference to a DOM element and then manipulate it directly.

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  //useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*()_+[]{}|;:,.<>?`~"

    for(let i=0; i<length; i++){
      let char=Math.floor(Math.random()*str.length)
      pass+= str.charAt(char)
    }

    setPassword(pass) // Update the password state
  }, [length, numberAllowed, charAllowed])
  

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 8) 
    window.navigator.clipboard.writeText(password)
  },[password])
  

  //useEffect always runs after the first rendering and whenever the dependencies change.
  useEffect(() => {
    passwordGenerator()
  }, [passwordGenerator, length, numberAllowed, charAllowed]) // Call passwordGenerator when dependencies change

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700'>
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
      <input type="text"
      value={password} //It is the initial value shown in the input field, which is acutally the password generated
      className='outline-none w-full py-1 px-3'
      placeholder='Password'
      readOnly
      ref={passwordRef} // Attach the ref to the input

      />
      <button 
      onClick={copyPasswordToClipboard} 
      className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type="range"
            min={6} max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => setLength(e.target.value)}
          />
          <label>Length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input
            type='checkbox'
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={()=>{
              setNumberAllowed((prev)=> !prev)
            }}
          />
          <label htmlFor='numberInput'>Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input
            type='checkbox'
            defaultChecked={charAllowed}
            id="charInput"
            onChange={()=>{
              setCharAllowed((prev)=> !prev)
            }}
          />
          <label htmlFor='charInput'>Characters</label>
        </div>
      </div>
      </div>
    </>
  )
}

export default App
