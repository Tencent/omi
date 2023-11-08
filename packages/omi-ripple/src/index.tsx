import { registerDirective } from 'omi'

registerDirective('ripple', (el: HTMLElement, options: { color: string }) => {
  // 插入 CSS
  const style = document.createElement('style')
  style.innerHTML = `
    .ripple {
      position: absolute; 
      border-radius: 50%;
      transform: scale(0);
      animation: ripple 600ms ease-out;
      background-color: rgba(255, 255, 255, 0.7);
    }

    @keyframes ripple {
      to {
        transform: scale(4);
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
    ripple.style.backgroundColor = options.color

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