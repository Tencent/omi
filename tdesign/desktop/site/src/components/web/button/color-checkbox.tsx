import { OmiProps, WeElement, h, tag } from 'omi'

@tag('t-button-color')
export default class BaseCheckBox extends WeElement {

  render(props: any, store: any) {
    return (
      <>
        <h2>按钮颜色</h2>

            <label>
              <input name='theme' type="radio" onChange={(e) => {
                const target = e.target as HTMLInputElement;
                if (target.checked) {
                  props.rootEl.theme = "default"
                }
                props.rootEl.update()
              }} /> default
            </label>

            <label>
              <input name='theme' type="radio" onChange={(e) => {
                const target = e.target as HTMLInputElement;
                if (target.checked) {
                  props.rootEl.theme = "primary"
                }
                props.rootEl.update()
              }} /> primary
            </label>

            <label>
              <input name='theme' type="radio" onChange={(e) => {
                const target = e.target as HTMLInputElement;
                if (target.checked) {
                  props.rootEl.theme = "danger"
                }
                props.rootEl.update()
              }} /> danger
            </label>

            <label>
              <input name='theme' type="radio" onChange={(e) => {
                const target = e.target as HTMLInputElement;
                if (target.checked) {
                  props.rootEl.theme = "warning"
                }
                props.rootEl.update()
              }} /> warning
            </label>

            <label>
              <input name='theme' type="radio" onChange={(e) => {
                const target = e.target as HTMLInputElement;
                if (target.checked) {
                  props.rootEl.theme = "success"
                }
                props.rootEl.update()
              }} /> success
            </label>
      </>
    )
  }

}