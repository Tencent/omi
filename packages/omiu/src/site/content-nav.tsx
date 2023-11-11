import { tag, Component, signal } from 'omi'
import { tailwind } from '@/tailwind'

const contentMenu = signal<{ menus: { id: string | null; text: string | null }[]; active: string }>({
  menus: [
    {
      id: 'basic',
      text: 'Theme22',
    },
    {
      id: 'shades',
      text: 'Shades',
    },
    {
      id: 'background',
      text: 'Background',
    },
    {
      id: 'text',
      text: 'Text',
    },
    {
      id: 'section-related-resources',
      text: 'Related resources',
    },
  ],
  active: 'basic',
})

export function updateMenu(scopeEl: HTMLElement) {
  const h2Elements = scopeEl.shadowRoot?.querySelectorAll('h2.mb-5.mt-0.text-3xl.font-semibold.leading-normal')
  const menus = Array.from(h2Elements as NodeListOf<Element>).map((h2) => {
    return {
      id: (h2 as HTMLElement).textContent,
      text: (h2 as HTMLElement).textContent,
    }
  })
  contentMenu.value.menus = menus
  if (menus.length) {
    contentMenu.value.active = menus[0].id || ''
  }

  contentMenu.update()
}

@tag('content-nav')
export class ContentNav extends Component {
  static css = [tailwind]

  scrollBodyTo(menu: { id: string | null; text: string | null }) {
    // 修改 url 带上 query 参数
    const element = findH2ByTextInShadowDom(document.body, menu.text || '')

    // 如果找到了这样的 h2 元素，滚动到它的位置
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }

    contentMenu.value.active = menu.id || ''
    contentMenu.update()
  }

  render() {
    return (
      <div class="hidden px-4 lg:block">
        <menu class="sticky top-20">
          <ul class="dark:text-neutral-200">
            {contentMenu.value.menus.map((menu) => {
              return (
                <li
                  key={menu.id}
                  onClick={() => this.scrollBodyTo(menu)}
                  class="mb-1 pl-[9px] text-[0.85rem] data-[te-spy-active]:border-l-2 data-[te-spy-active]:border-solid data-[te-spy-active]:border-l-primary data-[te-spy-active]:text-primary dark:data-[te-spy-active]:border-l-primary-400 dark:data-[te-spy-active]:text-primary-400"
                  data-te-spy-active={contentMenu.value.active === menu.id}
                >
                  <a href="javascript:void(0)">{menu.text}</a>
                </li>
              )
            })}
          </ul>
        </menu>
      </div>
    )
  }
}

function findH2ByTextInShadowDom(root: HTMLElement | ShadowRoot, text: string): HTMLElement | null {
  // 创建 TreeWalker
  const treeWalker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT)

  // 遍历 DOM 树
  while (treeWalker.nextNode()) {
    const node = treeWalker.currentNode as HTMLElement

    // 如果找到了匹配的元素，返回它
    if (node.tagName === 'H2' && node.textContent === text) {
      return node
    }

    // 如果当前节点有 Shadow Root，递归遍历它
    if (node.shadowRoot) {
      const elementInShadowDom = findH2ByTextInShadowDom(node.shadowRoot, text)
      if (elementInShadowDom) {
        return elementInShadowDom
      }
    }
  }

  // 如果没有找到匹配的元素，返回 null
  return null
}
