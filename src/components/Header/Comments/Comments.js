import React, { useState , useEffect} from 'react';
import { useParams } from 'react-router-dom';


const Comments = () => {
    const {id} =  useParams();
    const [comment,setComment] = useState({});
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments/${id}`)
        .then(res => res.json())
        .then(data => setComment(data))
    },[]);
    
    return (
        <div>
             <h1>Comments</h1>
            <img src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9"  style={{width:"50px",height:"50px",borderRadius:"50px"}}  />
            <h3>name: {comment.name}</h3>
            <h4>Email: {comment.email}</h4>
            <p> comment:  {comment.body} </p>
        </div>

    
    );
};

export default Comments;