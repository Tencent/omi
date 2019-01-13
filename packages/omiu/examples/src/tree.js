import { WeElement, define, render } from 'omi'
import '../../src/tree'


define('my-app', class extends WeElement {
  treeData = {
    name: 'Root',
    expand: true,
    id: 0,
    children: [

      {
        name: 'Test English',
        type: 'group',
        id: 3,
        children: [
          { id: 6, name: 'Csfsdf1', children: [] },
          { id: 9, name: 'C2dsfs', children: [] }
        ]
      },
      {
        name: '中文子',
        id: 1,
        expand: true,
        type: 'group',
        children: [
          { id: 4, name: '图片 1', type: 'img', children: [] },
          { id: 7, name: '文本 1', type: 'text', children: [] },
          { id: 10, name: '形状 1', type: 'shape', children: [] }
        ]
      },

      {
        name: '中文子',
        id: 2,
        type: 'group',
        children: [
          { id: 5, name: '中文子', children: [] },
          { id: 8, name: 'B2', children: [] }
        ]
      }
    ]
  }

  onNodeClick = (id, evt)=> {
    console.log(id, evt)
  }

  render() {
    return (

      <o-tree
        data={this.treeData}
        onNodeClick={this.onNodeClick} />


    )
  }
})

render(<my-app />, 'body')
