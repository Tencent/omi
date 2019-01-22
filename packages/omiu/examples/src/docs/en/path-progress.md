## PathProgress 

Progress by SVG.

## Usage

```js
<o-path-progress
  type='Circle' 
  progress={0.5}
  text={'test'}
  options={options}
  initialAnimate={true}
  containerStyle={{
    width: '200px',
    height: '200px'
  }}
  containerClassName={'.progressbar'}
></o-path-progress>
```

## API

### Props

|  **Name**  | **Type**        | **Defaults**  | **Details**  |
| ------------- |:-------------:|:-----:|:-------------:|
| type         | string|    -   |   支持 Circle,Line 和 SemiCircle     |
| progress         | number|    0   |             |
| text         | string|    -   |             |
| options         | json |       |             |
| initialAnimate         | bool|       |             |
| containerStyle         | json|       |             |
| containerClassName         | string|       |             |