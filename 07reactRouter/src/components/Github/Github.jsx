import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

function Github(){
    const [data, setData]=useState([]);
    useEffect(()=>{
        fetch('https://api.github.com/users/harsh24082003')
        .then(res=> res.json())
        .then(data=>{
            setData(data);
        })
    },[])
    return(
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers of {data.login}: {data.followers}
        <img src= {data.avatar_url} alt="Git picture" width={300}></img>
        </div>
    )   
}

export default Github;