import '../../src/path-progress/index.tsx'
import { render, h } from 'omi'

const options = {
  strokeWidth: 2,
  color: '#0072d9',
  trailColor: '#ddd'
};


render(
  <div>
    <m-path-progress
      type='Line'
      progress={0.5}
      text={'test'}
      options={options}
      initialAnimate={true}
      containerStyle={{
        width: '200px',
        height: '20px'
      }}
    ></m-path-progress>

    <br /><br /><br />

    <m-path-progress
      type='Circle'
      progress={0.5}
      text={'test'}
      options={options}
      initialAnimate={true}
      containerStyle={{
        width: '200px',
        height: '200px'
      }}
    ></m-path-progress>

    <br /><br /><br />

    <m-path-progress
      type='SemiCircle'
      progress={0.5}
      text={'test'}
      options={options}
      initialAnimate={true}
      containerStyle={{
        width: '200px',
        height: '100px'
      }}
    ></m-path-progress>
  </div>
  , 'body')

