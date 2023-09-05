import { h, render } from 'omi'
import Loading from './loading'
import { LoadingInstance, LoadingProps } from './type'

function createContainer(attach?: LoadingProps['attach']) {
  if (typeof attach === 'string') return document.querySelector(attach)
  if (typeof attach === 'function') return attach()
  return document.body
}

export type LoadingPluginMethod = (options: boolean | LoadingProps) => LoadingInstance

// loading plugin形式
export const LoadingPlugin: LoadingPluginMethod = (options) => {
  if (options === false) return { hide: () => null }

  const props = typeof options === 'boolean' ? {} : options
  const { attach } = props
  const container = createContainer(attach)
  const div = document.createElement('div')
  div.setAttribute('style', 'width: 100%; height: 100%; position: absolute; top: 0;')

  const defaultProps = {
    loading: true,
    attach: null as LoadingProps['attach'],
    fullscreen: !attach,
    showOverlay: !!attach,
  }

  render(<Loading {...defaultProps} {...props} attach={null}></Loading>, div)

  container.appendChild(div)

  return {
    hide: () => {
      //   unmount(div)
      div.remove()
    },
  }
}
