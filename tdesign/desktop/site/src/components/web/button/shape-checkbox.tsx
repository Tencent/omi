import { OmiProps, WeElement, h, tag } from 'omi'

@tag('t-button-shape')
export default class BaseCheckBox extends WeElement {

  render(props: any, store: any) {
    return (
      <>
        <h2>不同形状按钮</h2>

        <label>
          <input name='shape' type="radio" onChange={(e) => {
            const target = e.target as HTMLInputElement;
            if (target.checked) {
              props.rootEl.shape = 'rectangle'
            }
            props.rootEl.update()
          }} /> 正常
        </label>

        <label>
          <input name='shape' type="radio" onChange={(e) => {
            const target = e.target as HTMLInputElement;
            if (target.checked) {
              props.rootEl.shape = 'square'
            }
            props.rootEl.update()
          }} /> 方形
        </label>

        <label>
          <input name='shape' type="radio" onChange={(e) => {
            const target = e.target as HTMLInputElement;
            if (target.checked) {
              props.rootEl.shape = 'round'
            }
            props.rootEl.update()
          }} /> 椭圆
        </label>

        <label>
          <input name='shape' type="radio" onChange={(e) => {
            const target = e.target as HTMLInputElement;
            if (target.checked) {
              props.rootEl.shape = 'circle'
            }
            props.rootEl.update()
          }} /> 圆形
        </label>

      </>
    )
  }

}