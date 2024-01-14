import { tag, Component, bind } from 'omi'
import '../../button/index'
import '../collapse'
import { tailwind } from '@/tailwind'

@tag('collapse-horizontal')
export class CollapseHorizontal extends Component {
  static css = [tailwind]

  @bind
  toggleShow() {
    this.show = !this.show
    this.update()
  }

  show = false

  render() {
    return (
      <div className="px-3 h-[180px]">
        <o-button onClick={this.toggleShow}>Button</o-button>
        <o-collapse horizontal className="max-w-[400px]" show={this.show}>
          <div className="block rounded-lg w-[400px] bg-white p-6 shadow-lg dark:bg-neutral-700 dark:text-neutral-50">
            This is some placeholder content for a horizontal collapse. It's hidden by default and shown when triggered.
          </div>
        </o-collapse>
      </div>
    )
  }
}
