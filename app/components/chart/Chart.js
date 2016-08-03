import React, {Component} from 'react';
import $ from 'jQuery';
import ChartHeader from './ChartHeader';
import UserSelect from './UserSelect';
import BarChart from './BarChart';
import data from '../../img/sanwhich.csv';

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
    var selection = e.target.id;
    $('#select-text').text(e.target.innerHTML);
    $('.select').removeClass('current-selection');
    $('#' + selection).addClass('current-selection');
    this.setState({
      selection: selection
    })
  },
  render() {
    return (
      <div id='viz'>
        <ChartHeader />
        <UserSelect selection={this.state.selection} handleSelect={this.handleUserSelect} />
        { this.state.data.length != 0 ? <BarChart data={this.state.data} selection={this.state.selection} /> : null }
      </div>
    )
  }
});

export default Chart;
