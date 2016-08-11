import React, { Component } from 'react';
import Header from './Header';

class Main extends Component {
  render () {
    return (
      <div>
        <Header />
        <div className='main-container'>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Main;
