import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './src/app.js';
import Index from './src/index.js';
// 话题（论坛）
import Topic from './src/topic/topic.js';
// 技术（总结分享）
// import Skill from './src/skill/skill.js';

render((
    <Router history={ hashHistory }>
        <Route
               path="/"
               component={ App }>
            <IndexRoute component={ Index } />
            <Route
                   path="topic"
                   component={ Topic } />
        </Route>
    </Router>
    ), document.getElementById('app'));