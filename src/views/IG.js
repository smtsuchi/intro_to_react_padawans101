import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Post from '../components/Post';

export default class IG extends Component {
    constructor() {
        super();
        this.state = {
            posts: []
        }
    }


    showPosts = () => {
        return this.state.posts.map(p => <Link key={p.id} to={`/posts/${p.id}`}><Post p={p} /></Link> )
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
