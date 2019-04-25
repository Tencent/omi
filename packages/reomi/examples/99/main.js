import { define, render, WeElement } from '../../src/omi'

define('my-app', class extends WeElement {

  static css = `span{
    display: inline-block;
    width: 68px;
  }`

  render(props) {
    return (
      <div>
        {props.numbers.map((a, indexA) =>
          <div>
            {
              props.numbers.map((b, indexB) => {
                return indexA <= indexB && <span>{a}*{b}={a * b} </span>
              })
            }
          </div>
        )}
      </div>
    )
  }
})

render(<my-app numbers={[1, 2, 3, 4, 5, 6, 7, 8, 9]} />, 'body')
