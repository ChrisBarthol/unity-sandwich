var React = require('react');
var MainSplash = require('../components/MainSplash');
var $ = require('jQuery');

var MainSplashContainer = React.createClass({

  handleScroll: function (e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: target.offset().top
    }, 1200);
    return false;
  },

  render: function() {
    return (
      <MainSplash
        onScroll={this.handleScroll} />
    )
  }
});

module.exports = MainSplashContainer;
