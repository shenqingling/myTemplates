import 'bootstrap-webpack';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory} from 'react-router';

import CommentEditor from './component/content';
import App from './app';

var HelloMessage = React.createClass({
    render: function() {
        return (
            <Router history={hashHistory}>
                <Route path="/" component={App}>
                    <Route path="/aaa" component={CommentEditor} />
                    <Route path="/bbb" component={CommentEditor} />
                </Route>
            </Router>
        );
    }
});

// 加载组件到 DOM 元素 mountNode
ReactDOM.render(<HelloMessage name = "John" / >, document.getElementById('container'));