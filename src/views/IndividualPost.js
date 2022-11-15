import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Post from '../components/Post';

export default function IndividualPost({ user }) {
    const [post, setPost] = useState({})

    const { postId } = useParams()
    const navigate = useNavigate()

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


    const sendDeleteRequest = async () => {
        const res = await fetch(`http://localhost:5000/api/posts/delete/${postId}`, {
            method: "DELETE",
            headers: {'Authorization': `Bearer ${user.token}`}
        });
        const data = await res.json();
        console.log(data)
        if (data.status==='ok'){
            navigate('/feed')
        }
    };


    return (
        <div>IndividualPost
            <p>This is post : {postId}</p>
            <Post p = {post}/>
            {
                post.user_id === user.id? 
                <>
                    <Link className='btn btn-primary' to={`/posts/update/${post.id}`}>
                        Update
                    </Link>
                    <button onClick = {sendDeleteRequest} className='btn btn-danger'>Delete</button>
                </>
                :
                ''
            }
        </div>

    )
}
