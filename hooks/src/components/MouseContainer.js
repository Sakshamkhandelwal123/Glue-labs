import React, {useState} from 'react'
// import ClassMouse from './ClassMouse';
import HookMouse from './HookMouse';

const MouseContainer = () => {
    const [display, setDisplay] = useState(true);

    return (
        <>
            <button onClick={() => setDisplay(!display)}>Toggle Display</button>
            {/* {display && <ClassMouse />} */}
            {display && <HookMouse />}
        </>
    )
}

export default MouseContainer