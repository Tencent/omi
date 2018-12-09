import {IOmiComponent} from './IOmiComponent'
import {ComponentChildren, h as omiH, VNode} from 'omi'

export function h(node: string | IOmiComponent,
                  params: JSX.HTMLAttributes & JSX.SVGAttributes & Record<string, any> | null,
                  ...children: ComponentChildren[]): VNode<any> {
  const name = typeof node === 'string' ?
    node : (node as IOmiComponent).__omiComponentName
  return omiH(name, params, children)
}