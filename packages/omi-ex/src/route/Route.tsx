import {component, h} from '../util'
import * as Omi from 'omi'
import {WeElement} from 'omi'

export interface RouteProps {
  path: string
  keepAlive?: boolean
}

export interface InnerRouteProps extends RouteProps {
  show?: boolean
}

@component('route')
export class Route extends WeElement<RouteProps> {
  static noSlot = true

  private get show() {
    return (this.props as InnerRouteProps).show
  }

  render(props: Omi.RenderableProps<RouteProps>) {
    if (props.keepAlive) {
      // language=CSS
      const style = this.show ? null : {display: 'none'}
      return <div style={style}>{this.props.children}</div>
    } else return this.show && this.props.children
  }
}