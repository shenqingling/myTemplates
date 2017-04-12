import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router';
import App from './src/app.js';
import Repos from './src/component/repos.js';
import About from './src/component/about.js';

render((
    <Router history={ hashHistory }>
        <Route
               path="/"
               component={ App } />
        <Route
               path="/repos"
               component={ Repos } />
        <Route
               path="/about"
               component={ About } />
    </Router>
    ), document.getElementById('app'));


    // import React from 'react'
    // import { render } from 'react-dom'
    // import {
    //   BrowserRouter as Router,
    //   Route,
    //   Link
    // } from 'react-router-dom'

    // const Home = () => (
    //   <div>
    //     <h2>Home</h2>
    //   </div>
    // )

    // const About = () => (
    //   <div>
    //     <h2>About</h2>
    //   </div>
    // )

    // import Topics from './src/component/topics.js'

    // const BasicExample = () => (
    //   <Router>
    //     <div>
    //       <ul>
    //         <li><Link to="/">Home</Link></li>
    //         <li><Link to="/about">About</Link></li>
    //         <li><Link to="/topics">Topics</Link></li>
    //       </ul>

    //       <hr/>

    //       <Route exact path="/" component={Home}/>
    //       <Route path="/about" component={About}/>
    //       <Route path="/topics" component={Topics}/>
    //     </div>
    //   </Router>
    // )
    // render(<BasicExample />,document.getElementById('app'))