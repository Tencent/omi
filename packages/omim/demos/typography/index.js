import css from '../../src/typography/index.tsx'
import { define, render, h, WeElement } from 'omi'

define('my-app', class extends WeElement {
  static css = css

  render() {
    return <div>
      <h1 class="mdc-typography--headline1">Headline 1</h1>
      <h2 class="mdc-typography--headline2">Headline 2</h2>
      <h3 class="mdc-typography--headline3">Headline 3</h3>
      <h4 class="mdc-typography--headline4">Headline 4</h4>
      <h5 class="mdc-typography--headline5">Headline 5</h5>
      <h6 class="mdc-typography--headline6">Headline 6</h6>
      <h6 class="mdc-typography--subtitle1">Subtitle 1</h6>
      <h6 class="mdc-typography--subtitle2">Subtitle 2</h6>
      <p class="mdc-typography--body1">Body 1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.</p>
      <p class="mdc-typography--body2">Body 2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate aliquid ad quas sunt voluptatum officia dolorum cumque, possimus nihil molestias sapiente necessitatibus dolor saepe inventore, soluta id accusantium voluptas beatae.</p>
      <div>
        <span class="mdc-typography--button">Button text</span>
      </div>
      <div><span class="mdc-typography--caption">Caption text</span>
      </div>
      <div><span class="mdc-typography--overline">Overline text</span></div>
    </div>
  }
})

render(<my-app />, 'body')

