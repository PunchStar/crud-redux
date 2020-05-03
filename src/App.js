import React, { Component } from 'react';
import PostForm from './PostForm.component';
import AllForm from './AllForm.component';

class App extends Component{
  render(){
    return (
      <div className="App">
      <div className="navbar">
        <h2 className="center ">Post It</h2>
        </div>
        <PostForm />
        <AllForm />
    </div>
    )
  }
}
export default App;
