import React, { Component } from 'react'

// class Welcome extends Component {
//   render() {
//     return (
//         <>
//             <h2>Welcome {this.props.name}</h2>
//             <p>{this.props.children}</p>
//             {/* <label htmlFor="name">Name</label>
//             <input type="text" id="name"/> */}
//         </>
//     )
//   }
// }

class Welcome extends Component {
  render() {
    const { name, children } = this.props;
    return (
        <>
            <h2>Welcome {name}</h2>
            <p>{children}</p>
            {/* <label htmlFor="name">Name</label>
            <input type="text" id="name"/> */}
        </>
    )
  }
}

export default Welcome