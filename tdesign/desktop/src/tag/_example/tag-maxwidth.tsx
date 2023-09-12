import { h, tag, WeElement } from 'omi'

import '../index'
import '../../input'


@tag('tag-maxwidth')
export default class TagMaxwidth extends WeElement {
  render() {
    return (
      <t-tag maxWidth={150}>默认超八个字超长文本标签超长省略文本标签</t-tag>
    )
  }
}
