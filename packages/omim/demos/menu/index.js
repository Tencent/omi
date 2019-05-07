import '../../src/menu/index.tsx'
import { render, h } from 'omi'

function onSelected(evt){
  console.log(evt)
}

render(
  <div>
    <m-menu onSelected={onSelected} list={[
      {text:'A Menu Item'},
      {text:'A Disabled Menu Item', disabled: true },
      {text:'Another Menu Item'}
    ]}>
    </m-menu>

  </div>
  , 'body')

