import content from './api.md?raw'
import { tag, Component } from 'omi'
import '../../common/markdown-renderer'

@tag('tabs-api')
export class API extends Component {
  render() {
    return <markdown-renderer content={content}></markdown-renderer>
  }
}
