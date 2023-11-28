import { createPopper } from '@popperjs/core'
import { registerDirective } from 'omi'

registerDirective('tooltip', (el: HTMLElement, options: { content?: string; placement?: string; target?: string }) => {
  // 创建弹出框元素
  let popover
  let popperInstance

  function createPopover() {
    if (options.target) {
      popover = querySelectorDeep(document.body, '#' + options.target)
    } else if (options.content) {
      popover = document.createElement('div')

      popover.className =
        'hidden absolute inline-block mx-[5px] rounded px-[20px] py-2.5 text-xs font-medium leading-none  shadow-none focus:outline-none   bg-neutral-600 text-white   '
      popover.innerHTML = options.content
      document.body.appendChild(popover)
    }

    // 创建 Popper 实例
    popperInstance = createPopper(el, popover, {
      placement: options.placement || 'top',
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [0, 8],
          },
        },
      ],
    })
  }

  // 监听元素的点击事件
  el.addEventListener('mouseenter', (evt) => {
    if (!popover) {
      createPopover()
    }
    evt.stopPropagation()
    // 切换弹出框的显示状态
    if (popover) {
      if (window.getComputedStyle(popover).display === 'none') {
        popover.style.display = 'block'
        popperInstance.update()
      } else {
        popover.style.display = 'none'
      }
    }
  })

  // 鼠标移开自动消失，并且从 body 中移除弹出框元素

  el.addEventListener('mouseleave', (evt) => {
    if (popover) {
      popover.style.display = 'none'
    }
  })
})

function querySelectorDeep(rootNode, selector) {
  const treeWalker = document.createTreeWalker(rootNode, NodeFilter.SHOW_ELEMENT, null, false)
  while (treeWalker.nextNode()) {
    const node = treeWalker.currentNode
    // Check if the node matches the selector
    if (node.matches(selector)) {
      return node
    }
    // Check if the node has a shadow root
    if (node.shadowRoot) {
      const shadowMatch = querySelectorDeep(node.shadowRoot, selector)
      if (shadowMatch) {
        return shadowMatch
      }
    }
    // Check if the node has assigned nodes (for slots)
    if (node.assignedNodes) {
      const assignedNodes = node.assignedNodes()
      for (let i = 0; i < assignedNodes.length; i++) {
        const assignedNode = assignedNodes[i]
        if (assignedNode.nodeType === Node.ELEMENT_NODE) {
          const slotMatch = querySelectorDeep(assignedNode, selector)
          if (slotMatch) {
            return slotMatch
          }
        }
      }
    }
  }
  // If no matching node is found, return null
  return null
}
