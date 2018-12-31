import { WeElement, define, render } from 'omi'
import '../../src/timeline'


define('my-app', class extends WeElement {


  render() {
    return (

      <o-timeline data={[
        { msgA: '2018.11.11', msgB: '15:22:09', msgC: 'create project', msgD: '[sub msg]' },
        { msgA: '2018.11.11', msgB: '15:22:09', msgC: 'delete readme', msgD: '[sub msg]' },
        { msgA: '2018.11.11', msgB: '15:22:09', msgC: 'update readme', msgD: '[sub msg]' },
        { msgA: '2018.11.11', msgB: '15:22:09', msgC: 'others', msgD: '[others]' }
      ]} />


    )
  }
})

render(<my-app />, 'body')
