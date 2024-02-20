import { Component, tag, classNames, VNode } from 'omi'
import './sidebar.tsx'
import { navbarItems, activeMenuItem } from '../store.ts'
import { sidebarItems, activeSidebarItem, isSidebarOpen } from '../store.ts'
import { CustomizeButton } from './customize-button.tsx'
import './navbar.tsx'

/* Because the menu needs to update user avatars, a separate component is packaged for local updates */
@tag('sidebar-wrpapper')
export class SidebarWrapper extends Component {
  render() {
    return (
      <o-sidebar
        onChange={(evt: CustomEvent) => (activeSidebarItem.value = evt.detail.item.value)}
        items={sidebarItems.value}
        active={activeSidebarItem.value}
        isOpen={isSidebarOpen.value}
        onInstalled={window.refreshDark}
      ></o-sidebar>
    )
  }
}

export function AdminLayout(props: { current?: string; children?: VNode | VNode[] }) {
  return (
    <div class="flex h-screen">
      <div
        class={classNames('bg-blue-800 text-white flex flex-col transition-all', {
          'w-60': isSidebarOpen.value,
          'w-16': !isSidebarOpen.value,
        })}
      >
        <sidebar-wrpapper></sidebar-wrpapper>
      </div>
      <div class="flex-1 overflow-auto bg-background text-foreground border-l">
        <header class="shadow py-2 px-4">
          <div class="flex items-center justify-between">
            <button
              class="p-1 rounded-md hover:bg-slate-100 dark:hover:bg-zinc-600"
              onClick={() => (isSidebarOpen.value = !isSidebarOpen.value)}
            >
              <svg
                fill="none"
                viewBox="0 0 16 16"
                width="1.5em"
                height="1.5em"
                class="t-icon t-icon-view-list collapsed-icon"
              >
                <path
                  fill="currentColor"
                  d="M14 4.5H2v-1h12v1zM14 8.5H2v-1h12v1zM2 12.5h12v-1H2v1z"
                  fill-opacity="0.9"
                ></path>
              </svg>
            </button>

            <o-navbar
              items={navbarItems.value}
              value={activeMenuItem.value}
              onInstalled={window.refreshDark}
            ></o-navbar>
          </div>
        </header>
        <main class="p-4">{props.children}</main>
      </div>

      <CustomizeButton />
    </div>
  )
}
