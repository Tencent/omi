import { tag, WeElement, h, extractClass } from 'omi'
import * as css from './index.scss'
import '../list'
//@ts-ignore
import '../theme.ts'

interface Props {
  left: object[],
  right: object[]
}

@tag('m-transfer-list')
export default class TransferList extends WeElement<Props>{
  static css = css

  static propTypes = {
    left: Array,
    right: Array
  }

  leftToRight = () => {
    this.props.right = [...this.props.right, ...this.props.left]
    this.props.left.length = 0
    this._checkLeftDisabled()
    this._checkRightDisabled()
    this.update(true)
    this.fire('change', { left: this.props.left, right: this.props.right })
  }

  rightToLeft = () => {
    this.props.left = [...this.props.left, ...this.props.right]
    this.props.right.length = 0

    this._checkLeftDisabled()
    this._checkRightDisabled()
    this.update(true)
    this.fire('change', { left: this.props.left, right: this.props.right })
  }

  sltLeftToRight = () => {
    //@ts-ignore
    const temp = this.props.left.filter(item => !item.checked)
    this.props.left.forEach(item => {
      //@ts-ignore
      item.checked && this.props.right.push(item)
      //@ts-ignore
      item.checked = false
    })

    this.props.left = temp
    this._checkLeftDisabled()
    this._checkRightDisabled()
    this.update(true)
    this.fire('change', { left: this.props.left, right: this.props.right })
  }

  sltRightToRight = () => {
    //@ts-ignore
    const temp = this.props.right.filter(item => !item.checked)
    this.props.right.forEach(item => {
      //@ts-ignore
      item.checked && this.props.left.push(item)
      //@ts-ignore
      item.checked = false
    })

    this.props.right = temp
    this._checkLeftDisabled()
    this._checkRightDisabled()
    this.update(true)
    this.fire('change', { left: this.props.left, right: this.props.right })
  }

  _rightBtnDiabled = true
  _leftBtnDiabled = true
  _rightAllBtnDiabled = true
  _leftAllBtnDiabled = true

  install() {
    this._checkLeftDisabled()
    this._checkRightDisabled()
  }

  onLeftItemClick = (evt) => {
    evt.detail.item.checked = !evt.detail.item.checked
    this._checkLeftDisabled()
    this.update(true)
  }

  _checkLeftDisabled() {
    const len = this.props.left.length
    if (len === 0) {
      this._rightBtnDiabled = true
      this._rightAllBtnDiabled = true
      return
    } else {
      this._rightAllBtnDiabled = false
    }
    for (let i = 0; i < len; i++) {
      //@ts-ignore
      if (this.props.left[i].checked) {
        this._rightBtnDiabled = false
        return
      }
    }
    this._rightBtnDiabled = true
  }


  _checkRightDisabled() {
    const len = this.props.right.length
    if (len === 0) {
      this._leftBtnDiabled = true
      this._leftAllBtnDiabled = true
      return
    } else {
      this._leftAllBtnDiabled = false
    }
    for (let i = 0; i < len; i++) {
      //@ts-ignore
      if (this.props.right[i].checked) {
        this._leftBtnDiabled = false
        return
      }
    }
    this._leftBtnDiabled = true

  }

  onRightItemClick = (evt) => {
    evt.detail.item.checked = !evt.detail.item.checked
    this._checkRightDisabled()
    this.update(true)
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
        min-width:190px;
        border-radius: ${document.body.style.getPropertyValue('--mdc-shape-medium-component-radius') || '4px'};
      }`}
          {...(props.width ? { wdith: props.width } : {})}
          height={props.height || 195}
          items={props.left}
          onItemClick={this.onLeftItemClick}
        ></m-list>

        <div class='btns'>
          <button disabled={this._rightAllBtnDiabled} onClick={this.leftToRight}>≫</button>
          <button disabled={this._rightBtnDiabled} onClick={this.sltLeftToRight}>></button>
          <button disabled={this._leftBtnDiabled} onClick={this.sltRightToRight}>{'<'}</button>
          <button disabled={this._leftAllBtnDiabled} onClick={this.rightToLeft}>≪</button>
        </div>

        <m-list
          checkbox
          checkboxLeft
          css={`ul{
        border: 1px solid rgba(0,0,0,.1);
        min-width:190px;
        border-radius: ${document.body.style.getPropertyValue('--mdc-shape-medium-component-radius') || '4px'};
      }`}
          {...(props.width ? { wdith: props.width } : {})}
          height={props.height || 195}
          items={props.right}
          onItemClick={this.onRightItemClick}
        ></m-list>

      </div>
    )
  }
}
