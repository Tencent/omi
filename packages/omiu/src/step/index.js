import { define, WeElement, extractClass, classNames } from 'omi'

const state = {
  DONE: 0,
  ERROR: 1,
  DOING: 2,
  TODO: 3
}

define('o-step', class extends WeElement {
  css = require('./_index.css')

  render(props) {
    return (
      <div {...extractClass(props, 'o-step _horizontal')}>
        {props.items.map((item, index) => {
          return <div class={classNames('_item', {
            '_item-finish': item.state === state.DONE,
            '_item-block': item.state === state.ERROR,
            '_item-process': item.state === state.DOING,
            '_item-wait': item.state === state.TODO,
            'next-error': props.items[index + 1] && props.items[index + 1].state === state.ERROR
          })}>
            <div class="_item-tail">
            </div>
            <div class="_item-icon">
              <span class="icon">
                {item.state === state.DONE && <i class="anticon anticon-check finish-icon">
                  <svg viewBox="64 64 896 896" class="" data-icon="check" width="1em" height="1em" fill="#07C160" aria-hidden="true">
                    <path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"></path>
                  </svg>
                </i>}

                {item.state === state.ERROR && <i class="anticon anticon-close error-icon">
                  <svg viewBox="64 64 896 896" class="" data-icon="close" width="1em" height="1em" fill="#F95050" aria-hidden="true">
                    <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z">
                    </path>
                  </svg>
                </i>}

                {(item.state === state.DOING || item.state === state.TODO) && <span class="icon">{index+1}</span>}
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
})


export default state
