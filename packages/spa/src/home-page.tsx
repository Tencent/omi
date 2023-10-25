import { tag, signal, Component } from 'omi'
import css from './app.css?raw'
import './my-component'

const count = signal(0)

@tag('home-page')
export default class extends Component {
  static css = css

  render() {
    return (
      <>
        <div>
   
          <a href="http://omijs.org" target="_blank">
            <img src="https://omi.cdn-go.cn/s/latest/omi.svg" class="logo omi" alt="Omi logo" />
          </a>
        </div>
        <h1>Omi + Omi-Router + Tailwindcss</h1>
        <div class="card">
          <button onClick={() => (count.value += 1)}>count is {count.value}</button>
        </div>
        <my-component></my-component>
      </>
    )
  }
}
