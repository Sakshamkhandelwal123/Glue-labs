import React, { useState } from 'react'

const HookCounter4 = () => {
    const [items, setItems] = useState([])
    const addItem = () => {
        setItems([...items, {id:items.length, value: Math.random()*10}])
    }

    console.log(items)

    return (
        <>
            <button onClick={addItem}>Add a number</button>
            {items.map(item => <h3 key={item.id}>{item.value}</h3>)}
        </>
    )
}

export default HookCounter4