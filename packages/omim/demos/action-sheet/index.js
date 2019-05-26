
import '../../src/action-sheet/index.tsx'
import '../../src/button/index.tsx'
import { define, render, h, WeElement } from 'omi'

define('my-app', class extends WeElement {

  data = {
    ios_show: false,
    android_show: false,
    menus: [{
      label: 'Option 1',
      onClick: () => { }
    }, {
      label: 'Option 2',
      onClick: () => { }
    }, {
      label: 'Option 3',
      onClick: () => { }
    }, {
      label: 'Option 4',
      onClick: () => { }
    }],
    actions: [
      {
        label: 'Cancel',
        onClick: this.hide
      }
    ]
  };

  hide = () => {
    Object.assign(this.data, {
      auto_show: false,
      ios_show: false,
      android_show: false,
    })
    this.update()
  }

  render() {
    return (
      <div>
        <m-button type="default"
          onClick={e => { this.data.ios_show = true; this.update(); }}
        >
          IOS ActionSheet</m-button>
        <m-action-sheet
          menus={this.data.menus}
          actions={this.data.actions}
          show={this.data.ios_show}
          type="ios"
          onClose={e => { this.data.ios_show = false; this.update(); }}
        />

        <br />

        <m-button type="default"
          onClick={e => { this.data.android_show = true; this.update(); }}>
          Android ActionSheet
        </m-button>
        <m-action-sheet
          menus={this.data.menus}
          actions={this.data.actions}
          show={this.data.android_show}
          type="android"
          onClose={e => { this.data.android_show = false; this.update(); }}
        />
      </div>
    );
  }
})

render(<my-app />, 'body')

