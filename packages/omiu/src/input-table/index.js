import { define, WeElement, extractClass } from 'omi'
import css from './_index.css'

define('o-input-table', class extends WeElement {
  css() {
    return css
  }

  onClick = index => {
    this.props.onChange(index)
  }

  render(props) {
    return (
      <div>
        <div class='row'>
          <div class='item'>
            <span class='span-left'>模块名</span>
            <o-input class='ipt ipt1'></o-input>
            <span class='span-center'>负责人</span>
            <o-input class='ipt ipt2'></o-input>

          </div>
          <o-button class='btn' size="small" type='default'>+</o-button>
        </div>

        <div class='row'>
          <div class='item'>
            <span class='span-left'>模块名</span>
            <o-input class='ipt ipt1'></o-input>
            <span class='span-center'>负责人</span>
            <o-input class='ipt ipt2'></o-input>

          </div>
          <o-button class='btn' size="small" type='default'>+</o-button>
        </div>

      </div>
    )
  }
})
