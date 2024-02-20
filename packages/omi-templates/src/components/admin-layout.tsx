import { Component, tag, classNames } from 'omi'
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
        items={sidebarItems.value}
        active={activeSidebarItem.value}
        isOpen={isSidebarOpen.value}
        onInstalled={window.refreshDark}
      ></o-sidebar>
    )
  }
}

export function AdminLayout() {
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
        <main class="p-4">
          <h3 class="text-xl font-semibold mb-2">Coming soon....</h3>
          <div class="flex items-center justify-between mb-4">
            <div class="container mx-auto">
              <div class="grid grid-cols-1  md:grid-cols-2 xl:grid-cols-4 gap-6 mb-6">
                <div class="bg-background shadow-md rounded p-4 dark:border h-40 text-5xl flex items-center justify-center">
                  1
                </div>
                <div class="bg-background shadow-md rounded p-4 dark:border h-40 text-5xl flex items-center justify-center">
                  2
                </div>
                <div class="bg-background shadow-md rounded p-4 dark:border h-40 text-5xl flex items-center justify-center">
                  3
                </div>
                <div class="bg-background shadow-md rounded p-4 dark:border h-40 text-5xl flex items-center justify-center">
                  4
                </div>
              </div>

              <div class="grid grid-cols-4 gap-6 mb-6">
                <div class="md:col-span-3 col-span-4 bg-background shadow-md rounded p-4 dark:border h-96 text-5xl flex items-center justify-center">
                  5
                </div>
                <div class="md:col-span-1 col-span-4 bg-background shadow-md rounded p-4 dark:border h-96 text-5xl flex items-center justify-center">
                  6
                </div>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div class="bg-background shadow-md rounded p-4 dark:border h-96 text-5xl flex items-center justify-center">
                  7
                </div>
                <div class="bg-background shadow-md rounded p-4 dark:border h-96 text-5xl flex items-center justify-center">
                  8
                </div>
              </div>

              <div class="bg-background shadow-md rounded p-4 dark:border">
                <div class="flex justify-between items-center mb-4"></div>
                <div class="grid grid-cols-4 gap-6">
                  <div class="md:col-span-3 col-span-4 text-5xl flex items-center justify-center">9</div>
                  <div class="md:col-span-1 col-span-4 text-5xl flex items-center justify-center">10</div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      <CustomizeButton />
    </div>
  )
}
