import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';

class Main extends Component {
  render () {
    return (
      <div>
        <Header />
        <div className='main-container'>
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}

export default Main;
