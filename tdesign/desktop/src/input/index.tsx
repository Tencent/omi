import { h, OmiProps, tag, WeElement, render, classNames } from 'omi'
import { InputProps } from './types';
import styles from './sytle'
import { TdClassNamePefix } from '../../src/utils';

const InputClassNamePefix = (name: string) => TdClassNamePefix('input') + name;

@tag('t-input')
export default class Input extends WeElement<InputProps> {

  static css = styles;



  render(props: InputProps, store: any) {

    const { autofocus, disabled, readOnly, showClearIconOnEmpty, align, size, status, type, autoWidth } = props;
    const { placeholder, value, tips, autocomplete } = props;
    const { onChange } = props;

    const curStatus = status || 'default'

    return (
      <>
        <div>
          <div class={classNames(
            InputClassNamePefix('__wrap'),
            {
              [InputClassNamePefix('--auto-width')]: autoWidth
            }
          )}>
            <div class={
              classNames(
                't-input',
                TdClassNamePefix(`is-${curStatus}`),
                TdClassNamePefix(`align-${align}`),
                {
                  [TdClassNamePefix(`is-readonly`)]: readOnly,
                  [TdClassNamePefix(`is-disabled`)]: disabled,
                }
              )
            }
            >
              <input
                autocomplete={autocomplete}
                autofocus={autofocus}
                disabled={disabled}
                readonly={readOnly}
                placeholder={placeholder || '请输入'} type={type || 'text'}
                class={InputClassNamePefix('__inner')}
                onchange={(evt: any) => {
                  const target = evt.target;
                  (onChange as any)?.(target.value);
                }}
                value={value} />
            </div>
            <div class={
              classNames('t-input__tips', InputClassNamePefix(`__tips--${curStatus}`))
            }>
              {tips}
            </div>
          </div>
        </div >
      </>
    );
  }
}