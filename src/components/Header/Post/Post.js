import Button from '@material-ui/core/Button';
import React from 'react';
import { Link } from 'react-router-dom';
import { borders } from '@material-ui/system';
import { Box } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const Post = (props) => {
    const {id,title} = props.post
  
    return (
      
        <React.Fragment>
        <CssBaseline />
        <Container maxWidth="m">
          <Typography component="div" style={{textAlign: 'center', backgroundColor: '#cfe8fc', height: '50vh' }} >
          

                <h1>Post id: {id} </h1>
                <h2>Titel: {title}</h2>

                <Link to={`/posts/${id}`}><Button variant="contained"  color="primary">See Post</Button></Link>
            
      
          </Typography>
        </Container>
      </React.Fragment>
    );
};

export default Post;