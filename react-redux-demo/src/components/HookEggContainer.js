import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyEgg } from '../redux/egg/eggActions';

const HookEggContainer = () => {
    const numOfEggs = useSelector(state => state.egg.numOfEggs);
    const dispatch = useDispatch();

    return (
        <>
            <h1>Num of Hook Eggs - {numOfEggs}</h1>
            <button onClick={() => dispatch(buyEgg())}>Buy Hook Egg</button>
        </>
    )
}

export default HookEggContainer