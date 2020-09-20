import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route

} from "react-router-dom";
import PostData from './components/Header/PostData/PostData';
import NoMatch from './components/Header/NoMatch/NoMatch';
import SeePost from './components/Header/SeePost/SeePost';
import Header from './components/Header/Header';






function App() {
  
  return (
   <div>
     <Header></Header>
      <Router>
      <Switch>
      <Route path="/post">
          <PostData></PostData>
        </Route>

        <Route path="/posts/:id">
          <SeePost/>
        </Route>

        <Route exact path="/">
          <PostData></PostData>
        </Route>

        <Route path="">
          <NoMatch/>
        </Route>

      </Switch>
    </Router>
   </div>
  );
}

export default App;
