import { OmiProps, WeElement, h, tag } from 'omi'

@tag('t-button-variant')
export default class BaseCheckBox extends WeElement {

  render(props: any, store: any) {
    return (
      <>
        <h2>按钮风格</h2>

        <label>
          <input name='variant' type="radio" onChange={(e) => {
            const target = e.target as HTMLInputElement;
            if (target.checked) {
              props.rootEl.variant = 'base'
            }
            props.rootEl.update()
          }} /> 基本按钮
        </label>

        <label>
          <input name='variant' type="radio" onChange={(e) => {
            const target = e.target as HTMLInputElement;
            if (target.checked) {
              props.rootEl.variant = 'outline'
            }
            props.rootEl.update()
          }} /> 填充按钮

        </label>

        <label>
          <input name='variant' type="radio" onChange={(e) => {
            const target = e.target as HTMLInputElement;
            if (target.checked) {
              props.rootEl.variant = 'dashed'
            }
            props.rootEl.update()
          }} /> 虚线按钮

        </label>

        <label>
          <input name='variant' type="radio" onChange={(e) => {
            const target = e.target as HTMLInputElement;
            if (target.checked) {
              props.rootEl.variant = 'text'
            }
            props.rootEl.update()
          }} /> 文本按钮

        </label>
      </>
    )
  }

}



