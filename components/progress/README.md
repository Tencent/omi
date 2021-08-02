

## Import

```js
to be continue....
```

## Usage

```html
<o-progress></o-progress>
```

## API

### Props

```tsx
{
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
}
```

### defaultProps

```tsx
defaultProps = {
    type: 'line',
    percent: 30,
    status: undefined,
    strokeColor: undefined,
    trailColor: undefined,
    textColor: "black",
    strokeWidth: 20,
    width: 80,
  }

```
###Next,show the "o-progress"
The line progress:
![MBDIHQ2@SJ0C NZA1 ZZZM](https://user-images.githubusercontent.com/51355841/127813099-3ac75acf-5d92-479e-a2f1-49f748b4226f.png)
```html
      <div>We can set up a timer to achieve dynamic effects.</div>
        <o-progress percent={percent} status="success"></o-progress><hr></hr>
        <div>We can change the percentage by changing the "percent",the default percent is "30". </div>
        <o-progress></o-progress>
        <o-progress percent="40"></o-progress>
        <div>We can change the width by changing the "width",the default width is "300". </div>
        <o-progress percent="40"></o-progress>
        <o-progress percent="40" width={600}></o-progress>
        <div>We can change the height by changing the "strokeWidth",the default width is "8". </div>
        <o-progress percent="50" strokeWidth={8}></o-progress>
        <o-progress percent="50" strokeWidth={4}></o-progress>
        <o-progress percent="50" strokeWidth={16}></o-progress>
        <div>As you can see, instead of providing a fixed size, we choose to provide a custom width and height,
           and leave the decision to the user to achieve the desired effect.</div><hr></hr>
        <div>We can change the progress color by changing the "strokeColor". </div>
        <o-progress percent="60" strokeColor="lightseagreen"></o-progress>
        <div>We can change the progress trail color by changing the "trailColor". </div>
        <o-progress percent="60" trailColor="black"></o-progress>
        <div>We can change the progress text color by changing the "textColor". </div>
        <o-progress percent="60" textColor = "red"></o-progress><hr></hr>
        <div>We provide two status to achieve the default effect of success / error, and icons can be introduced using icons in "@omiu-icon" . </div>
        <o-progress percent="70" status="error"></o-progress>
        <o-progress percent="80" status="error" strokeWidth={4}></o-progress>
        <o-progress percent="90" status="error" strokeWidth={16}></o-progress>
        <o-progress percent = "100" status="success"></o-progress><hr></hr>
```
###The line progress:

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
