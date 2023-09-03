import React, { useState } from 'react';
// import Cat from './Cat.jsx'
// import Photo from './Photo.jsx'
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import Head from 'Head.jsx'

function Home() {
    return (
        <div>
            <h1>Hello World</h1>
            <Link to="/head">CatHead</Link>
        </div>
    );
}

function App() {

    // const [sw, setSw] = useState(true);
    // const [count, setCount] = useState(0);
    const [currentPath, setPath] = useState('/');

    const handleButtonClock = (newPath) => {
        setPath(newPath);
    };

    return (
        <Router>
            {/* <div style={{display:'gird', placeItems:'center'}}>
                <h1>hello world</h1>
            </div> */}
            {/* <p>Count: {count}</p>
            <button class="btn" onClick={() => setCount(count + 1)}>Increment</button><br></br>
            <br></br><button class="btn" onClick={() => setSw(!sw)}>Click!</button>
            { sw ? <Cat /> : <Photo /> } */}

            <Route path="/" exact component={Home} />
            <Route path="/head" component={Head} />
            <Redirect to={currentPath} />
            <button class="btn" onclick={() => handleButtonClock('/head')}>ToHead</button>
            <button class="btn" onclick={() => handleButtonClock('/')}>ToHome</button> 
        </Router>
    )
}

export default App