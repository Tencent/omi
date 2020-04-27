## Line

Line chart.

## Usage

```html
<o-line id="myLine" width="600" height="300" 
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
</o-line>
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
  height: number
}
```
