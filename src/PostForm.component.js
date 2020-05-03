import React, { Component } from "react";
import {connect} from 'react-redux';
class PostForm extends Component{
    handleSubmit = (e) =>{
        e.preventDefault();
        const title = this.getTitle.value;
        const msg = this.getMsg.value;
        const data = {
            id: new Date(),
            title, 
            msg
        }
        console.log(data)
        this.props.dispatch({
            type:'ADD_POST',
            data});
          this.getTitle.value = '';
          this.getMsg.value = '';
    }
    render(){
        return(
            <div className="post-container">
                <h1 className="post_heading">Create Post</h1>
                <form className="form" onSubmit = {this.handleSubmit}>
                    <input required type="text" placeholder="Enter Post Title" ref={(input)=>this.getTitle = input}/><br/><br/>
                    <textarea required row="5" ref={(input)=>this.getMsg = input} cols="28" placeholder="Enter Post"/><br/><br/>
                    <button>Post</button>
                </form>
            </div>
        );
    }
}
export default connect()(PostForm);