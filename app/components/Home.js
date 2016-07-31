var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link
var transparentBg = require('../styles').transparentBg;

function Home () {
  return (
    <div className="jumbtotron col-sm-12 text-center" style={transparentBg}>
      <h1>Unity Sandwich</h1>
      <p className='lead'> Sandwhiches are the best</p>
      <Link to='/unityName'>
        <button type='button' className='btn btn-lg btn-success'>Send Us Your Thoughts</button>
      </Link>
    </div>
  )
}
module.exports = Home;
