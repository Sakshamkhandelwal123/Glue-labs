import React, { Component } from 'react'

class ChildLifecycle extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'ChildLifecycle'
        }
        console.log('ChildLifecycle Constructor');
    }

    static getDerivedStateFromProps(props, state) {
        console.log('ChildLifecycle getDerivedStateFromProps');
        return null
    }

    componentDidMount() {
        console.log('ChildLifecycle ComponentDidMount');
    }

    shouldComponentUpdate() {
        console.log('ChildLifecycle ShouldComponentUpdate');
        return true
    }

    getSnapshotBeforeUpdate() {
        console.log('ChildLifecycle getSnapshotBeforeUpdate');
        return null
    }

    componentDidUpdate() {
        console.log('ChildLifecycle componentDidUpdate');
    }

    render() {
        console.log('ChildLifecycle render');
        return (
            <h1>{this.state.name}</h1>
        )
    }
}

export default ChildLifecycle