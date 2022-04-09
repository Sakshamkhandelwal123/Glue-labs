import React, { Component } from 'react'

class PostForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userId: '',
            title: '',
            body: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
            //userId: event.target.value
            //title: event.target.value
            //body: event.target.value
        })
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        const url = 'https://jsonplaceholder.typicode.com/posts'
        const settings = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        }
        const res = await fetch(url, settings)
        const data = await res.json()
        console.log(data)
    }

    render() {
        const { userId, title, body } = this.state
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <input type="text" name='userId' value={userId} onChange={this.handleChange} />
                </div>
                <div>
                    <input type="text" name='title' value={title} onChange={this.handleChange} />
                </div>
                <div>
                    <input type="text" name='body' value={body} onChange={this.handleChange} />
                </div>
                <button type='submit'>Submit</button>
            </form>
        )
    }
}

export default PostForm