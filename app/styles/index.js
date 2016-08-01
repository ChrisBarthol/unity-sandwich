var imgUrl = require('../img/jamwhich.jpg');

var styles = {
  transparentBg: {
    background: 'transparent'
  },

  splash: {
    position: 'relative',
    height: '100%',
    background: 'rgb(245, 246, 250) url('+ imgUrl +') fixed top center',
    WebkitBackgroundSize: 'cover',
    backgroundSize: 'cover',
  },

  splashContent: {
    margin: '0',
    height: '1000px',
    width: '100%',
  },

  splashContentH1: {
    marginTop: '20%',
    color: '#fff',
    fontFamily: "'Nothing You Could Do', cursive",
    fontSize: '70px',
    fontWeight: '700',
    textShadow: 'rgb(0, 0, 0) 1px 1px 1px',
    WebkitFontSmoothing: 'subpixel-antialiased',
  },

  splashContentH4: {
    marginTop: '2%',
    color: '#e6e6e6',
    fontFamily: "'Lato', sans-serif",
    fontSize: '23px',
    letterSpacing: '3px',
    textShadow: 'rgb(0, 0, 0) 1px 1px 1px',
    WebkitFontSmoothing: 'subpixel-antialiased',
  },

  toVizContainer: {
    height: '400px'
  },

  nextSection: {
    top: '20px',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    MozBorderRadius: '50%',
    WebkitBorderRadius: '50%',
    OBorderRadius: '50%',
    border: '1px solid #777',
    background: '#e6e6e6',
    display: 'inlineBlock',
    color: '#777',
    fontSize: '16px',
    lineHeight: '40px',
    textAlign: 'center',
  }


};

module.exports = styles;
