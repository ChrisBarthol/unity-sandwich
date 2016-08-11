import React, {Component} from 'react';
import ReactRouter, {Link} from 'react-router';

var Header = React.createClass({

  render(){
    return (
      <div id='details'>
        <Link to="/">
          <i className="fa fa-arrow-down"></i>
        </Link>
      </div>
    )
  }
});

export default Header;
