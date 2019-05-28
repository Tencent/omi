## Line

Line chart.

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
<m-line id="myLine" width="600" height="300" 
  data="{
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: 'rgba(255, 99, 132, .4)',
      borderColor: 'rgb(255, 99, 132)',
      borderWidth: 1
    }]
  }"

  options="{
    responsive: true,
    title: {
      display: true,
      text: 'Omi-chart Line Chart'
    },
    tooltips: {
      mode: 'index',
      intersect: false
    },
    hover: {
      mode: 'nearest',
      intersect: true
    },
    scales: {
      xAxes: [{
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Month'
        }
      }],
      yAxes: [{
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Value'
        }
      }]
    }
  }">
</m-line>
```

## Update the chart

```js
//get the element
var chart = document.querySelector('#myLine')
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