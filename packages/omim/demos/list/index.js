import { css } from '../../src/typography/index.tsx'
import '../../src/list/index.tsx'
import '../../src/switch/index.tsx'
import '../../src/icon-button/index.tsx'
import '../../src/checkbox/index.tsx'
import '../../src/radio/index.tsx'

import { define, WeElement, render, h } from 'omi'

define('my-app', class extends WeElement {

  static css = css

  css = `
    .mdc-list,.mdc-list-group {
        max-width: 600px;
        border: 1px solid rgba(0,0,0,.1);
    }
  `

  onChange = (e) => {
    if(e.detail.attributes) {
      console.log(e.detail.attributes)
    } else {
      console.log(e.detail)
    }
  }

  checkedA = false
  checkedB = true
  checkedC = false
  checkedD = true

  onChangeCheckbox = (e) => {
    console.log(e.detail.attributes)
    switch(e.detail.attributes.id) {
      case 'checked-a': this.checkedA = this.checkedA === true ? null : true; break;
      case 'checked-b': this.checkedB = this.checkedB === true ? null : true; break;
      case 'checked-c': this.checkedC = this.checkedC === true ? null : true; break;
      case 'checked-d': this.checkedD = this.checkedD === true ? null : true; break;
    }
    this.update()
  }

  radioA = true
  radioB = false
  radioC = true
  radioD = false

  onChangeRadio = (e) => {
    console.log(e.detail.attributes)
    switch(e.detail.attributes.id) {
      case 'radio-a': this.radioA = true; this.radioB = null; break;
      case 'radio-b': this.radioB = true; this.radioA = null; break;
      case 'radio-c': this.radioC = true; this.radioD = null; break;
      case 'radio-d': this.radioD = true; this.radioC = null; break;
    }
    this.update()
  }

  switchA = false
  switchB = true
  switchC = true
  switchD = false

  onChangeSwitch = (e) => {
    console.log(e.detail.attributes)
    switch(e.detail.attributes.id) {
      case 'switch-a': this.switchA = !this.switchA; break;
      case 'switch-b': this.switchB = !this.switchB; break;
      case 'switch-c': this.switchC = !this.switchC; break;
      case 'switch-d': this.switchD = !this.switchD; break;
    }
    this.update()
  }

  onChangeGroup = (e) => {
    console.log(e.detail.attributes)
  }

  render() {
    return <div>
      <h3 class="mdc-typography--subtitle1">Single-Line</h3>
      <m-list onChange={this.onChange} css={this.css}>
        <item>Line item</item>
        <item>Line item</item>
        <item>Line item</item>
      </m-list>

      <h3 class="mdc-typography--subtitle1">Two-Line</h3>
      <m-list onChange={this.onChange} css={this.css} twoLine>
        <item primaryText='Line item' secondaryText='Secondary text'></item>
        <item primaryText='Line item' secondaryText='Secondary text'></item>
        <item primaryText='Line item' secondaryText='Secondary text'></item>
      </m-list>

      <h3 class="mdc-typography--subtitle1">Leading Icon</h3>
      <m-list onChange={this.onChange} css={this.css}>
        <item graphic={<m-icon-button icons={['favorite', 'favorite_border']}></m-icon-button>}>Line item</item>
        <item graphic={<m-icon-button icons={['wifi', '3d_rotation']}></m-icon-button>}>Line item</item>
        <item graphic={<m-icon-button icons={['wb_cloudy', 'wb_sunny']}></m-icon-button>}>Line item</item>
      </m-list>

      <h3 class="mdc-typography--subtitle1">List with activated item</h3>
      <m-list onChange={this.onChange} css={this.css}>
        <item graphic={<m-icon-button icons={['bookmark_border', 'inbox']}></m-icon-button>}>Inbox</item>
        <item activated graphic={<m-icon-button icons={['check_circle_outline', 'star']}></m-icon-button>}>Star</item>
        <item graphic={<m-icon-button icons={['search', 'send']}></m-icon-button>}>Send</item>
        <item graphic={<m-icon-button icons={['settings', 'drafts']}></m-icon-button>}>Drafts</item>
      </m-list>

      <h3 class="mdc-typography--subtitle1">List with shaped activated item</h3>
      <m-list
        onChange={this.onChange}
        css={`
          .mdc-list,.mdc-list-group {
            max-width: 600px;
            border: 1px solid rgba(0,0,0,.1);
          }
          .mdc-list-item {
            border-radius: 0 32px 32px 0;
          }
        `}
      >
        <item graphic={<m-icon-button icons={['bookmark_border', 'inbox']}></m-icon-button>}>Inbox</item>
        <item activated graphic={<m-icon-button icons={['check_circle_outline', 'star']}></m-icon-button>}>Star</item>
        <item graphic={<m-icon-button icons={['search', 'send']}></m-icon-button>}>Send</item>
        <item graphic={<m-icon-button icons={['settings', 'drafts']}></m-icon-button>}>Drafts</item>
      </m-list>

      <h3 class="mdc-typography--subtitle1">Trailing Icon</h3>
      <m-list onChange={this.onChange} css={this.css}>
        <item text='Line item' meta={<m-icon-button icons={['settings', 'info']}></m-icon-button>}></item>
        <item text='Line item' meta={<m-icon-button icons={['settings', 'info']}></m-icon-button>}></item>
        <item text='Line item' meta={<m-icon-button icons={['settings', 'info']}></m-icon-button>}></item>
      </m-list>

      <h3 class="mdc-typography--subtitle1">Two-Line with Leading and Trailing Icon and Divider</h3>
      <m-list
        onChange={this.onChange}
        css={`
          .mdc-list,.mdc-list-group {
            max-width: 600px;
            border: 1px solid rgba(0,0,0,.1);
          }
          .mdc-list-item__graphic {
            margin-left: 0;
            margin-right: 16px;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background-color: rgba(0,0,0,.3);
            color: #fff;
          }
        `}
        twoLine
      >
        <item
          graphic={<m-icon-button icon='folder'></m-icon-button>}
          primaryText='Dog Photos'
          secondaryText='9 Jan 2018'
          meta={<m-icon-button icons={['settings', 'info']}></m-icon-button>}
        ></item>
        <item
          graphic={<m-icon-button icon='folder'></m-icon-button>}
          primaryText='Cat Photos'
          secondaryText='22 Dec 2017'
          meta={<m-icon-button icons={['settings', 'info']}></m-icon-button>}
        ></item>
        <item divider></item>
        <item
          graphic={<m-icon-button icon='folder'></m-icon-button>}
          primaryText='Potatoes'
          secondaryText='30 Noc 2017'
          meta={<m-icon-button icons={['settings', 'info']}></m-icon-button>}
        ></item>
        <item
          graphic={<m-icon-button icon='folder'></m-icon-button>}
          primaryText='Carrots'
          secondaryText='17 Oct 2017'
          meta={<m-icon-button icons={['settings', 'info']}></m-icon-button>}
        ></item>
      </m-list>

      <h3 class="mdc-typography--subtitle1">List with Trailing Checkbox</h3>
      <m-list onChange={this.onChangeCheckbox} css={this.css}>
        <item id='checked-a' text='Dog Photos' meta={<m-checkbox checked={this.checkedA}></m-checkbox>}></item>
        <item id='checked-b' text='Cat Photos' meta={<m-checkbox checked={this.checkedB}></m-checkbox>}></item>
        <item divider></item>
        <item id='checked-c' text='Potatoes' meta={<m-checkbox checked={this.checkedC}></m-checkbox>}></item>
        <item id='checked-d' text='Carrots' meta={<m-checkbox checked={this.checkedD}></m-checkbox>}></item>
      </m-list>

      <h3 class="mdc-typography--subtitle1">List with Trailing Radio Buttons</h3>
      <m-list onChange={this.onChangeRadio} css={this.css}>
        <item id='radio-a' text='Dog Photos' meta={<m-radio name="omi" checked={this.radioA}></m-radio>}></item>
        <item id='radio-b' text='Cat Photos' meta={<m-radio name="omi" checked={this.radioB}></m-radio>}></item>
        <item divider></item>
        <item id='radio-c' text='Potatoes' meta={<m-radio name="omim" checked={this.radioC}></m-radio>}></item>
        <item id='radio-d' text='Carrots' meta={<m-radio name="omim" checked={this.radioD}></m-radio>}></item>
      </m-list>

      <h3 class="mdc-typography--subtitle1">List with Trailing Switch</h3>
      <m-list onChange={this.onChangeSwitch} css={this.css} avatar>
        <item id='switch-a' text='Dog Photos' meta={<m-switch checked={this.switchA}></m-switch>}></item>
        <item id='switch-b' text='Cat Photos' meta={<m-switch checked={this.switchB}></m-switch>}></item>
        <item id='switch-c' text='Potatoes' meta={<m-switch checked={this.switchC}></m-switch>}></item>
        <item id='switch-d' text='Carrots' meta={<m-switch checked={this.switchD}></m-switch>}></item>
      </m-list>
      <h3 class="mdc-typography--subtitle1">List Groups</h3>
      <m-list
        group
        onChange={this.onChangeGroup}
        css={`
          .mdc-list,.mdc-list-group {
            max-width: 600px;
            border: 1px solid rgba(0,0,0,.1);
          }
          .mdc-list-group__subheader {
            background: #EEE;
            margin: 0;
            padding: 8px;
          }
        `}
      >
        <m-list subheader='group-0'>
          <item text='group-0-0'></item>
          <item text='group-0-1'></item>
          <item divider padded inset></item>
          <item text='group-0-2'></item>
          <item selected text='group-0-3'></item>
          <item text='group-0-4'></item>
        </m-list>
        <m-list subheader='group-1'>
          <item selected text='group-1-0'></item>
          <item text='group-1-1'></item>
        </m-list>
        <m-list subheader='group-2'>
          <item text='group-2-0'></item>
          <item selected text='group-2-1'></item>
          <item text='group-2-1'></item>
        </m-list>
      </m-list>

      <h3 class="mdc-typography--subtitle1">Other</h3>
      <m-list css={this.css} disabled>
        <item>Disabled-0</item>
        <item disabled>Disabled-1</item>
      </m-list>
      <br/>
      <m-list css={this.css} dense>
        <item>Dense-0</item>
        <item>Dense-1</item>
      </m-list>
      <br/>
      <m-list css={this.css} avatar>
        <item>Avatar-0</item>
        <item>Avatar-1</item>
      </m-list>
      <br/>
      <m-list css={this.css} twoLine>
        <item>Two Line-0</item>
        <item>Two Line-1</item>
      </m-list>
      <br/>
      <m-list css={this.css}>
        <item>Divider:</item>
        <item divider></item>
        <item>Divider+Padded:</item>
        <item divider padded></item>
        <item>Divider+Inset:</item>
        <item divider inset></item>
        <item>Divider+Padded+Inset:</item>
        <item divider padded inset></item>
        <item disabled>Disabled</item>
        <item selected>Selected</item>
        <item activated>Activated</item>
        <item graphic={<m-icon-button icon='folder'></m-icon-button>}>Graphic</item>
        <item text='Text'></item>
        <item primaryText='Primary Text' secondaryText='Secondary Text'></item>
        <item text='Meta' meta={<m-icon-button icon='folder'></m-icon-button>}></item>
      </m-list>
    </div>
  }
})
render(<my-app />, 'body')
