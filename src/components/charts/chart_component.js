import React, { Component } from 'react';
import Chart from 'react-google-charts';

class chart_component extends Component {
  render() {
    return (
      <div>

      
      <div style={{ display: 'flex', maxWidth: 900 }}>
      <Chart
  width={'100%'}
  height={'100%'}
  chartType="CandlestickChart"
  loader={<div>Loading Chart</div>}
  data={[
    ['day', 'a', 'b', 'c', 'd'],
    ['Mon', 20, 28, 38, 45],
    ['Tue', 31, 38, 55, 66],
    ['Wed', 50, 55, 77, 80],
    ['Thu', 77, 77, 66, 50],
    ['Fri', 68, 66, 22, 15],
  ]}
  options={{
    legend: 'none',
  }}
  rootProps={{ 'data-testid': '1' }}
/>
    </div>
      </div>
      
    );
  }
}

export default chart_component;
  