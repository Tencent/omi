import { Component, VNode, tag } from 'omi'
import './navbar.tsx'
import { menuItems, activeMenuItem } from '../store.ts'
import { showCustomize } from './customize.tsx'

/* Because the menu needs to update user avatars, a separate component is packaged for local updates */
@tag('navbar-wrpapper')
class NavbarWrapper extends Component {
  render() {
    return (
      <o-navbar menuItems={menuItems.value} active={activeMenuItem.value} onInstalled={window.refreshDark}></o-navbar>
    )
  }
}

export function SiteLayout(props: { hideFooter?: boolean; current?: string; children?: VNode | VNode[] }) {
  return (
    <div class="bg-[#fafafa] pt-[56px] dark:bg-background dark:text-foreground">
      <header class="bg-white dark:bg-background/10 dark:text-foreground bg-opacity-40 backdrop-filter backdrop-blur-md py-2 top-0 shadow fixed w-full px-4 md:px-0 z-[100000]">
        <div class="container mx-auto flex justify-between items-center">
          <div class="text-xl font-bold">
            <a href="#" class="text-gray-800 dark:text-foreground">
              LOGO
            </a>
          </div>

          <div class="flex items-center">
            <NavbarWrapper />
          </div>
        </div>
      </header>

      {props.children}

      {!props.hideFooter && (
        <section class="bg-[#eeeeee] dark:bg-background dark:text-foreground px-4 md:px-0 border-t">
          <div class="container  mx-auto py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h2 class="text-xl font-bold mb-4">友情链接1</h2>
              <ul class="text-gray-600 dark:text-foreground">
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
              <ul class="text-gray-600 dark:text-foreground">
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
              <ul class="text-gray-600 dark:text-foreground">
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
              <ul class="text-gray-600 dark:text-foreground">
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

      <div class="fixed right-0 bottom-0 m-6 bg-gray-300 dark:bg-background dark:text-foreground bg-opacity-40 backdrop-filter h-16 backdrop-blur-md py-2 px-3 rounded-full flex items-center">
        <button
          class="flex border bg-gray-100 dark:bg-background dark:text-foreground p-2 rounded-full text-gray-600 hover:text-primary"
          onClick={(evt) => {
            evt.stopPropagation()
            showCustomize()
          }}
        >
          <svg
            data-v-b28ea768=""
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style=""
          >
            <path
              data-v-7ab44b3a=""
              d="M15.3333 2.66667V6H20.3333C21.2538 6 22 6.7462 22 7.66667V11C22 11.8405 21.3779 12.5356 20.5691 12.6501L21.7282 20.7643C21.8717 21.7684 21.0926 22.6667 20.0783 22.6667H3.92168C2.90743 22.6667 2.12833 21.7684 2.27177 20.7643L3.43093 12.6501C2.62209 12.5356 2 11.8405 2 11V7.66667C2 6.7462 2.74619 6 3.66667 6H8.66667V2.66667C8.66667 1.74619 9.41286 1 10.3333 1H13.6667C14.5871 1 15.3333 1.74619 15.3333 2.66667ZM18.8878 12.6667H5.11216L3.92168 21H7V17.6667H8.66667V21H11.1667V17.6667H12.8333V21H15.3333V17.6667H17V21H20.0783L18.8878 12.6667Z"
              fill="currentColor"
            ></path>
          </svg>
          <span class="ml-2">参数调节</span>
        </button>
      </div>

      {!props.hideFooter && (
        <footer class="bg-[#e7e7e7] dark:bg-background dark:text-foreground py-6">
          <div class="container mx-auto text-center">
            <p class="text-gray-600 dark:text-foreground">© 2024 Tencent OMI. All rights reserved.</p>
          </div>
        </footer>
      )}
    </div>
  )
}
