window.jQuery = require('jquery');
require('bootstrap-webpack');

import { Router, Route, Link} from 'react-router';
import CommentEditor from './component/content';
import Header from './component/header';

var React = require('react');
var ReactDOM = require('react-dom');

var HelloMessage = React.createClass({
    render: function() {
        return (
            <div> <Header />Hello { this.props.name } 
                <div className="jumbotron">
                    <h1>Hello, worlds!</h1>
                    <p>This is sddmple herod unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                    <p><a className="btn btn-primary btn-lg" href="#" role="button">Learn smore</a></p>
                </div>
                <CommentEditor />
            </div>
        );
    }
});

// 加载组件到 DOM 元素 mountNode
ReactDOM.render(<HelloMessage name = "John" / >, document.getElementById('container'));