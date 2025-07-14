import { Component, VNode, classNames, tag } from 'omi'
import './navbar.tsx'
import { navbarItems, activeMenuItem } from '../store.ts'
import { CustomizeButton } from './customize-button.tsx'
import tdesignLogo from '../assets/tdesign.svg?raw'

/* Because the menu needs to update user avatars, a separate component is packaged for local updates */
@tag('navbar-wrpapper')
class NavbarWrapper extends Component {
  render() {
    return (
      <o-navbar items={navbarItems.value} active={activeMenuItem.value} onInstalled={window.refreshDark}></o-navbar>
    )
  }
}

export function ComponentLayout(props: { hideFooter?: boolean; current?: string; children?: VNode | VNode[] }) {
  return (
    <div class="bg-[#fafafa] pt-[56px] dark:bg-background dark:text-foreground">
      <header class="bg-white dark:bg-background/10 dark:text-foreground bg-opacity-40 backdrop-filter backdrop-blur-md py-2 top-0 shadow fixed w-full px-4 md:px-0 z-[100000]">
        <div class="container mx-auto flex justify-between items-center">
          <div class="text-xl font-bold">
            <a class="text-zinc-800 dark:text-white" title="TDesign" unsafeHTML={{ html: tdesignLogo }} href="#/"></a>
          </div>

          <div class="flex items-center">
            <NavbarWrapper />
          </div>
        </div>
      </header>

      <div class="flex gap-6">
        <div class="w-64  text-[#00000066] py-4 px-2 border-r h-[calc(100vh-60px)] overflow-auto">
          <div>
            <div class="text-xs uppercase px-2 py-1 my-2">基础</div>

            <nav class="text-sm text-[#00000099]">
              <a
                href="#/components/button"
                class={classNames({
                  'block px-2 py-3 mb-1 rounded  transition-colors duration-200': true,
                  'bg-primary text-white': props.current === '/components/button',
                  'hover:bg-zinc-100 hover:text-black/90': props.current !== '/components/button',
                })}
              >
                Button 按钮
              </a>
              <a
                href="#/components/icon"
                class={classNames({
                  'block px-2 py-3 mb-1 rounded  transition-colors duration-200': true,
                  'bg-primary text-white': props.current === '/components/icon',
                  'hover:bg-zinc-100 hover:text-black/90': props.current !== '/components/icon',
                })}
              >
                Icon 图标
              </a>
            </nav>
          </div>

          <div>
            <div class="text-xs uppercase px-2 py-1 my-2">导航</div>

            <nav class="text-sm text-[#00000099]">
              <a
                href="#/components/breadcrumb"
                class={classNames({
                  'block px-2 py-3 mb-1 rounded  transition-colors duration-200': true,
                  'bg-primary text-white': props.current === '/components/breadcrumb',
                  'hover:bg-zinc-100 hover:text-black/90': props.current !== '/components/breadcrumb',
                })}
              >
                Breadcrumb 面包屑
              </a>
            </nav>
          </div>

          <div>
            <div class="text-xs uppercase px-2 py-1 my-2">输入</div>

            <nav class="text-sm text-[#00000099]">
              <a
                href="#/components/switch"
                class={classNames({
                  'block px-2 py-3 mb-1 rounded  transition-colors duration-200': true,
                  'bg-primary text-white': props.current === '/components/switch',
                  'hover:bg-zinc-100 hover:text-black/90': props.current !== '/components/switch',
                })}
              >
                Switch 开关
              </a>
            </nav>
          </div>
        </div>
        <div class="w-full h-[calc(100vh-60px)] overflow-auto">{props.children}</div>
      </div>

      {!props.hideFooter && (
        <section class="bg-[#eeeeee] dark:bg-background dark:text-foreground px-4 md:px-0 border-t">
          <div class="container  mx-auto py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h2 class="text-xl font-bold mb-4">友情链接1</h2>
              <ul class="text-zinc-600 dark:text-foreground">
                <li>
                  <a href="#">链接1</a>
                </li>
                <li>
                  <a href="#">链接2</a>
                </li>
                <li>
                  <a href="#">链接3</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="text-xl font-bold mb-4">友情链接2</h2>
              <ul class="text-zinc-600 dark:text-foreground">
                <li>
                  <a href="#">链接1</a>
                </li>
                <li>
                  <a href="#">链接2</a>
                </li>
                <li>
                  <a href="#">链接3</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="text-xl font-bold mb-4">友情链接3</h2>
              <ul class="text-zinc-600 dark:text-foreground">
                <li>
                  <a href="#">链接1</a>
                </li>
                <li>
                  <a href="#">链接2</a>
                </li>
                <li>
                  <a href="#">链接3</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="text-xl font-bold mb-4">友情链接4</h2>
              <ul class="text-zinc-600 dark:text-foreground">
                <li>
                  <a href="#">链接1</a>
                </li>
                <li>
                  <a href="#">链接2</a>
                </li>
                <li>
                  <a href="#">链接3</a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      )}

      <CustomizeButton />

      {!props.hideFooter && (
        <footer class="bg-[#e7e7e7] border-t dark:bg-background dark:text-foreground py-6">
          <div class="container mx-auto text-center">
            <p class="text-zinc-600 dark:text-foreground">© 2024 Tencent OMI. All rights reserved.</p>
          </div>
        </footer>
      )}
    </div>
  )
}
