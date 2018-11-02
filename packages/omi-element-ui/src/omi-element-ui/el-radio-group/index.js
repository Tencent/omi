import { tag, WeElement } from 'omi'

@tag('el-radio-group', true)
class ElRadioGroup extends WeElement {
  install() {
    this.data.value = this.props.value
  }

  render(props) {
    return (
      <div>
        <slot />
      </div>
    )
  }
}
