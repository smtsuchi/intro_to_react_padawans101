import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; 

export default function UpdatePost({ user }) {
    const [post, setPost] = useState({})

    const { postId } = useParams()

    useEffect(()=>{
        const getPostInfo = async () => {
            const res = await fetch(`http://localhost:5000/api/posts/${postId}`);
            const data = await res.json();
            console.log(data);
            if (data.status === 'ok') {
                setPost(data.data)
            }
        };
        getPostInfo()
    }, [])

    const sendPostInfo = async (e) => {
        e.preventDefault();

        const res = await fetch(`http://localhost:5000/api/posts/update/${postId}`, {
            method: "POST",
            body: JSON.stringify({
                title: e.target.title.value,
                caption: e.target.caption.value,
                img_url: e.target.imgUrl.value,
            }),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
        });
        const data = await res.json();
        console.log(data)
    };

    return (
        <div>
            <h1>Update a Post</h1>
            <form onSubmit={(e) => { sendPostInfo(e) }}>
                <input placeholder='Title' name='title' className='form-control' type='text' defaultValue={post.title}/>
                <input placeholder='Caption' name='caption' className='form-control' type='text' defaultValue={post.caption}/>
                <input placeholder='Image URl' name='imgUrl' className='form-control' type='text' defaultValue={post.img_url}/>
                <button type='submit' className='btn btn-primary'>Submit</button>
            </form>
        </div>
    )
}
