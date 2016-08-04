var React = require('react');

var BarChart = React.createClass({

  drawLineChart: function(elementParent, data) {
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    nv.addGraph(function() {
      var lineChart = nv.models.lineChart()
        .margin({left: 25, right: 25})
        .x(function(d) {return d.x})
        .y(function(d) {return d.y})
        .useInteractiveGuideline(true)
        .showYAxis(true)
        .showXAxis(true);
      lineChart.xAxis
        .tickFormat(function (d) { return months[d - 1]; })
        .staggerLabels(false);
      lineChart.yAxis
        .tickFormat(d3.format('.1f'));
      d3.select('#' + elementParent + ' svg')
        .datum(data)
        .call(lineChart);
      nv.utils.windowResize(function() { lineChart.update() });
      return lineChart;
    });
  },

  updateLineChart: function(elementParent, data) {
    d3.select('#' + elementParent + ' svg')
      .datum(data)
      .call(lineChart);
  },

  keyToYearThenMonth: function(data) {
    var keyYearMonth = d3.nest()
      .key(function(d){return d.year; })
      .key(function(d){return d.month; });
    var keyedData = keyYearMonth.entries(
      data.map(function(d) {
        return d;
      })
    );
    return keyedData;
  },

  lineData: function(selection, data) {
    var colors = ['#ff7f00','#984ea3','#4daf4a','#377eb8','#e41a1c'];
    data = data.sort(function(a,b){ return +a.key - +b.key; });
    var lineDataArr = [];
    for (var i = 0; i <= data.length-1; i++) {
      var lineDataElement = [];
      var currentValues = data[i].values.sort(function(a,b){ return +a.key - +b.key; });
      for (var j = 0; j <= currentValues.length-1; j++) {
        lineDataElement.push({
          'x': +currentValues[j].key,
          'y': +currentValues[j].values[0][selection]
        });
      }
      lineDataArr.push({
        key: +data[i].key,
        color: colors[i],
        values: lineDataElement
      });
    }
    return lineDataArr;
  },
  componentDidMount: function() {
    this.drawLineChart('line-chart', this.lineData(this.props.selection, this.keyToYearThenMonth(this.props.data)));
  },
  componentDidUpdate: function() {
    this.drawLineChart('line-chart', this.lineData(this.props.selection, this.keyToYearThenMonth(this.props.data)));
  },
  render: function() {
    return (
      <div id='line-chart'style={{height: '450px'}}>
        <svg></svg>
      </div>
    );
  }
});



module.exports = BarChart;
