import { tag, WeElement, classNames, h } from 'omi'
import * as css from './index.scss'


interface Props {
  items: any[]
}


@tag('o-select')
export default class Select extends WeElement<Props> {
  static css = css

  static defaultProps = {

  }

  static propTypes = {
    items: Array
  }

  installed() {
    const width = this.rootNode.getBoundingClientRect().width

    const dropdown = this.rootNode.querySelector('.o-select-dropdown')

    dropdown.style.minWidth = width + 'px'
  }

  updated() {
    const width = this.rootNode.getBoundingClientRect().width

    const dropdown = this.rootNode.querySelector('.o-select-dropdown')

    dropdown.style.minWidth = width + 'px'
  }

  render(props) {

    return (
      <div class="o-select">
        <div class="o-input o-input--suffix is-focus">
          <input type="text" readonly="readonly" autocomplete="off" placeholder="请选择" class="o-input__inner" />
          <span class="o-input__suffix">
            <span class="o-input__suffix-inner">
              <i class="o-select__caret o-input__icon o-icon-arrow-up is-reverse"></i>
            </span>
          </span>
        </div>

        <div class="o-select-dropdown o-popper" style="min-width: 240px; transform-origin: center top; z-index: 2080; position: absolute; top: 35px; left: 0;" x-placement="bottom-start">
          <div class="o-scrollbar" style="">
            <div class="o-select-dropdown__wrap o-scrollbar__wrap o-scrollbar__wrap--hidden-default">
              <ul class="o-scrollbar__view o-select-dropdown__list">
                {props.items.map(item => {
                  //hover
                  return <li class="o-select-dropdown__item"><span>{item.label}</span></li>
                })}
              </ul></div><div class="o-scrollbar__bar is-horizontal">
              <div class="o-scrollbar__thumb" style="transform: translateX(0%);">
              </div>
            </div><div class="o-scrollbar__bar is-vertical">
              <div class="o-scrollbar__thumb" style="transform: translateY(0%);">
              </div>
            </div>
          </div>
          <div x-arrow="" class="popper__arrow" style="left: 35px;">

          </div>
        </div>
      </div>
    )
  }
}
