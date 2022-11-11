import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';

export default class CreatePost extends Component {
    constructor(){
        super();
        this.state = {
            redirect: false
        }
    }

    sendPostInfo = async (e) => {
        e.preventDefault();

        const title = e.target.title.value
        const caption = e.target.caption.value
        const imgUrl = e.target.imgUrl.value

        const options = {
            method: "POST",
            body: JSON.stringify({
                title: title,
                caption: caption,
                img_url: imgUrl,
            }),
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${this.props.user.token}`
            }

        }

        const res = await fetch('http://localhost:5000/api/posts/create', options);
        const data = await res.json();
        console.log(data)
        if (data.status==='ok'){
            this.setState({redirect:true})
        }
    };

    render() {
        if (this.state.redirect) {
            return <Navigate to='/feed'/>
        }
        return (
            <div>
                <h1>Create a Post</h1>
                <form onSubmit={(e) => { this.sendPostInfo(e) }}>
                    <input placeholder='Title' name='title' className='form-control' type='text' />
                    <input placeholder='Caption' name='caption' className='form-control' type='text' />
                    <input placeholder='Image URl' name='imgUrl' className='form-control' type='text' />
                    <button type='submit' className='btn btn-primary'>Submit</button>
                </form>
            </div>
        )
    }
}
