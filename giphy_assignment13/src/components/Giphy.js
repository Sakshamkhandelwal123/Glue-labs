import React, {useState} from 'react'
import Temp from './Temp'
import './Giphy.css'
import { GiphyFetch } from '@giphy/js-fetch-api'

const Giphy = () => {
    const [text, setText] = useState('');
    const [results, setResults] = useState([]);

    const handleInput = (e) => {
        setText(e.target.value);
    }
    const handleSubmit = (e) => {
        const apiCall = async () => {
            const giphy = new GiphyFetch('KZBU4PMkLEYt6KVhcrgtXTQ0WOv8vslj')
            const res = await giphy.animate(text, { limit: 10 })
            setResults(res.data)
            console.log(res.data)
        }
        apiCall()
        setText('');
    }

    return (
        <>
            <div className="App">
                <h1>Giphy</h1>
                <h3>Type a word to generate 10 GIFs</h3>
                <input className='input-field' value={text} onChange={handleInput} />
                <button className='submit-btn' onClick={handleSubmit}>Submit</button>
                {<Temp gifs={results} />}
            </div>
        </>
    )
}

export default Giphy