import { tag, Component, bind } from 'omi'
import '../../button/button'
import '../collapse'
import { tailwind } from '@/tailwind'

@tag('collapse-multiple-targets')
export class CollapseMultipleTargets extends Component {
  static css = [tailwind]

  showFirstElement = false
  showSecondElement = false

  @bind
  toggleFirstElement() {
    this.showFirstElement = !this.showFirstElement
    this.update()
  }

  @bind
  toggleSecondElement() {
    this.showSecondElement = !this.showSecondElement
    this.update()
  }

  @bind
  toggleBothElements() {
    this.showFirstElement = !this.showFirstElement
    this.showSecondElement = !this.showSecondElement
    this.update()
  }

  render() {
    return (
      <div className="px-3 h-[460px] sm:h-[350px] md:h-[250px]">
        <div className="mb-4 flex items-center justify-center space-y-1 md:space-x-1 md:space-y-0">
          <o-button onClick={this.toggleFirstElement}>Toggle first element</o-button>
          <o-button onClick={this.toggleSecondElement}>Toggle second element</o-button>
          <o-button onClick={this.toggleBothElements}>Toggle both elements</o-button>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <o-collapse show={this.showFirstElement}>
              <div className="block rounded-lg bg-white p-6 shadow-lg dark:bg-neutral-700 dark:text-neutral-50">
                Some placeholder content for the first collapse component of this multi-collapse example. This panel is
                hidden by default but revealed when the user activates the relevant trigger.
              </div>
            </o-collapse>
          </div>
          <div>
            <o-collapse show={this.showSecondElement}>
              <div className="block rounded-lg bg-white p-6 shadow-lg dark:bg-neutral-700 dark:text-neutral-50">
                Some placeholder content for the second collapse component of this multi-collapse example. This panel is
                hidden by default but revealed when the user activates the relevant trigger.
              </div>
            </o-collapse>
          </div>
        </div>
      </div>
    )
  }
}
