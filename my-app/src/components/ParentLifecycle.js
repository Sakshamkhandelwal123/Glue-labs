import React, { Component } from 'react'
import ChildLifecycle from './ChildLifecycle';

class ParentLifecycle extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'ParentLifecycle'
        }
        console.log('ParentLifecycle Constructor');
    }

    static getDerivedStateFromProps(props, state) {
        console.log('ParentLifecycle getDerivedStateFromProps');
        return null
    }

    componentDidMount() {
        console.log('ParentLifecycle ComponentDidMount');
    }

    shouldComponentUpdate() {
        console.log('ParentLifeCycle ShouldComponentUpdate');
        return true
    }

    getSnapshotBeforeUpdate() {
        console.log('ParentLifeCycle getSnapshotBeforeUpdate');
        return null
    }

    componentDidUpdate() {
        console.log('ParentLifeCycle componentDidUpdate');
    }

    render() {
        console.log('ParentLifeCycle render');
        return (
            <>
                <h1>{this.state.name}</h1>
                <button onClick={() => this.setState({name:'Saksham'})}>Change State</button>
                <ChildLifecycle />
            </>
        )
    }
}

export default ParentLifecycle