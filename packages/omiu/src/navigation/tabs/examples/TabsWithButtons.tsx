import { tag, Component } from 'omi'
import { tailwind } from '@/tailwind'

@tag('tabs-with-buttons')
export default class TabsWithButtons extends Component {
  static css = [tailwind]

  state = {
    active: 'tab1',
  }

  handleButtonClick = (active: string) => {
    this.state.active = active
    this.update()
  }

  render() {
    return (
      <div className="mb-3">
        <o-tabs pills>
          <o-tabs-item
            onClick={() => this.handleButtonClick('tab1')}
            active={this.state.active === 'tab1'}
            tag="button"
          >
            Home
          </o-tabs-item>
          <o-tabs-item
            onClick={() => this.handleButtonClick('tab2')}
            active={this.state.active === 'tab2'}
            tag="button"
          >
            Profile
          </o-tabs-item>
          <o-tabs-item
            onClick={() => this.handleButtonClick('tab3')}
            active={this.state.active === 'tab3'}
            tag="button"
          >
            Messages
          </o-tabs-item>
        </o-tabs>

        <div>
          {this.state.active === 'tab1' && <div>Tab 1 content</div>}
          {this.state.active === 'tab2' && <div>Tab 2 content</div>}
          {this.state.active === 'tab3' && <div>Tab 3 content</div>}
        </div>
      </div>
    )
  }
}
