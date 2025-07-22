import React from 'react';  //It is a core foundational library for building user interfaces
import ReactDOM from 'react-dom/client';  //It is implementation of react for the web

import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(  //It renders the html retured by the app component into the root element in the index.html file
    <App />
);


