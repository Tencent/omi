import { tag, Component, bind } from 'omi'
import { tailwind } from '@/tailwind'
import '../../button/index'
import '../collapse'

@tag('collapse-basic-example')
export class CollapseBasicExample extends Component {
  static css = [tailwind]

  @bind
  toggleShow() {
    this.show = !this.show
    this.update()
  }

  show = false

  render() {
    return (
      <div className="px-3 h-[200px] sm:h-[160px]">
        <o-button rippleColor="light" onClick={this.toggleShow} class="mb-4">
          Button
        </o-button>

        <o-collapse show={this.show}>
          <div className="block rounded-lg bg-white p-6 shadow-lg dark:bg-neutral-700 dark:text-neutral-50">
            Some placeholder content for the collapse component. This panel is hidden by default but revealed when the
            user activates the relevant trigger.
          </div>
        </o-collapse>
      </div>
    )
  }
}
