import React, {Component} from 'react';
import ChartHeader from './ChartHeader';
import BarChart from './BarChart';
import data from '../../img/sanwhich.csv';
import Select from 'react-select';
var options = [
  { value: 'avg_temp_f', label: 'Avg Sandwich Love' },
  { value: 'avg_min_temp_f', label: 'Avg Night Sandwich Love' },
  { value: 'avg_max_temp_f', label: 'Avg Daytime Sandwich Love' },
  // { value: 'total_percipitation_in', label: 'Total Sandwiches' },
  // { value: 'total_snowfall_in', label: 'Extra Sandwiches' },
]

var Chart = React.createClass({

  getInitialState () {
    return {
      data: [],
      selection: 'avg_temp_f'
    }
  },
  loadData () {
    this.setState({
      data: data
    });
  },
  componentDidMount() {
    this.loadData();
  },
  handleUserSelect(e) {
    var selection = e.value;
    this.setState({
      selection: selection
    })
  },

  render() {
    return (
      <div id='viz'>
        <h1 className='text-center'>The Data</h1>
        <p className='lead text-center'>Average love of sandwiches corresponds well with wedding season</p>
        <ChartHeader />
        <div className='row text-center'>
          <div className="col-md-4"></div>
          <div className='col-md-4'>
            <div id='user-select-dropdown' className='dropdown'>
              <Select name="sandwich-select" value={this.state.selection} options={options} onChange={this.handleUserSelect} />
            </div>
          </div>
        </div>
        <div className="container">
          { this.state.data.length != 0 ? <BarChart data={this.state.data} selection={this.state.selection} /> : null }
        </div>
      </div>
    )
  }
});

export default Chart;
