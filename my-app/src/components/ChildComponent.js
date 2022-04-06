import React from 'react'

const ChildComponent = (props) => {
  return (
    <div>
        <button onClick={() => props.greetHandler("Sam Kapoor")}>Greet Parent</button>
    </div>
  )
}

export default ChildComponent