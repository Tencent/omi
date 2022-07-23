import { tag, WeElement, extractClass, classNames, h } from 'omi'
import * as css from './index.scss'

import '@omiu/icon/done'
import '@omiu/icon/clear'

const state = {
  DONE: 0,
  ERROR: 1,
  DOING: 2,
  TODO: 3
}


@tag('o-steps')
export default class Steps extends WeElement {
  static css = css.default

  static propTypes = {
    steps: Object,
    vertical: Boolean
  }

  render(props) {
    return (
      <div {...extractClass(props, 'o-steps', {
        'vertical': props.vertical
      })}>
        {props.steps.map((item, index) => {
          return <div class={classNames('_item', {
            '_item-finish': item.state === state.DONE,
            '_item-block': item.state === state.ERROR,
            '_item-process': item.state === state.DOING,
            '_item-wait': item.state === state.TODO,
            'next-error': props.steps[index + 1] && props.steps[index + 1].state === state.ERROR
          })}>
            <div class="_item-tail">
            </div>
            <div class="_item-icon">
              <span class="icon">
                {item.state === state.DONE && <i class="anticon anticon-check finish-icon">
                  <o-icon-done ></o-icon-done>
                </i>}

                {item.state === state.ERROR && <i class="anticon anticon-close error-icon">
                  <o-icon-clear></o-icon-clear>
                </i>}

                {(item.state === state.DOING || item.state === state.TODO) && <span class="icon">{index + 1}</span>}
              </span>
            </div>
            <div class="_item-content">
              <div class="_item-title">{item.name}</div>
              <div class="_item-description">{item.description}</div>
            </div>
          </div>

        })}

      </div>

    )
  }
}

