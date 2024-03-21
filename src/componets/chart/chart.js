import React from 'react';
import Chart from 'react-apexcharts';
import './chart.css'

class ChartComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        
        chart: {
          id: 'basic-bar'
        },
        xaxis: {
       
          categories: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho']
        },
        title: {
          text: '',
          align: 'center'
        },
        colors: ['#008FFB', '#FF4560']
      },
      series: [{
        name: 'ETH',
        data: [191, 140, 145, 250, 149, 160, 170]
      },
      {
        name: 'BTC',
        data: [235, 145, 260, 115, 174, 165, 275]
      }]
    };
  }

  render() {
    return (
      <div className="chart-container">
        <Chart options={this.state.options} series={this.state.series} type="bar" height={350} className="chart" />
      </div>
    );
  }
}

export default ChartComponent;
