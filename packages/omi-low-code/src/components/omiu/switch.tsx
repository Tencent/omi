import { Component, classNames, tag } from 'omi'

type SwitchProps = {
  size?: 'small' | 'medium' | 'large'
  value?: boolean
  disabled?: boolean
}

@tag('o-switch')
export class Switch extends Component<SwitchProps> {
  static css = `
  :host {
    display: inline-flex;
  }
  `
  static defaultProps = {
    size: 'medium',
    value: false,
    disabled: false,
  }

  onChange = (e: Event) => {
    e.stopPropagation()
    this.fire('change', {
      value: (e.target as HTMLInputElement).checked,
    })
  }

  render() {
    return (
      <label
        class={classNames('inline-flex items-center', {
          'opacity-70 cursor-not-allowed': this.props.disabled,
          'cursor-pointer': !this.props.disabled,
        })}
      >
        <input
          type="checkbox"
          checked={this.props.value}
          onChange={this.onChange}
          class="sr-only peer"
          disabled={this.props.disabled}
        />
        <div
          class={classNames(
            `relative bg-zinc-200 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:bg-white after:border-zinc-300 after:border after:rounded-full after:transition-all  peer-checked:bg-primary dark:peer-checked:bg-primary dark:bg-zinc-500 dark:after:border-zinc-500`,
            {
              'w-14 h-7 after:h-5 after:w-5 peer-checked:after:h-6 peer-checked:after:w-6 peer-checked:after:top-0.5 after:top-1 after:start-[4px]':
                this.props.size === 'large',
              'w-11 h-6 peer-checked:after:h-5 peer-checked:after:w-5 after:h-4 peer-checked:after:top-[2px] after:w-4 after:top-[4px] peer-checked:after:start-[2px] after:start-[4px]':
                this.props.size === 'medium',
              'w-9 h-5 peer-checked:after:h-4 after:h-3.5 after:w-3.5 peer-checked:after:w-4 peer-checked:after:top-[2px] after:top-[3px] peer-checked:after:start-[2px] after:start-[4px]':
                this.props.size === 'small',
            },
          )}
        ></div>
      </label>
    )
  }
}
