import { tag, h, WeElement, OverwriteProps } from 'omi'

import * as css from './index.scss'

export type Attrs = {
  initialValues: any,
  onCountChanged?: (evt: CustomEvent) => void
}

const tagName = 'o-form'
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName]: Omi.Props & Attrs
    }
  }
}


export type Props = OverwriteProps<Attrs, { count: number }>

@tag(tagName)
export default class Counter extends WeElement<Props> {

  static css = css.default ? css.default : css

  static defaultProps = {
    count: 1
  }

  static propTypes = {
    count: Number
  }

  minus = () => {
    this.updateProps({
      count: this.props.count - 1
    })
    this.fire('CountChanged', this.props.count)
  }

  plus = () => {
    this.updateProps({
      count: this.props.count + 1
    })
    this.fire('CountChanged', this.props.count)
  }

  render(props: Props) {
    return (

      <div>
        {this.props.children[0]({
          values: props.initialValues,
          errors: this.isInstalled ? props.validate(props.initialValues) : {},
          handleSubmit: (evt) => {
            console.log(evt)
            evt.preventDefault()
            this.update()
          },
          handleChange: (evt) => {

            console.error(evt)
            props.initialValues[evt.currentTarget.getAttribute('name')] = evt.currentTarget.value

          }
        })}
      </div>

    )
  }
}

