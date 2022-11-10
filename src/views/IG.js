import React, { Component } from 'react'
import Post from '../components/Post';

export default class IG extends Component {
    constructor() {
        super();
        this.state = {
            posts: []
        }
    }


    showPosts = () => {
        return this.state.posts.map(p => <Post p={p} key={p.id}/> )
    }



    componentDidMount = async () => {
        const res = await fetch('http://localhost:5000/api/posts')
        const data = await res.json()
        if (data.status==='ok') {
            this.setState({posts: data.data})
        }

    }

    render() {
        return (
            <div>
                {this.showPosts()}
            </div>
        )
    }
}
