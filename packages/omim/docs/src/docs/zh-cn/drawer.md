## Drawer

导航抽屉用于组织对应用程序的目标和其他功能的访问。

## 使用

```html
<m-drawer
  frame
  modal
  heading='Omim'
  sub-heading='drawer-demo-dismissible'
  onClosed
  onList2
  onList3
  onList4
  lists="[
    {
      divider: true
    }, {
      subheader: 'Official sample'
    }, {
      text: 'Permanent',
      icon: {
        path: 'M913.9 552.2L805 181.4v-.1c-7.6-22.9-25.7-36.5-48.3-36.5-23.4 0-42.5 13.5-49.7 35.2l-71.4 213H388.8l-71.4-213c-7.2-21.7-26.3-35.2-49.7-35.2-23.1 0-42.5 14.8-48.4 36.6L110.5 552.2c-4.4 14.7 1.2 31.4 13.5 40.7l368.5 276.4c2.6 3.6 6.2 6.3 10.4 7.8l8.6 6.4 8.5-6.4c4.9-1.7 9-4.7 11.9-8.9l368.4-275.4c12.4-9.2 18-25.9 13.6-40.6zM751.7 193.4c1-1.8 2.9-1.9 3.5-1.9 1.1 0 2.5.3 3.4 3L818 394.3H684.5l67.2-200.9zm-487.4 1c.9-2.6 2.3-2.9 3.4-2.9 2.7 0 2.9.1 3.4 1.7l67.3 201.2H206.5l57.8-200zM158.8 558.7l28.2-97.3 202.4 270.2-230.6-172.9zm73.9-116.4h122.1l90.8 284.3-212.9-284.3zM512.9 776L405.7 442.3H620L512.9 776zm157.9-333.7h119.5L580 723.1l90.8-280.8zm-40.7 293.9l207.3-276.7 29.5 99.2-236.8 177.5z'
      },
      href: '#/Permanent'
    }, {
      text: 'Dismissible',
      icon: {
        path: 'M120.1 770.6L443 823.2V543.8H120.1v226.8zm63.4-163.5h196.2v141.6l-196.2-31.9V607.1zm340.3 226.5l382 62.2v-352h-382v289.8zm63.4-226.5h255.3v214.4l-255.3-41.6V607.1zm-63.4-415.7v288.8h382V128.1l-382 63.3zm318.7 225.5H587.3V245l255.3-42.3v214.2zm-722.4 63.3H443V201.9l-322.9 53.5v224.8zM183.5 309l196.2-32.5v140.4H183.5V309z'
      },
      href: '#/Dismissible'
    }
  ]"
>
  <div slot='m-drawer-header'></div>
  <div slot='m-drawer-content'></div>
</m-drawer>
```

## Omi 中使用

JSX:

```jsx
<m-drawer
  frame
  modal
  show={this.showDrawer}
  heading='Omim'
  sub-heading='drawer-demo-modal'
  onClosed={this.onDrawerClosed}
  onList2={this.onListPermanent}
  onList3={this.onListDismissible}
  onList4={this.onListModal}
  onList7={this.onListZainDemo1}
  onList8={this.onListZainDemo2}
  onList9={this.onListZainDemo3}
  onList10={this.onListZainDemo4}
  onList13={this.onListDemoAll}
  onList16={this.onListAlone}
  lists={[
    {
      divider: true
    }, {
      subheader: 'Official sample'
    }, {
      text: 'Permanent',
      icon: {
        path: 'M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z',
      },
      href: '#/Permanent'
    }, {
      focus: true,
      text: 'Dismissible',
      icon: {
        path: 'M879.5 470.4c-.3-27-.4-54.2-.5-81.3h-80.8c-.3 27-.5 54.1-.7 81.3-27.2.1-54.2.3-81.2.6v80.9c27 .3 54.2.5 81.2.8.3 27 .3 54.1.5 81.1h80.9c.1-27 .3-54.1.5-81.3 27.2-.3 54.2-.4 81.2-.7v-80.9c-26.9-.2-54.1-.2-81.1-.5zm-530 .4c-.1 32.3 0 64.7.1 97 54.2 1.8 108.5 1 162.7 1.8-23.9 120.3-187.4 159.3-273.9 80.7-89-68.9-84.8-220 7.7-284 64.7-51.6 156.6-38.9 221.3 5.8 25.4-23.5 49.2-48.7 72.1-74.7-53.8-42.9-119.8-73.5-190-70.3-146.6-4.9-281.3 123.5-283.7 270.2-9.4 119.9 69.4 237.4 180.6 279.8 110.8 42.7 252.9 13.6 323.7-86 46.7-62.9 56.8-143.9 51.3-220-90.7-.7-181.3-.6-271.9-.3z',
      },
      href: '#/Dismissible'
    }
  ]}
>
  <div slot='m-drawer-header'></div>
  <div slot='m-drawer-content'></div>
</m-drawer>
```

## API

### Props

|  **Name**  | **Type**        | **Defaults**  | **Details**  |
| ------------- |:-------------:|:-----:|:-------------:|
| frame | boolean | -- | 是否使用 m-drawer 默认框架（配合`<div slot='m-drawer-header'></div><div slot='m-drawer-content'></div>`使用） |
| dismissible | boolean | -- | 是否可自由拉出或关闭，无黑色透明 div 覆盖窗口 |
| dismissibleSmooth | boolean | -- | 使 dismissible 动画更平滑 |
| modal | boolean | -- | 是否可自由拉出或关闭，有黑色透明 div 覆盖窗口 |
| show | boolean | -- | 是否显示 drawer |
| heading | string | -- | 主标题内容 |
| subHeading | string | -- | 附标题内容 |
| lists | object | -- | 列表内容 |
| onOpened | function | -- | drawer 打开完成后触发 |
| onClosed | function | -- | drawer 关闭完成后触发 |
| onList(0-N) | function | -- | 所有列表的单击触发事件，尾加编号对应列表对象数量 |
