import React, { useState } from 'react'
import { connect } from 'react-redux'
import { buyEgg } from '../redux/egg/eggActions'

const NewEggContainer = (props) => {
    const [number, setNumber] = useState(1)

    return (
        <>
            <h1>Number of Eggs - {props.numOfEggs}</h1>
            <input type="text" value={number} onChange={e => setNumber(e.target.value)} />
            <button onClick={() => props.buyEgg(number)}>Buy {number} Egg</button>
        </>
    )
}

const mapStateToProps = state => {
    return {
        numOfEggs: state.egg.numOfEggs
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyEgg: (number) => dispatch(buyEgg(number))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewEggContainer)