var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link
var MainSplash = require('./MainSplash.js')
var transparentBg = require('../styles').transparentBg;
var $ = require('jQuery');


function Home () {
  return (
    <div>
      <MainSplash />
      <div id='next-section' className="jumbtotron col-sm-12 text-center" style={transparentBg}>
        <h1>Unity Sandwich</h1>
        <p className='lead'> Sandwhiches are the best</p>
        <Link to='/unityName'>
          <button type='button' className='btn btn-lg btn-success'>Send Us Your Thoughts</button>
        </Link>
      </div>
    </div>
  )
}
module.exports = Home;
