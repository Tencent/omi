// @ts-nocheck
import { tag, Component, h } from 'omi'
import './tree'

@tag('omi-tree-demo')
export class OmiTreeDemo extends Component {
  data = [
    {
      id: 1,
      name: 'root',
      children: [
        { id: 2, name: 'child1', children: [] },
        { id: 3, name: 'child2', children: [] },
      ],
    },
  ]

  render() {
    return <omi-tree data={this.data}></omi-tree>
  }
}

export default OmiTreeDemo
