## Locate

Location tools, such as linking text boxes to date selectors and buttons to menus. 

## Usage

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
  to: string     //A selector for elements requiring associated positioning   
  //Location direction, support top-left,top,top-right,left,left-top,left-bottom,bottom-left,bottom,bottom-right,right,right-top,right-bottom
  direction: string  
  x: number //X migration of Ejection Layer
  y: number //Y migration of Ejection Layer
  gutter: number //Interval between Ejection Layer and Target
}
```

 