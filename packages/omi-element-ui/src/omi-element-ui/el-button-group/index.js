import { tag, WeElement } from 'omi'

@tag('el-button-group', true)
class ElButtonGroup extends WeElement {
  render() {
    return (
      <div class="el-button-group">
        <slot />
      </div>
    )
  }
}
