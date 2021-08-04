

## Import

```js
to be continue....
```

## Usage

```html
<o-progress></o-progress>
```

# API
```tsx
  
  type: 'line' | 'circle';
  percent: number;
  status: 'success' | 'error';
  strokeColor: string;
  trailColor: string;
  textColor: string;
  strokeWidth:number;
  width:number;

```

### Props

```tsx
  {
  type?: 'line' | 'circle';
  percent?: number;
  status?: 'success' | 'error';
  strokeColor?: string;
  trailColor?: string;
  textColor?: string;
  strokeWidth:number;
  width:number;
}
```

### defaultProps

```tsx
     {
    type: 'line',
    percent: 0,
    status: undefined,
    strokeColor: undefined,
    trailColor: undefined,
    strokeWidth: undefined,
    width: undefined,
    textColor:undefined
  }

```
###
### Next,show the "o-progress"
### The line progress:
![MBDIHQ2@SJ0C NZA1 ZZZM](https://user-images.githubusercontent.com/51355841/127813099-3ac75acf-5d92-479e-a2f1-49f748b4226f.png)
```html
  <o-progress></o-progress>
  <o-progress percent="40"></o-progress>
  <div>We can change the width by changing the "width",the default width is "300". </div>
  <o-progress percent="40"></o-progress><br>
  <o-progress percent="40" width="600"></o-progress>
  <div>We can set up a timer and use <code>element.setPercent(percent)</code> to achieve dynamic effects.</div>
  
  <div>We can change the height by changing the "stroke-width",the default width is "8". </div>
  <o-progress percent="50" stroke-width="8"></o-progress>
  <o-progress percent="50" stroke-width="4"></o-progress>
  <o-progress percent="50" stroke-width="16"></o-progress>
  <div>As you can see, instead of providing a fixed size, we choose to provide a custom width and height,
     and leave the decision to the user to achieve the desired effect.</div><hr></hr>
  <div>We can change the progress color by changing the "stroke-color". </div>
  <o-progress percent="60" stroke-color="lightseagreen"></o-progress>
  <div>We can change the progress trail color by changing the "trail-color". </div>
  <o-progress percent="60" trail-color="black"></o-progress>
  <div>We can change the progress text color by changing the "text-color". </div>
  <o-progress percent="60" text-color = "red"></o-progress><hr></hr>
  <div>when it compeleted,it'll become success icon and success stroke-color,if you don't want it,set the status or the stroke-color to controll it</div>
  <div>We provide two status to achieve the default effect of success / error, and icons can be introduced using icons in "@omiu-icon" . </div>
  <o-progress percent="70" status="error"></o-progress>
  <o-progress percent="80" status="error" stroke-width="4"></o-progress>
  <o-progress percent="90" status="error" stroke-width="16"></o-progress>
  <o-progress percent = "100" status="success"></o-progress><hr></hr>
```
### The circle progress:

![K93{ZM2`S~%X~DC9B1M%YWW](https://user-images.githubusercontent.com/51355841/127813557-00501644-297f-4977-80ca-3445320a6c55.png)


```html
        <h2>If you want a "circle style" progress,just let the type is "circle". </h2>
        <o-progress type="circle"></o-progress>
        <div>You can cantorl your circle progress like "the line progress"!!!</div>
        <o-progress type="circle" percent={40} textColor="yellow"></o-progress>
        <o-progress type="circle" percent={50} strokeColor="lightseagreen" width={150}></o-progress>
        <o-progress type="circle" percent={60} strokeColor="lightseagreen"  trailColor="black" strokeWidth={16}></o-progress>
        <o-progress type="circle" precent={70} status="error"></o-progress>
        <o-progress type="circle" status="success"></o-progress>
        <o-progress type="circle" percent={percent}></o-progress>
```
