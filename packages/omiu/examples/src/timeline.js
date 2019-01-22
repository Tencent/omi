import { WeElement, define, render } from 'omi'
import '../../src/path-progress'

//https://progressbarjs.readthedocs.io/en/latest/api/shape/
const options = {
  strokeWidth: 2,
  color: '#07C160',
  trailColor: '#ddd'
};

define('my-app', class extends WeElement {

  render() {
    return (
      <div>
        <o-path-progress
          type='Line' progress={0.5}
          text={'test'}
          options={options}
          initialAnimate={true}
          containerStyle={{
            width: '200px',
            height: '20px'
          }}
          containerClassName={'.progressbar'}
        ></o-path-progress>

        <br /><br /><br />

        <o-path-progress
          type='Circle' progress={0.5}
          text={'test'}
          options={options}
          initialAnimate={true}
          containerStyle={{
            width: '200px',
            height: '200px'
          }}
          containerClassName={'.progressbar'}
        ></o-path-progress>

        <br /><br /><br />

        <o-path-progress
          type='SemiCircle' progress={0.5}
          text={'test'}
          options={options}
          initialAnimate={true}
          containerStyle={{
            width: '200px',
            height: '100px'
          }}
          containerClassName={'.progressbar'}
        ></o-path-progress>

      </div>


    )
  }
})

render(<my-app />, 'body')
