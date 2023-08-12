import { OmiProps, WeElement, h, tag } from 'omi'

@tag('t-button-base')
export default class BaseCheckBox extends WeElement {

  render(props: any, store: any) {
    console.log(props)
    return (
      <>
        <h2>基础选项</h2>
        <label>
          <input type="checkbox" onChange={(e) => {
            const target = e.target as HTMLInputElement;
            props.rootEl.block = target.checked;
            props.rootEl.update()
          }} />block
        </label>
        <label>
          <input type="checkbox" onChange={(e) => {
            const target = e.target as HTMLInputElement;
            props.rootEl.loading = target.checked;
            props.rootEl.update()
          }} />loading
        </label>
        <label>
          <input type="checkbox" onChange={(e) => {
            const target = e.target as HTMLInputElement;
            props.rootEl.disabled = target.checked;
            props.rootEl.update()
          }} />disabled
        </label>
        <label>
          <input id="loading" type="checkbox" onChange={(e) => {
            const target = e.target as HTMLInputElement;
            props.rootEl.ghost = target.checked;
            props.rootEl.update()
          }} />ghost
        </label>
      </>
    )
  }

}