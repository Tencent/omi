
window.OmimThemePrimary =  'red'
window.OmimThemeSecondary =  'blue'
window.OmimThemeError =  'yellow'

import Button from '../index.tsx'
import { render, h } from 'omis'

function clickHandler() {
  console.log(1)
}

render(
  <div>
    <h3>Text Button</h3>
    <Button onClick={clickHandler} ripple>Default</Button>
    <Button onClick={clickHandler} ripple Button="add">Dense</Button>
    <Button onClick={clickHandler} ripple dense>Dense</Button>

    <Button onClick={clickHandler} ripple icon="favorite">Button</Button>


    <h3>Raised Button</h3>
    <Button onClick={clickHandler} ripple raised>Default</Button>

    <Button onClick={clickHandler} ripple dense raised>Dense</Button>

    <Button onClick={clickHandler} ripple raised icon="favorite">Button</Button>


    <h3>Unelevated Button</h3>
    <Button onClick={clickHandler} ripple unelevated>Default</Button>

    <Button onClick={clickHandler} ripple dense unelevated>Dense</Button>

    <Button onClick={clickHandler} ripple unelevated icon="favorite">Button</Button>

    <h3>Outlined Button</h3>
    <Button onClick={clickHandler} ripple outlined>Default</Button>

    <Button onClick={clickHandler} ripple dense outlined>Dense</Button>

    <Button onClick={clickHandler} ripple outlined icon="favorite">Button</Button>


    <h3>Shaped Button</h3>
    <Button onClick={clickHandler} ripple unelevated css={`
      .mdc-button{ border-radius: 18px;}
    `}>Default</Button>

    <Button onClick={clickHandler} ripple dense unelevated css={`
      .mdc-button{ border-radius: 18px!important;}
    `}>Dense</Button>

    <Button onClick={clickHandler} ripple unelevated icon="favorite"css={`
        .mdc-button{ border-radius: 18px;}
     `}>Button</Button>


  </div>
  , 'body')

