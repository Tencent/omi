## Swiper Props

| Name          | Type    | Default      | Description                                      |
| ------------- | ------- | ------------ | ------------------------------------------------ |
| direction     | string  | 'horizontal' | Direction of the swiper (vertical or horizontal) |
| loop          | boolean | true         | Whether the swiper should loop                   |
| index         | number  | 0            | Initial index of the swiper                      |
| navigation    | boolean | true         | Whether to show navigation buttons               |
| pagination    | boolean | true         | Whether to show pagination                       |
| slidesPerView | string or number | "auto" | Number of slides to show per view. "auto" will automatically adjust the number of slides based on the viewport size. |
| spaceBetween  | number  | 30           | Space between each slide in pixels.              |
| autoPlay      | boolean | true         | Whether to enable auto play.                     |

## Swiper Events

| Name   | Parameters                   | Description                           |
| ------ | ---------------------------- | ------------------------------------- |
| change | evt: CustomEvent<number>     | Event triggered when slide changes    |

## Swiper 属性

| 名称         | 类型    | 默认值       | 描述                                          |
| ------------ | ------- | ------------ | --------------------------------------------- |
| direction    | 字符串  | 'horizontal' | Swiper 的方向（垂直或水平）                   |
| loop         | 布尔值  | true         | 是否启用 Swiper 循环播放                      |
| index        | 数字    | 0            | Swiper 的初始索引                            |
| navigation   | 布尔值  | true         | 是否显示导航按钮                             |
| pagination   | 布尔值  | true         | 是否显示分页器                               |
| slidesPerView| 字符串或数字 | "auto"    | 每视图显示的幻灯片数量。"auto" 根据视口大小自动调整幻灯片数量。 |
| spaceBetween | 数字    | 30           | 每个幻灯片之间的间距（像素）。                 |
| autoPlay     | 布尔值  | true         | 是否启用自动播放                              |

## Swiper 事件

| 名称    | 参数                       | 描述                               |
| ------ | -------------------------- | ---------------------------------- |
| change | evt: CustomEvent<number>   | 幻灯片更改时触发的事件             |
