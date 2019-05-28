import '../../src/chart/index.tsx'
import { define, render, h, WeElement } from 'omi'


define('my-app', class extends WeElement {
  install(){
    this.chartData = {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    }
    
    this.chartOptions = {
      legend: {
        display: false
      },
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  }

  onClick = ()=>{
    this.chartData.datasets.forEach(dataset => {
      dataset.data.forEach((item, index) => {
        dataset.data[index] = Math.random() * 100
      })
    })
    this.update()
  }

  render(props, data) {
    return (
      <div>
        <m-bar width={Math.min(window.innerWidth-30, 575)} data={this.chartData} options={this.chartOptions} />
        <div>
          <button onClick={this.onClick}>random data</button>
        </div>
      </div>
    )
  }
})

render(<my-app />, 'body')
