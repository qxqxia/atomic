import React, { useState } from 'react';
import Cat from './Cat.jsx'
import Photo from './Photo.jsx'

function App() {

    const [sw, setSw] = useState(true);
    const [count, setCount] = useState(0);

    return (
        <>
            <div style={{display:'gird', placeItems:'center'}}>
                <h1>hello world</h1>
            </div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button><br></br>
            <br></br><button onClick={() => setSw(!sw)}>Click!</button>
            { sw ? <Cat /> : <Photo /> }
        </>
    )
}

export default App