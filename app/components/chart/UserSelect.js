var React = require('react');

var UserSelect = React.createClass({
  render: function() {
    return (
      <div className='row text-center'>
        <div className='col-md-12'>
          <div id='user-select-dropdown' className='dropdown'>
            <button className='btn btn-default dropdown-toggle' type='button' id='user-select' data-toggle='dropdown' aria-haspopup='true' aria-expanded='true'>
              <span id='select-text'>Avg Temp (ºF)</span> <span className='caret'></span>
            </button>
            <ul onClick={this.props.handleSelect} className='dropdown-menu' aria-labelledby='user-select'>
              <li><a href='javascript:void(0)' className='select current-selection' id='avg_temp_f'>Avg Temp (ºF)</a></li>
              <li><a href='javascript:void(0)' className='select' id='avg_min_temp_f'>Avg Min Temp (ºF)</a></li>
              <li><a href='javascript:void(0)' className='select' id='avg_max_temp_f'>Avg Max Temp (ºF)</a></li>
              <li><a href='javascript:void(0)' className='select' id='total_percipitation_in'>Total Percipitation (in)</a></li>
              <li><a href='javascript:void(0)' className='select' id='total_snowfall_in'>Total Snowfall (in)</a></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = UserSelect;
