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