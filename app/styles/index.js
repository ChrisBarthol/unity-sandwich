var imgUrl = require('../img/montage.jpg');

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

  // splashContent: {
  //   display: -webkit-box,
  //   display: -moz-box,
  //   display: -ms-flexbox,
  //   display: -webkit-flex,
  //   display: flex,
  //   -webkit-box-align: center,
  //   -moz-box-align: center,
  //   -ms-flex-align: center,
  //   -webkit-align-items: center,
  //   align-items: center,
  //   -webkit-box-pack: center,
  //   -moz-box-pack: center,
  //   -ms-flex-pack: center,
  //   -webkit-justify-content: center,
  //   justify-content: center,
  //   margin: 0,
  //   height: 100%,
  //   width: 100%,
  // },
  //
  // splashContentH1 {
  //   color: #fff,
  //   font-family: 'Nothing You Could Do', cursive,
  //   font-size: 55px,
  //   font-weight: 600,
  //   text-shadow: rgb(0, 0, 0) 1px 1px 1px,
  //   -webkit-font-smoothing: subpixel-antialiased,
  // },
  //
  // splashContentH4 {
  //   color: #e6e6e6,
  //   font-family: 'Lato', sans-serif,
  //   font-size: 23px,
  //   letter-spacing: 3px,
  //   text-shadow: rgb(0, 0, 0) 1px 1px 1px,
  //   -webkit-font-smoothing: subpixel-antialiased,
  // },
  //
  toVizContainer: {
    height: '400px'
  },
  //
  // nextSection {
  //   margin-top: 20px,
  //   width: 40px,
  //   height: 40px,
  //   border-radius: 50%,
  //   -moz-border-radius: 50%,
  //   -webkit-border-radius: 50%,
  //   -o-border-radius: 50%,
  //   border: 1px solid #777,
  //   background: #e6e6e6,
  //   display: inline-block,
  //   color: #777,
  //   font-size: 16px,
  //   line-height: 40px,
  //   text-align: center,
  // }


};

module.exports = styles;
