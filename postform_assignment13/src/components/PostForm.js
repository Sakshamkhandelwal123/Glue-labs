import React, { useState } from 'react'
import axios from 'axios';

const PostForm = () => {
    const [id, setId] = useState('');
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const handleChange = e => {
        if (e.target.name === 'id') {
            setId(e.target.value)
        }
        if (e.target.name === 'title') {
            setTitle(e.target.value)
        }
        if (e.target.name === 'body') {
            setBody(e.target.value)
        }
    }

    const handleSubmit = async e => {
        e.preventDefault()
        const url = 'https://jsonplaceholder.typicode.com/posts'
        const state = {
            id: id,
            title: title,
            body: body,
        }

        axios
            .post(url, state, {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json;charset=UTF-8",
                },
            })
            .then(({ data }) => {
                console.log(data);
            });
        const res = await fetch(url)
        const data = await res.json()
        console.log(data)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="text" name="id" value={id} onChange={handleChange} />
                </div>
                <div>
                    <input type="text" name="title" value={title} onChange={handleChange} />
                </div>
                <div>
                    <input type="text" name="body" value={body} onChange={handleChange} />
                </div>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default PostForm