import React from "react";
import { Post } from "./post.js";

export class Posts extends React.Component{
    state = {
        posts: [],
        text: '',
    }

    componentDidMount() {
        fetch('http://localhost:3001/api/posts')
        .then((response) => response.json())
        .then(postsAPI => {
            this.setState({posts: postsAPI})
        })
    }

    const handleChange = (event) => {
        return (
            this.setState()
        )
    }
    
    render() {

        const response = await fetch("http://localhost:3001/" + "api/posts", {
            method: "POST",
            mode: "cors",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({ text: this.text }),
        })

        return (<div>
            <input />
            <button name="save" value={this.text} onChange={this.handleChange}  onCLick={this.response}>Save</button>
            <h2>Previous posts</h2>
            <ul>
                {this.state.posts.map( p => (
                    <li><Post postid="p.id" /></li>
                ))}
            </ul>
        </div>)
    }



}