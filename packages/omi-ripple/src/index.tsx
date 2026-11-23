import { registerDirective } from 'omi'

interface RippleElement extends HTMLElement {
  /** 最近一次传入的配置：重渲染会覆盖它，点击时始终读最新值 */
  __omiRippleOptions?: { color: string }
  /** 已插入样式并绑定过监听，防止重渲染时重复执行 */
  __omiRippleBound?: boolean
}

registerDirective('ripple', (el: RippleElement, options: { color: string }) => {
  // 组件重渲染会让指令再执行一次：这里只更新配置，不重复插样式、不重复绑监听
  el.__omiRippleOptions = options
  if (el.__omiRippleBound) {
    return
  }
  el.__omiRippleBound = true

  // 插入 CSS
  const style = document.createElement('style')
  style.innerHTML = `
    .ripple {
      position: absolute; 
      border-radius: 50%;
      transform: scale(0);
      pointer-events: none;
      animation: ripple 600ms ease-out;
      background-color: rgba(255, 255, 255, 0.7);
    }

    @keyframes ripple {
      to {
        transform: scale(2);
        opacity: 0;
      }
    }
  `
  el.appendChild(style)

  // 检查元素的 position 属性
  const position = window.getComputedStyle(el).position
 
  if (!position || position === 'static') {
    el.style.position = 'relative'
  }

  el.addEventListener('click', (event: MouseEvent) => {
    // 创建涟漪元素
    const diameter = Math.max(el.clientWidth || 0, el.clientHeight || 0)
    const radius = diameter / 2
    const rect = el.getBoundingClientRect()
    const left = event.clientX - rect.left - radius
    const top = event.clientY - rect.top - radius
    const ripple = document.createElement('div')
    ripple.classList.add('ripple')
    const color = el.__omiRippleOptions?.color
    // 没有传颜色时保留样式表里的默认色
    if (color) {
      ripple.style.backgroundColor = color
    }

    // 设置涟漪位置
    ripple.style.left = `${left}px`
    ripple.style.top = `${top}px`
    ripple.style.width = `${diameter}px`
    ripple.style.height = `${diameter}px`
    // 添加涟漪到元素
    el.appendChild(ripple)

    // 涟漪播放完移除
    ripple.addEventListener('animationend', () => {
      ripple.remove()
    })
  })
})