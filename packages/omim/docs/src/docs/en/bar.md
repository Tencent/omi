## Bar

Bar chart.

## Install

### Via script

```html
<script src="https://unpkg.com/omi"></script>
<script src="https://unpkg.com/@omim/core@latest/chart/index.js"></script>
```

### Via npm

``` bash
npm install @omim/core
```

Then:

```js
import '@omim/core/chart'
```

## Usage

```html
<m-bar id="myBar" width="600" height="300" data="{
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
}"
  options="{
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
}"></m-bar>
```

## Update the chart

```js
//get the element
var chart = document.querySelector('#myBar')
//change data of chart
chart.props.data.datasets.forEach(dataset => {
  dataset.data.forEach((item, index) => {
    dataset.data[index] = Math.random() * 100
  })
})
//update chart
chart.update()
```

## API

### Props

```jsx
{
  data: object,
  options: object,
  width: number,
  height: number,
  horizontal?: string
}
```