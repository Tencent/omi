import { tag, h, WeElement, OverwriteProps } from 'omi'
import '../../icon/esm/cancel'
import '../../icon/esm/check-circle-outline'
import '../../icon/esm/check'
import * as css from './index.scss'

export type Attrs = {
  title?: string,
  description?: string,
  active?: number,
  isFinish?: boolean,
  isProcess?: boolean,
  lineIsFinsh?: boolean,
}

const tagName = 'o-step'
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName]: Omi.Props & Attrs
    }
  }
}


export type Props = OverwriteProps<Attrs, { title: string, active?: number, description?: string, isFinish?: boolean, isProcess?: boolean, lineIsFinsh?: boolean, }>

@tag(tagName)
export default class Step extends WeElement<Props> {

  static css = css.default ? css.default : css

  static defaultProps = {
    title: '',
    description: '',
    isFinish: false,
    isProcess: false,
    lineIsFinsh: false,
  }

  static propTypes = {
    title: String,
    description: String,
    isFinish: Boolean,
    isProcess: Boolean,
    lineIsFinsh: Boolean,
  }

  inject = ['active']

  beforeRender = () => {
    let  findSibling = ( tag: any ) => {
      let  parentEl = tag.parentNode ;
      let  childs = parentEl.children ;
      for( let i = 0; i <= childs.length - 1 ; i++ ){
          if( childs[i] === tag  ){
              return i
          }
       }
    };
    if((findSibling(this) - 1) === this.injection.active) {
      this.props.lineIsFinsh = true
    }

    if(findSibling(this) < this.injection.active) {
      this.props.isFinish = true
    } else if (findSibling(this) === this.injection.active) {
      this.props.isProcess = true
    }
  }

  // 当前状态下标
  currentStatus = () => {
    if (this.props.isFinish) return ['is-success'].join(' ')
    if (this.props.isProcess) return ['is-process'].join(' ')
    return ['is-wait'].join(' ')
  }

  lineStatus = () => {
    if (this.props.lineIsFinsh) return ['line-success'].join(' ')
    if (this.props.isFinish) return ['line-process'].join(' ')
    return ['line-wait'].join(' ')
  }

  render(props: Props) {
    return (
      <h.f>
        <div class={'o-step ' + this.currentStatus()}>
          <div class={"o-step__head " + this.currentStatus()}>
            <div class={'o-step__line ' + this.lineStatus()}>
              <i className='o-step__line-inner'></i>
            </div>
            <div class='o-step__icon is-text'>
              <o-icon-check></o-icon-check>
            </div>
          </div>
          <div class="o-step__main">
            <div class="o-step__title">
              {props.title}
            </div>
            <div class="o-step__description">
              {props.description}
            </div>
          </div>
        </div>
      </h.f>
    )
  }
}

