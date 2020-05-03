
import React, { Component  } from "react";
import { connect } from 'react-redux';
import Post from './Post';
import EditForm from "./EditForm.component";
class AllForm extends Component{
    render(){
        return (
            <div>
                <h1 className="post_heading">AllForm Component</h1>
                {this.props.posts.map((post) =>(
                    <div key={post.id}>
                        {console.log(JSON.stringify(post))}
                        {post.editing ? <EditForm post={post} key={post.id}/>: <Post key={post.id} post={post}/>}
                    </div>
                ))}
            </div>
        );
    }

}
const mapStateToProps = (state) => {
    return {
        posts: state
    }
}
export default connect(mapStateToProps)(AllForm);