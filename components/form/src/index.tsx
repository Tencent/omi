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

  static isLightDom = true

  touched = {}

  render(props: Props) {
    return (

      <div>
        {this.props.children && this.props.children[0]({
          values: props.initialValues,
          errors: this.isInstalled ? props.validate(props.initialValues) : {},
          onSubmit: (evt) => {
            for(const name in props.initialValues) {
              this.touched[name] = true
            }
            evt.preventDefault()
            this.update()
          },
          onBlur: (evt) => {
            const name = evt.currentTarget.getAttribute('name')

            props.initialValues[name] = evt.currentTarget.value
            this.update()
          },
          onChange: (evt) => {
            props.initialValues[evt.currentTarget.getAttribute('name')] = evt.currentTarget.value
          },
          touched: this.touched
        })}
      </div>

    )
  }
}

