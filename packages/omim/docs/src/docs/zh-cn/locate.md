## Locate

定位工具，比如可以把文本框和日期选择器联系起来，把按钮和菜单联系起来。 

## 使用

```jsx
<m-text-field rightIcon='today' id='myTextField' value={this.date} label='Date of birth' onIconClick={this.onIconClick} iconEvent={true} >
</m-text-field>
<m-locate to="#myTextField" direction='bottom-left' show={this.show}>
  <m-date-picker selected-date={this.date} onSelect={this.onSelect}></m-date-picker>
</m-locate>
```

## API

### Props

```jsx
{
  to: string     //需要关联定位的元素的选择器   
  //定位方向，支持 top-left,top,top-right,left,left-top,left-bottom,bottom-left,bottom,bottom-right,right,right-top,right-bottom
  direction: string  
  x: number //弹出层x偏移
  y: number //弹出层y偏移
  gutter: number //弹出层与目标的间隔
}
```

 