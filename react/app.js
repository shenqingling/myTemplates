import React from 'react';
import Header from './component/header';

export default class App extends React.Component {
  render() {
    return(
      <div className="container">
        <Header />
        {this.props.children ? this.props.children : 'dajhdjak'}
      </div>
    );
  }
}