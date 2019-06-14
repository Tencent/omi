import { tag, WeElement, h, extractClass } from 'omi'
import * as css from './index.scss'
import '../list'
//@ts-ignore
import '../theme.ts'

interface Props {
}

interface Data {

}

@tag('m-transfer-list')
export default class TransferList extends WeElement<Props, Data>{
  static css = css

  static propTypes = {
  }

  render(props) {
    return (
      <div {...extractClass(props,
        'm-m-transfer-list'
      )}>
        <m-list
          checkbox
          checkboxLeft
          css={`ul{
        border: 1px solid rgba(0,0,0,.1);
        border-radius: ${document.body.style.getPropertyValue('--mdc-shape-medium-component-radius') || '4px'};
      }`}
          {...(props.widht ? { wdith: props.width } : {})}
          height={props.height || 195}
          items={props.left}

        ></m-list>

        <div class='btns'>
          <button>≫</button>
          <button>></button>
          <button>{'<'}</button>
          <button>≪</button>
        </div>

        <m-list
          checkbox
          checkboxLeft
          css={`ul{
        border: 1px solid rgba(0,0,0,.1);
        border-radius: ${document.body.style.getPropertyValue('--mdc-shape-medium-component-radius') || '4px'};
      }`}
          {...(props.widht ? { wdith: props.width } : {})}
          height={props.height || 195}
          items={props.right}
        ></m-list>

      </div>
    )
  }
}
