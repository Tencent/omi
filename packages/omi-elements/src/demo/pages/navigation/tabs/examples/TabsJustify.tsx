import { tag, Component, bind } from 'omi'
import { Collapse, Ripple, Modal, Input } from 'omi-elements'
import { tailwind } from '@/tailwind'

@tag('tabs-justify')
export default class TabsJustify extends Component {
  static css = [tailwind]

  state = {
    active: 'tab1',
  }

  handleJustifyClick = (active: string) => {
    this.state.active = active
    this.update()
  }

  render() {
    return (
      <div className="mb-3">
        <o-tabs justify>
          <o-tabs-item onClick={() => this.handleJustifyClick('tab1')} active={this.state.active === 'tab1'}>
            Home
          </o-tabs-item>
          <o-tabs-item onClick={() => this.handleJustifyClick('tab2')} active={this.state.active === 'tab2'}>
            Profile
          </o-tabs-item>
          <o-tabs-item onClick={() => this.handleJustifyClick('tab3')} active={this.state.active === 'tab3'}>
            Messages
          </o-tabs-item>
          <o-tabs-item onClick={() => this.handleJustifyClick('tab4')} active={this.state.active === 'tab4'} disabled>
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
