import { tag, signal, Component } from 'omi'
import css from './app.css?raw'
import './components/site-card'

const count = signal(0)

@tag('home-page')
export default class extends Component {
  static css = css

  render() {
    return (
      <>
        <h1 class="text-3xl pt-10">Omi + Signal + Suspense + Router + Tailwindcss + Vite + TypeScript</h1>
        <div class="card">
          <button onClick={() => (count.value += 1)}>count is {count.value}</button>
        </div>
        <site-card></site-card>
      </>
    )
  }
}
