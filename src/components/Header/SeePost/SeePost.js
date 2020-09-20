import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Comments from '../Comments/Comments';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';


const SeePost = () => {
    const {id} =  useParams();
    const [post,setPost] = useState({});
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => res.json())
        .then(data => setPost(data))
    },[]);
    return (
       <div>
          {/*meterial ui */}
        <React.Fragment>
        <CssBaseline />
        <Container maxWidth="m">

          <Typography component="div" style={{ backgroundColor: 'darkBlue', height: '50vh',textAlign: 'center',color:'white' }} >
            <h1>Title:{post.title} </h1>
            <h2>body: {post.body} </h2>
          </Typography>

          <Typography style={{backgroundColor: 'brown', height: '50vh',textAlign: 'center',color:'white' }}>
          <Comments></Comments>
          </Typography>

        </Container>
      </React.Fragment>
       </div>
    );
};

export default SeePost;