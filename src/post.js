import React from "react";

export class Post extends React.Component{

    state = {
        id : '',
        text: ''
    }

    componentDidMount() {
        this.setState({id: this.props.postid})
    }

    componentDidUpdate() {

    }

    function updateReq () {
        await fetch(`http://localhost:3001/api/posts/${this.state.id}`, {
        method: "PUT",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: this.state.text }),})
    }

    render() {
        return (<div>
            <input name="text" value={this.state.text} />
            <button name="update" onClick={updateReq}>Update</button>
            <button name="delete" onClick={deleteReq}>Delete</button>
        </div>)
    }

}