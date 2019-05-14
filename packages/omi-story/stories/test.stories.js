import { document, console } from 'global'
import { storiesOf } from '@storybook/html'
import '../elements/my-element'

storiesOf('Omi Element', module)

  .add('my-element', () => {
    const ele = document.createElement('my-element')
    return ele
  })
  .add('my-element event', () => {
    const ele = document.createElement('my-element')
    ele.addEventListener('click', e => console.log(e));
    return ele
  })


