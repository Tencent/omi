
import actionSheet from '../../src/action-sheet/index.tsx'
import '../../src/button/index.tsx'
import { define, render, h, WeElement } from 'omi'

actionSheet({
  items: ['Option 1', 'Option 2'],
  onItemClick: (item) => {
    console.log(item)
  }
})

actionSheet({
  items: [{ label: 'Option 1' }, { label: 'Option 2' }],
  onItemClick: (item) => {
    console.log(item)
  }
})

actionSheet({
  items: [{ label: 'Option 1' }, { label: 'Option 2' }],
  onItemClick: (item) => {
    console.log(item)
  },
  ios: true,
  cancel: '取消'
})


// define('my-app', class extends WeElement {

//   data = {
//     iosShow: false,
//     androidShow: false,
//     menus: [{
//       label: 'Option 1'
//     }, {
//       label: 'Option 2'
//     }, {
//       label: 'Option 3'
//     }],
//     actions: [{
//         label: 'Cancel'
//     }]
//   }

//   onMenuClick = (evt)=>{
//     console.log(evt.detail)
//     this.hide()
//   }

//   onActionClick = (evt)=>{
//     console.log(evt.detail)
//     this.hide()
//   }

//   hide = () => {
//     Object.assign(this.data, {
//       auto_show: false,
//       iosShow: false,
//       androidShow: false,
//     })
//     this.update()
//   }

//   render() {
//     return (
//       <div>
//         <m-button type="default"
//           onClick={e => { this.data.iosShow = true; this.update(); }}
//         >
//           IOS ActionSheet</m-button>
//         <m-action-sheet
//           menus={this.data.menus}
//           onMenuClick={this.onMenuClick}
//           onActionClick={this.hide}
//           actions={this.data.actions}
//           show={this.data.iosShow}
//           type="ios"
//           onClose={e => { this.data.iosShow = false; this.update(); }}
//         />

//         <br />

//         <m-button type="default"
//           onClick={e => { this.data.androidShow = true; this.update(); }}>
//           Android ActionSheet
//         </m-button>
//         <m-action-sheet
//           menus={this.data.menus}
//           actions={this.data.actions}
//           onMenuClick={this.onMenuClick}
//           show={this.data.androidShow}
//           type="android"
//           onClose={e => { this.data.androidShow = false; this.update(); }}
//         />
//       </div>
//     );
//   }
// })

// render(<my-app />, 'body')

