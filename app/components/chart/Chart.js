import React, {Component} from 'react';
import $ from 'jQuery';
import ChartHeader from './ChartHeader';
import d3 from 'd3'
import data from 'dsv!../../img/sanwhich.csv'

var Chart = React.createClass({
  getInitialState() {
    return {
      data: [],
      selection: 'sandwich_love_perc'
    };
  },

  loadData() {
    d3.csv(data,function(csv){
      this.setState({
        data: csv
      });
    }.bind(this));
  },

  componentDidMount() {
    this.loadData();
  },

  render() {
    return (
      <div className='chart'>
        <ChartHeader title="Hey"/>
        <BarChart data={this.state.data} selection={this.state.selection} />
      </div>
    )
  }
});

export default Chart;
