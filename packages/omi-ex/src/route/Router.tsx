import * as Omi from 'omi'
import {VNode, WeElement} from 'omi'
import {component} from '../util'
import {omiRoute} from './omiRoute'
import {IRouteEvt} from './IRouteEvt'
import {InnerRouteProps} from './Route'

export class RouterData implements IRouteEvt {
  path: string = '/'
  query: { [k: string]: string } = {}
  params: { [k: string]: string } = {}
  data: any = null
  byNative: boolean = false
  nodes: VNode[] = []
}

export interface RouterProps {
  data: RouterData
}

@component('router')
export class Router extends WeElement<RouterProps> {
  static observe = true
  static noSlot = true

  render(props: Omi.RenderableProps<RouterProps>) {
    props.data.nodes.forEach(n => {
      const routeProps = n.attributes as InnerRouteProps
      routeProps.show = routeProps.path === props.data.path
    })
    return props.data.nodes
  }

  install() {
    const children = this.props.children
    const routerData = this.props.data
    routerData.nodes = ((children instanceof Array) ? children : [children]) as VNode[]
    routerData.nodes.forEach(n => {
      const path = n.attributes.path
      omiRoute(path, (evt: IRouteEvt) => {
        routerData.path = path
        routerData.params = evt.params
        routerData.query = evt.query
        routerData.data = evt.data
        routerData.byNative = evt.byNative
      })
    })
    if (!location.hash) omiRoute.to('/')
  }
}