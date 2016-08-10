var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link
var MainSplash = require('./MainSplash.js')
var transparentBg = require('../styles').transparentBg;
var $ = require('jQuery');
import Chart from './chart/Chart';
import Detail from './Detail';
import Events from './Events';


function Home () {
  return (
    <div>
      <MainSplash />
      <Detail />
      <Chart />
      <Events />
    </div>
  )
}
module.exports = Home;
