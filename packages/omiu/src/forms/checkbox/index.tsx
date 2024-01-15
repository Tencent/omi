import { Component, tag, classNames } from 'omi'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/common/utils'
import { tailwind } from '@/tailwind'

export const checkboxVariants = cva(
  `relative float-left mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] cursor-pointer appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)]  dark:checked:border-primary dark:checked:bg-primary-foreground`,
  {
    variants: {
      indeterminate: {
        true: 'indeterminate:border-primary indeterminate:bg-primary indeterminate:after:absolute indeterminate:after:ml-[0.1rem] indeterminate:after:mt-[6px] indeterminate:after:w-[0.65rem] indeterminate:after:border-[0.08rem] indeterminate:after:border-solid indeterminate:after:border-white  dark:indeterminate:border-primary dark:indeterminate:bg-primary-foreground',
      },
      disabled: {
        true: 'disabled:opacity-60 !cursor-not-allowed',
      },
    },
    defaultVariants: {
      indeterminate: true,
    },
  },
)

export type CheckboxProps = VariantProps<typeof checkboxVariants> & {
  className?: string
  indeterminate?: boolean
  disabled?: boolean
  checked?: boolean
  // name?: string
  value?: string
  // required?: boolean
}

@tag('o-checkbox')
export class Checkbox extends Component<CheckboxProps> {
  static css = [
    tailwind,
    `:host {
    display: inline-flex;
  }`,
  ]

  onChange = (e: Event) => {
    this.fire('change', {
      nativeEvent: e,
      checked: this.input.checked,
      value: this.input.value,
    })
  }

  render() {
    const { className, indeterminate, disabled, checked, onChange, name, value, required, label, ...props } = this.props

    return (
      <>
        <input
          onChange={this.onChange}
          ref={(el) => {
            this.input = el
            this.input.indeterminate = indeterminate
          }}
          className={cn(checkboxVariants({ indeterminate, disabled, className }))}
          type="checkbox"
          checked={checked}
          disabled={disabled}
          value={value}
          id="checkbox"
        />
        {label && (
          <label
            class={classNames('inline-block pl-[0.15rem] cursor-pointer', {
              'opacity-50 cursor-not-allowed': disabled,
            })}
            for="checkbox"
          >
            {label}
          </label>
        )}
      </>
    )
  }
}
