import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Photos = () => {
    
    const {id} =  useParams();
    const [photo,setPhoto] = useState({});
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        .then(data => setPhoto(data))
    },[]);
    return (
        <div>
            <img src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9" alt=""/>
          
        </div>
    );
};

export default Photos;