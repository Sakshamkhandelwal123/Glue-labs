import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true
        }
    }
    render() {
        // let message;
        // if(this.state.isLoggedIn) 
        //     message = <h1>Welcome Saksham</h1>
        // else
        //     message = <h1>Welcome Guest</h1>

        // return <>{message}</>

        // return this.state.isLoggedIn ? (
        //     <>
        //         <h1>Welcome Saksham</h1>
        //         <p>lorem ipsum to the world nichat kurian</p>
        //     </>   
        // ) : (
        //     <>
        //         <h1>Welcome Guest</h1>
        //         <p>lorem ipsum to the world nichat kurian</p>
        //     </>
        // )

        return this.state.isLoggedIn && <h1>Welcome Saksham</h1>
    }
}

export default UserGreeting