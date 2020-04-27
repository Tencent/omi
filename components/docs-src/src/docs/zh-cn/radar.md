## Radar

雷达图。

## Usage

```html
<o-radar id="myRadar" width="600" height="300" 
  data="{
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: 'rgba(255, 99, 132, .2)',
      borderColor: 'rgb(255, 99, 132)',
      borderWidth: 1
    }]
  }"

  options="{
    maintainAspectRatio: true,
    spanGaps: false,
    elements: {
      line: {
        tension: 0.000001
      }
    },
    plugins: {
      filler: {
        propagate: false
      },
      'samples-filler-analyser': {
        target: 'chart-analyser'
      }
    }
  }">
</o-radar>
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
