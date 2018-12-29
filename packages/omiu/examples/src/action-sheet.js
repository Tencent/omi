import { WeElement, define, render } from 'omi'
import '../../src/action-sheet'
import '../../src/button'

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
    }],
    actions: [
      {
        label: 'Cancel',
        onClick: this.hide.bind(this)
      }
    ]
  };

  hide() {
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
        <o-button type="default"
          onClick={e => { this.data.ios_show = true; this.update(); }}
        >
          IOS ActionSheet</o-button>
        <o-action-sheet
          menus={this.data.menus}
          actions={this.data.actions}
          show={this.data.ios_show}
          type="ios"
          onClose={e => { this.data.ios_show = false; this.update(); }}
        />

        <br />

        <o-button type="default"
          onClick={e => { this.data.android_show = true; this.update(); }}>
          Android ActionSheet
        </o-button>
        <o-action-sheet
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

render(<my-app />, '#root')
