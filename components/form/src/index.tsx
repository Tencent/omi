import { tag, h, WeElement, OverwriteProps, VNode } from 'omi'

export type Attrs = {
  initialValues: any,
  validate: (initialValues: any) => any
}

const tagName = 'o-form'
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName]: Omi.Props & Attrs
    }
  }
}

type RenderFun = (props: any) => VNode

export type Props = OverwriteProps<Attrs, { count: number, children: RenderFun[] }>

@tag(tagName)
export default class Counter extends WeElement<Props> {

  static propTypes = {
    initialValues: Object
  }

  render(props: Props) {
    return (

      <div>
        {this.props.children && this.props.children[0]({
          values: props.initialValues,
          errors: this.isInstalled ? props.validate(props.initialValues) : {},
          onSubmit: (evt) => {
            evt.preventDefault()
            this.update()
          },
          onBlur: (evt) => {
            props.initialValues[evt.currentTarget.getAttribute('name')] = evt.currentTarget.value
            this.update()
          },
          onChange: (evt) => {
            props.initialValues[evt.currentTarget.getAttribute('name')] = evt.currentTarget.value

          }
        })}
      </div>

    )
  }
}

