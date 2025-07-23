import Chai from "./chai"

function App() {

  const username='Harsh Sharma';
  return (
    // <h1>Creating first Vite project</h1> 
    // From App.jsx we can export only one element, so we can enclose multiple elements in a single parent element like a div or a fragment
    <>
    <Chai />
    <h1>Creating first Vite project by {username}</h1>  //In "{}" there will always be a evaluted expression, nothing else like if conditions
    <p>This is a paragraph</p>
    </>
    
  )
}

export default App
