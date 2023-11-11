import { tag, Component, bind } from 'omi'
// import css from '../app.css?raw'
import { tailwind } from '@/tailwind'

declare global {
  interface Window {
    toogleDark(): void
  }
}

@tag('site-api')
export default class extends Component {
  static css = [
    tailwind,
    `
  .logo:hover {
    filter: drop-shadow(0 0 2em #07c161a0);
  }
  `,
  ]

  state = {
    isDark: document.documentElement.classList.contains('dark'),
  }

  @bind
  toggleDark() {
    window.toogleDark()
    this.state.isDark = !this.state.isDark
    this.update()
  }

  render() {
    return <div></div>
  }
}
