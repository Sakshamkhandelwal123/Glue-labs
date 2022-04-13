import React, {useContext} from 'react'
import Child from './Child'
import { UserContext, ChannelContext } from '../App'

const Parent = () => {
    const user = useContext(UserContext)
    const channel = useContext(ChannelContext)
    return (
        <>
            <h3>useContext User = {user}, Channel = {channel}</h3>
            <Child />
        </>
    )
}

export default Parent