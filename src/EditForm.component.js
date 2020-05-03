import React, {Component} from 'react';
import { connect } from "react-redux";
class EditForm extends Component{
    handleEdit = (e) =>{
        e.preventDefault();
        const newTitle = this.getTitle.value;
        const newMsg = this.getMsg.value;
        const data = {
            newTitle, 
            newMsg
        }
        this.props.dispatch({ type: 'UPDATE', id: this.props.post.id, data: data })
    }
    render(){
        return (
            <div key={this.props.post.id} className="post">
                <form className="form" onSubmit={this.handleEdit}>
                    <input required type="text" ref={(input)=>this.getTitle = input}
                    defaultValue={this.props.post.title} placeholder="Edit Post Title"/><br/><br/>
                    <input required type="text" ref={(input)=>this.getMsg= input }
                    defaultValue={this.props.post.msg} placeholder="Edit Post Msg"/><br/><br/>
                    <button>Update</button>
                </form>
            </div>
        )
    }
}
export default connect()(EditForm)