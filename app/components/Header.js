var React = require('react');
var splash = require('../styles').splash
var splashContent = require('../styles').splashContent
var splashContentH1 = require('../styles').splashContentH1
var splashContentH4 = require('../styles').splashContentH4
var toVizContainer = require('../styles').toVizContainer
var nextSection = require('../styles').nextSection

function Header () {
  return (
    <header>
      <section className="splash" style={splash}>
        <div className="splash-content" style={splashContent}>
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 id="main-title" className="fadeInDown animated" style={splashContentH1}>Yosemite National Park</h1>
                <h4 className="fadeInUp animated" style={splashContentH4}>five year weather trends</h4>
                <div id="to-viz-container" style={toVizContainer}>
                  <a id="to-viz" className="next-section hide" href="#viz">
                    <i className="fa fa-arrow-down" style={nextSection}></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </header>
  )
}

module.exports = Header
