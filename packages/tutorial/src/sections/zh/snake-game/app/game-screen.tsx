import { tag, WeElement, h } from 'omi'

@tag('game-screen')
export default class extends WeElement {

  static css = `
  .game {
    border: 1px solid #000;
    padding: 10px 0 5px 0;
    width: 362px;
    margin: 0 auto;
    background-color: #9ead86;
    text-align: center;
  }
  
  .game p {
    width: 362px;
    height: 22px;
    white-space: nowrap;
    margin: 0;
    padding: 0;
  }
  
  * {
    box-sizing: border-box;
  }
  
  .game b {
    display: inline-block;
    width: 20px;
    height: 20px;
    padding: 2px;
    border: 2px solid #879372;
    margin: 0 2px 2px 0;
  }
  
  .game b.s:after {
    background: #000;
  }
  
  .game b:after {
    content: "";
    display: block;
    width: 12px;
    height: 12px;
    background: #879372;
    overflow: hidden;
  }
  
  `

  store

  install() {
    this.store.ui.game = this
  }

  render() {

    return (
      <div class="game">
        {this.store.data.map.map(row => {
          return <p>
            {row.map(col => {
              if (col) {
                return <b class='s'></b>
              }
              return <b></b>
            })}
          </p>
        })}
      </div>
    )
  }
}

