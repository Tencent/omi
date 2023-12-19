import { tag, Component } from 'omi'
import { tailwind } from '@/tailwind'

@tag('tabs-fill')
export default class TabsFill extends Component {
  static css = [tailwind]

  state = {
    active: 'tab1',
  }

  handleFillClick = (active: string) => {
    this.state.active = active
    this.update()
  }

  render() {
    return (
      <div className="mb-3">
        <o-tabs fill>
          <o-tabs-item onClick={() => this.handleFillClick('tab1')} active={this.state.active === 'tab1'}>
            Home
          </o-tabs-item>
          <o-tabs-item onClick={() => this.handleFillClick('tab2')} active={this.state.active === 'tab2'}>
            Profile
          </o-tabs-item>
          <o-tabs-item onClick={() => this.handleFillClick('tab3')} active={this.state.active === 'tab3'}>
            Messages
          </o-tabs-item>
          <o-tabs-item onClick={() => this.handleFillClick('tab4')} active={this.state.active === 'tab4'} disabled>
            Contact
          </o-tabs-item>
        </o-tabs>

        <div>
          {this.state.active === 'tab1' && <div>Tab 1 content</div>}
          {this.state.active === 'tab2' && <div>Tab 2 content</div>}
          {this.state.active === 'tab3' && <div>Tab 3 content</div>}
          {this.state.active === 'tab4' && <div>Tab 4 content</div>}
        </div>
      </div>
    )
  }
}
