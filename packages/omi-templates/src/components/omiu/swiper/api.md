## Swiper Props

| Name       | Type    | Default      | Description                                      |
| ---------- | ------- | ------------ | ------------------------------------------------ |
| direction  | string  | 'horizontal' | Direction of the swiper (vertical or horizontal) |
| loop       | boolean | true         | Whether the swiper should loop                   |
| index      | number  | 0            | Initial index of the swiper                      |
| navigation | boolean | true         | Whether to show navigation buttons               |
| pagination | boolean | true         | Whether to show pagination                       |
| slidesPerView | string or number | "auto" | Number of slides to show per view. "auto" will automatically adjust the number of slides based on the viewport size. |
| spaceBetween | number | 30 | Space between each slide in pixels. |
| autoPlay | boolean | true | Whether to enable auto play. |

## Swiper Events

| Name   | Parameters               | Description                        |
| ------ | ------------------------ | ---------------------------------- |
| change | evt: CustomEvent<number> | Event triggered when slide changes |

## Swiper 属性

| Name       | Type   | Default      | Description                 |
| ---------- | ------ | ------------ | --------------------------- |
| direction  | 字符串 | 'horizontal' | Swiper 的方向（垂直或水平） |
| loop       | 布尔值 | true         | 是否启用 Swiper 循环播放    |
| index      | 数字   | 0            | Swiper 的初始索引           |
| navigation | 布尔值 | true         | 是否显示导航按钮            |
| pagination | 布尔值 | true         | 是否显示分页器              |

## Swiper 事件

| Name   | Parameter                | Description            |
| ------ | ------------------------ | ---------------------- |
| change | evt: CustomEvent<number> | 幻灯片更改时触发的事件 |
