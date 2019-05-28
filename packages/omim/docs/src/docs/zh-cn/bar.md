## Bar

柱状图。

## 安装

### 通过 script

```html
<script src="https://unpkg.com/omi"></script>
<script src="https://unpkg.com/@omim/core@latest/chart/index.js"></script>
```

### 通过 npm

``` bash
npm install @omim/core
```

然后:

```js
import '@omim/core/chart'
```

## 使用

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

## 更新图表

```js
//获取该元素
var chart = document.querySelector('#myBar')
//更改图表的数据
chart.props.data.datasets.forEach(dataset => {
  dataset.data.forEach((item, index) => {
    dataset.data[index] = Math.random() * 100
  })
})
//更新图表视图
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