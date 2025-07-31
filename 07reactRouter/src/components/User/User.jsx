import React from 'react';
import { useParams } from 'react-router-dom'; //This is used to get the dynamic parameter from the URL, Here it is 'id'

function User() {
    const { id } = useParams(); //useParams is a hook that returns an object of key/value pairs of the dynamic parameters from the URL
    return(
        <div className='bg-gray-600 text-white text-3xl p-4'> User: {id}</div>
    )
}

export default User;