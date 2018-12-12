import { define, WeElement } from 'omi'
import logo from './logo.svg'
import style from './_index.css'
import '../../chart'

define('my-app', class extends WeElement {

  install(){
    this.chartData = {
      labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
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
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  }

  css() {
    return style
  }

  onClick = ()=>{
    this.chartData.datasets[0].data[0] = Math.random()*100
    this.chartData.datasets[0].data[1] = Math.random()*100
    this.chartData.datasets[0].data[2] = Math.random()*100
    this.chartData.datasets[0].data[3] = Math.random()*100
    this.chartData.datasets[0].data[4] = Math.random()*100
    this.chartData.datasets[0].data[5] = Math.random()*100
    this.update()
  }


  addDataset = ()=>{
    this.chartData.datasets.push({
      label: '# of Votes',
      data: [Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100],
      backgroundColor: 'rgba(25,202,173,0.2)',
			borderColor: '#19CAAD',
      borderWidth: 1
    })
    this.update()
  }

  render(props, data) {
    return (
      <div class="app">
        <header class="app-header">
          <img
            src={logo}
            class="app-logo"
            alt="logo"
          />
          <h1 class="app-title">Welcome to omi-chart</h1>
        </header>
        <chart-bar width={375} data={this.chartData} options={this.chartOptions} />
        <chart-line width={375} data={this.chartData} options={this.chartOptions} />
        <chart-radar width={375} data={this.chartData} options={this.chartOptions} />
        <div>
          <button onClick={this.onClick}>Change data of chart</button>
          <button onClick={this.addDataset}>Add dataset</button>
        </div>
      </div>
    )
  }
})