import React from 'react'
import { UserContext, ChannelContext } from '../App'

const Child = () => {
    return (
        <UserContext.Consumer>
            {user => {
                return (
                    // <h1>Hello {user}</h1>
                    <ChannelContext.Consumer>
                        {channel => {
                            return(
                                <div>
                                    <h1>User is - {user}</h1>
                                    <h1>Channel is - {channel}</h1>
                                </div>
                            )
                        }}
                    </ChannelContext.Consumer>
                )
            }}
        </UserContext.Consumer>
    )
}

export default Child