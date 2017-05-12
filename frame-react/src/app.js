import React, { Component } from 'react';
import { Link } from 'react-router'
import { Button } from 'antd';

export default class App extends Component {
    render() {
        return <div>
                   <Button type="primary">
                       Primary
                   </Button>
                   <Link to="/about"> about
                   </Link>
                   <Link to="/repos"> repos
                   </Link>
                   { this.props.children }
               </div>
    }
}