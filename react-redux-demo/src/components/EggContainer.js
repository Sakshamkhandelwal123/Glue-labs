import React from 'react'
import { connect } from 'react-redux'
import { buyEgg } from '../redux/egg/eggActions'

const EggContainer = (props) => {
    return (
        <>
            <h1>Number of Eggs - {props.numOfEggs}</h1>
            <button onClick={props.buyEgg}>Buy Egg</button>
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
        buyEgg: () => dispatch(buyEgg())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EggContainer)