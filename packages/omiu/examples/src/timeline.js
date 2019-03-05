import { WeElement, define, render } from 'omi'
import '../../src/path-progress'
import '../../src/icon'

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
        <o-icon paths={[{
          color: '#F98080',
          path: 'M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z'
        }, {
          color: '#F95050',
          path: 'M464 688a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm24-112h48c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8z'
        }]}></o-icon>
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
