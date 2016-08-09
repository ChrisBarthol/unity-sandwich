var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link
var MainSplash = require('./MainSplash.js')
var transparentBg = require('../styles').transparentBg;
var $ = require('jQuery');
import Chart from './chart/Chart';


function Home () {
  return (
    <div>
      <MainSplash />
      <h1 className='text-center'>The Data</h1>
      <p className='lead text-center'>Average love of sandwiches corresponds well with wedding season</p>
      <Chart />
    </div>
  )
}
module.exports = Home;
