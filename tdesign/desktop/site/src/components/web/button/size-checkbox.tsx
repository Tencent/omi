import { OmiProps, WeElement, h, tag } from 'omi'

@tag('t-button-size')
export default class BaseCheckBox extends WeElement {

  render(props: any, store: any) {
    return (
      <>
        <h2>不同大小</h2>

        <label>
          <input name='size' type="radio" onChange={(e) => {
            const target = e.target as HTMLInputElement;
            if (target.checked) {
              props.rootEl.size = 'small'
            }
            props.rootEl.update()
          }} /> 小按钮
        </label>

        <label>
          <input name='size' type="radio" onChange={(e) => {
            const target = e.target as HTMLInputElement;
            if (target.checked) {
              props.rootEl.size = 'medium'
            }
            props.rootEl.update()
          }} /> 中按钮
        </label>

        <label>
          <input name='size' type="radio" onChange={(e) => {
            const target = e.target as HTMLInputElement;
            if (target.checked) {
              props.rootEl.size = 'large'
            }
            props.rootEl.update()
          }} /> 大按钮
        </label>

      </>
    )
  }

}



