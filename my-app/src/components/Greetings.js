import React from 'react'

// const Greetings = (props) => {
//     console.log(props)
//     return (
//         <>
//             <h1>Greetings from {props.name}</h1>
//             <p>{props.children}</p>
//         </> 
//     )
// }

// const Greetings = ({ name, children }) => {
//     return (
//         <>
//             <h1>Greetings from {name}</h1>
//             <p>{children}</p>
//         </> 
//     )
// }

const Greetings = (props) => {
    const { name, children } = props;
    return (
        <>
            <h1>Greetings from {name}</h1>
            <p>{children}</p>
        </> 
    )
}


export default Greetings