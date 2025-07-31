import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react';


function MyApp(){
    return(
        <div>
            <h1>Custom App</h1>
        </div>
    )
}

//What if we bring custom React element to render here using inbuilt ReactDOM.createRoot method?


//This will not work as expected because there is a predifined syntax for what it expects in the reactElement object.
const reactElement={
    type:'a',
    props:{
        href:'https://www.example.com',
        target:'_blank'
    },
    Children:'Click here to visit google'
}


const anotherElement=(
    <a href="https://www.example.com" target="_blank">Visit Google!!!</a>
)

const anotherUser="  Harsh";
const anotherReactElement=React.createElement(
    'a',  //Type
    { href: 'https://www.example.com', target: '_blank' },  //Props
    'Visiting Google', //Children
    anotherUser  // This will be rendered as a text node inside the anchor tag
)
createRoot(document.getElementById('root')).render(
    // <MyApp />
    // MyApp()// This is not a good practice, should use JSX syntax instead. But it works as well.
    // reactElement   //This will not work as expected because it is not a valid React element object.
    anotherReactElement  //This will work as expected because it is a valid React element object.
    // anotherElement 
)
 