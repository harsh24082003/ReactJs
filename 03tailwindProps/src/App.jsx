import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card.jsx'

function App() {
  const [count, setCount] = useState(0)
  let myObj={
    username: "Harsh",
    age: 25,
  }
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>
      <Card userName="chaiaurCode" btnText="clickMe"/>
      <Card userName="Harsh" btnText="clickMe"/>
    </>
  )
}

export default App
