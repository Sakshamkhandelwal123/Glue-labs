import React, { Component } from 'react'
import { GiphyFetch } from '@giphy/js-fetch-api'
import Temp from './Temp'
import './Giphy.css'

class Giphy extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: '',
            results: [],

        }
        this.handleInput = this.handleInput.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleInput = (e) => {
        this.setState({
            text: e.target.value
        })
    }

    handleSubmit = (e) => {
        const api = async () => {
            const gph = new GiphyFetch('KZBU4PMkLEYt6KVhcrgtXTQ0WOv8vslj')
            const res = await gph.animate(this.state.text, { limit: 10 })
            this.setState({
                results: res.data,
            })
            console.log(res.data)
        }
        api()
        this.setState({
            text: '',
        })
    }

    render() {
        return (
            <>
                <div className="App">
                    <h1>GIPHY</h1>
                    <h3>Type a word to generate GIFs</h3>
                    <input className='input-field' value={this.state.text} onChange={this.handleInput} />
                    <button className='submit-btn' onClick={this.handleSubmit}>Submit</button>
                    {<Temp gifs={this.state.results} />}
                </div>
            </>
        )
    }
}

export default Giphy;