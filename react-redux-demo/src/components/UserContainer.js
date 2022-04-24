import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../redux/user/userActions'

const UserContainer = ({ userData, fetchUsers }) => {
    useEffect(() => {
        fetchUsers()
    },[])

    // if(userData.loading) {
    //     return <h2>Loading...</h2>
    // } else if(userData.error) {
    //     return <h2>{userData.error}</h2>
    // } else {
    //     return (
    //         <>
    //             <h1>User Data</h1>
    //             <h2>{userData.users.map(user => <p key={user.id}>{user.name}</p>)}</h2>
    //         </>
    //     )
    // }
                
    return userData.loading ? <h2>Loading...</h2> : userData.error ? 
        <h2>{userData.error}</h2> : (
            <>
                <h1>User Data</h1>
                <h2>{userData.users.map(user => <p key={user.id}>{user.name}</p>)}</h2>
            </>
        )
}

const mapStateToProps = state => {
    return {
        userData: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)