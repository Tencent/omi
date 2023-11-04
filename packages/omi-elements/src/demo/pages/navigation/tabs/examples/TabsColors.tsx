import { tag, Component, bind } from 'omi'
import { Collapse, Ripple, Modal, Input } from 'omi-elements'
import { tailwind } from '@/tailwind'

@tag('tabs-colors')
export default class TabsColors extends Component {
  static css = [tailwind]

  state = {
    colorsActive: {
      tab1: 'tab1',
      tab2: 'tab1',
      tab3: 'tab1',
      tab4: 'tab1',
      tab5: 'tab1',
      tab6: 'tab1',
      tab7: 'tab1',
      tab8: 'tab1',
    },
  }

  handleColorsClick(colorsActive: {
    tab1: string
    tab2: string
    tab3: string
    tab4: string
    tab5: string
    tab6: string
    tab7: string
    tab8: string
  }) {
    this.state.colorsActive = colorsActive
    this.update()
  }

  render() {
    const { colorsActive } = this.state
    return (
      <div className="mb-3">
        {/* color primary */}
        <o-tabs>
          <o-tabs-item
            onClick={() => this.handleColorsClick({ ...colorsActive, tab1: 'tab1' })}
            active={colorsActive.tab1 === 'tab1'}
            color="primary"
          >
            Home
          </o-tabs-item>
          <o-tabs-item
            onClick={() => this.handleColorsClick({ ...colorsActive, tab1: 'tab2' })}
            active={colorsActive.tab1 === 'tab2'}
            color="primary"
          >
            Profile
          </o-tabs-item>
          <o-tabs-item
            onClick={() => this.handleColorsClick({ ...colorsActive, tab1: 'tab3' })}
            active={colorsActive.tab1 === 'tab3'}
            color="primary"
          >
            Messages
          </o-tabs-item>
        </o-tabs>
        <div>
          {colorsActive.tab1 === 'tab1' && <div>Tab 1 content</div>}
          {colorsActive.tab1 === 'tab2' && <div>Tab 2 content</div>}
          {colorsActive.tab1 === 'tab3' && <div>Tab 3 content</div>}
        </div>

        {/* color secondary */}
        <o-tabs>
          <o-tabs-item
            onClick={() => this.handleColorsClick({ ...colorsActive, tab2: 'tab1' })}
            active={colorsActive.tab2 === 'tab1'}
            color="secondary"
          >
            Home
          </o-tabs-item>
          <o-tabs-item
            onClick={() => this.handleColorsClick({ ...colorsActive, tab2: 'tab2' })}
            active={colorsActive.tab2 === 'tab2'}
            color="secondary"
          >
            Profile
          </o-tabs-item>
          <o-tabs-item
            onClick={() => this.handleColorsClick({ ...colorsActive, tab2: 'tab3' })}
            active={colorsActive.tab2 === 'tab3'}
            color="secondary"
          >
            Messages
          </o-tabs-item>
        </o-tabs>
        <div>
          {colorsActive.tab2 === 'tab1' && <div>Tab 1 content</div>}
          {colorsActive.tab2 === 'tab2' && <div>Tab 2 content</div>}
          {colorsActive.tab2 === 'tab3' && <div>Tab 3 content</div>}
        </div>

        {/* color success */}
        <o-tabs>
          <o-tabs-item
            onClick={() => this.handleColorsClick({ ...colorsActive, tab3: 'tab1' })}
            active={colorsActive.tab3 === 'tab1'}
            color="success"
          >
            Home
          </o-tabs-item>
          <o-tabs-item
            onClick={() => this.handleColorsClick({ ...colorsActive, tab3: 'tab2' })}
            active={colorsActive.tab3 === 'tab2'}
            color="success"
          >
            Profile
          </o-tabs-item>
          <o-tabs-item
            onClick={() => this.handleColorsClick({ ...colorsActive, tab3: 'tab3' })}
            active={colorsActive.tab3 === 'tab3'}
            color="success"
          >
            Messages
          </o-tabs-item>
        </o-tabs>
        <div>
          {colorsActive.tab3 === 'tab1' && <div>Tab 1 content</div>}
          {colorsActive.tab3 === 'tab2' && <div>Tab 2 content</div>}
          {colorsActive.tab3 === 'tab3' && <div>Tab 3 content</div>}
        </div>

        {/* color danger */}
        <o-tabs>
          <o-tabs-item
            onClick={() => this.handleColorsClick({ ...colorsActive, tab4: 'tab1' })}
            active={colorsActive.tab4 === 'tab1'}
            color="danger"
          >
            Home
          </o-tabs-item>
          <o-tabs-item
            onClick={() => this.handleColorsClick({ ...colorsActive, tab4: 'tab2' })}
            active={colorsActive.tab4 === 'tab2'}
            color="danger"
          >
            Profile
          </o-tabs-item>
          <o-tabs-item
            onClick={() => this.handleColorsClick({ ...colorsActive, tab4: 'tab3' })}
            active={colorsActive.tab4 === 'tab3'}
            color="danger"
          >
            Messages
          </o-tabs-item>
        </o-tabs>
        <div>
          {colorsActive.tab4 === 'tab1' && <div>Tab 1 content</div>}
          {colorsActive.tab4 === 'tab2' && <div>Tab 2 content</div>}
          {colorsActive.tab4 === 'tab3' && <div>Tab 3 content</div>}
        </div>

        {/* color warning */}
        <o-tabs>
          <o-tabs-item
            onClick={() => this.handleColorsClick({ ...colorsActive, tab5: 'tab1' })}
            active={colorsActive.tab5 === 'tab1'}
            color="warning"
          >
            Home
          </o-tabs-item>
          <o-tabs-item
            onClick={() => this.handleColorsClick({ ...colorsActive, tab5: 'tab2' })}
            active={colorsActive.tab5 === 'tab2'}
            color="warning"
          >
            Profile
          </o-tabs-item>
          <o-tabs-item
            onClick={() => this.handleColorsClick({ ...colorsActive, tab5: 'tab3' })}
            active={colorsActive.tab5 === 'tab3'}
            color="warning"
          >
            Messages
          </o-tabs-item>
        </o-tabs>
        <div>
          {colorsActive.tab5 === 'tab1' && <div>Tab 1 content</div>}
          {colorsActive.tab5 === 'tab2' && <div>Tab 2 content</div>}
          {colorsActive.tab5 === 'tab3' && <div>Tab 3 content</div>}
        </div>

        {/* color info */}
        <o-tabs>
          <o-tabs-item
            onClick={() => this.handleColorsClick({ ...colorsActive, tab6: 'tab1' })}
            active={colorsActive.tab6 === 'tab1'}
            color="info"
          >
            Home
          </o-tabs-item>
          <o-tabs-item
            onClick={() => this.handleColorsClick({ ...colorsActive, tab6: 'tab2' })}
            active={colorsActive.tab6 === 'tab2'}
            color="info"
          >
            Profile
          </o-tabs-item>
          <o-tabs-item
            onClick={() => this.handleColorsClick({ ...colorsActive, tab6: 'tab3' })}
            active={colorsActive.tab6 === 'tab3'}
            color="info"
          >
            Messages
          </o-tabs-item>
        </o-tabs>
        <div>
          {colorsActive.tab6 === 'tab1' && <div>Tab 1 content</div>}
          {colorsActive.tab6 === 'tab2' && <div>Tab 2 content</div>}
          {colorsActive.tab6 === 'tab3' && <div>Tab 3 content</div>}
        </div>

        {/* color light */}
        <o-tabs>
          <o-tabs-item
            onClick={() => this.handleColorsClick({ ...colorsActive, tab7: 'tab1' })}
            active={colorsActive.tab7 === 'tab1'}
            color="light"
          >
            Home
          </o-tabs-item>
          <o-tabs-item
            onClick={() => this.handleColorsClick({ ...colorsActive, tab7: 'tab2' })}
            active={colorsActive.tab7 === 'tab2'}
            color="light"
          >
            Profile
          </o-tabs-item>
          <o-tabs-item
            onClick={() => this.handleColorsClick({ ...colorsActive, tab7: 'tab3' })}
            active={colorsActive.tab7 === 'tab3'}
            color="light"
          >
            Messages
          </o-tabs-item>
        </o-tabs>
        <div>
          {colorsActive.tab7 === 'tab1' && <div>Tab 1 content</div>}
          {colorsActive.tab7 === 'tab2' && <div>Tab 2 content</div>}
          {colorsActive.tab7 === 'tab3' && <div>Tab 3 content</div>}
        </div>

        {/* color dark */}
        <o-tabs>
          <o-tabs-item
            onClick={() => this.handleColorsClick({ ...colorsActive, tab8: 'tab1' })}
            active={colorsActive.tab8 === 'tab1'}
            color="dark"
          >
            Home
          </o-tabs-item>
          <o-tabs-item
            onClick={() => this.handleColorsClick({ ...colorsActive, tab8: 'tab2' })}
            active={colorsActive.tab8 === 'tab2'}
            color="dark"
          >
            Profile
          </o-tabs-item>
          <o-tabs-item
            onClick={() => this.handleColorsClick({ ...colorsActive, tab8: 'tab3' })}
            active={colorsActive.tab8 === 'tab3'}
            color="dark"
          >
            Messages
          </o-tabs-item>
        </o-tabs>
        <div>
          {colorsActive.tab8 === 'tab1' && <div>Tab 1 content</div>}
          {colorsActive.tab8 === 'tab2' && <div>Tab 2 content</div>}
          {colorsActive.tab8 === 'tab3' && <div>Tab 3 content</div>}
        </div>
      </div>
    )
  }
}
