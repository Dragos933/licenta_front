import React from 'react';
import Chart from 'chart.js';

export default class ChartInCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSets: [
        [12, 19, 25, 26, 45],
        [25, 19, 33, 46, 50],
        [17, 22, 31, 35, 42]
      ]
    };
  }

  createLineChart = () => {
    const ctx = document.getElementById(`lineChart`);

    var configurations = {
      type: 'bar',
      data: {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        datasets: [
          {
            label: 'New Users per Day',
            data: [12, 19, 25, 26, 45],
            backgroundColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 3
          }
        ]
      },
      options: {
        legend: {
          display: true,
          labels: {
            fontColor: 'rgb(255, 255, 255)',
            defaultFontSize: '20'
          }
        },
        scales: {
          yAxes: [
            {
              ticks: {
                fontColor: '#fff'
              },
              gridLines: {
                zeroLineColor: '#fff'
              }
            }
          ],
          xAxes: [
            {
              ticks: {
                fontColor: '#fff'
              },
              gridLines: {
                display: true,
                zeroLineColor: '#fff'
              }
            }
          ]
        }
      }
    };
    var myChart = new Chart(ctx, configurations);
    var index = 0;
    setInterval(() => {
      myChart.data.datasets[0].data = this.state.dataSets[index];
      index++;
      if (index > 2) {
        index = 0;
      }
      myChart.update();
    }, 2000);
  };

  componentDidMount() {
    this.createLineChart();
  }

  render() {
    const screenWidth = window.innerWidth;
    let width = 100;
    let height = 100;

    if (screenWidth >= 1920) {
      width = 500;
      height = 400;
    }
    if (screenWidth >= 1440) {
      width = 400;
      height = 300;
    }
    else if (screenWidth < 1440 && screenWidth >= 768) {
      width = 400;
      height = 200;
    }
    else if ( screenWidth >= 425) {
      width = 300;
      height = 150;
    }
    else if ( screenWidth >= 320) {
      width = 250;
      height = 150;
    }
    return (
      <div className='chart-item-container'>
        <canvas
          id={`lineChart`}
          className='projectPieChart'
          width={width}
          height={height}></canvas>
      </div>
    );
  }
}
