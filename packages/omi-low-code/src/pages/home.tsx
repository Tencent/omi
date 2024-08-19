// import { isDark } from '../store.ts'
import '../components/omiu/button.tsx'
import '../components/sidebar.tsx'
import { SidebarItem } from '../components/sidebar.tsx'

export function Home() {
  // mock data
  const sidebarItems: SidebarItem[] = [
    {
      text: '文件',
      target: '_self',
      name: 'components',
      path: '/components',
      value: 'components',
      type: 'menu',
      icon: 'layers',
      children: []
    },
    {
      text: '样式设置',
      target: '_self',
      name: 'structure',
      path: '/structure',
      value: 'structure',
      type: 'menu',
      icon: 'layers',
      children: [],
    },
    {
      text: '状态变量',
      target: '_self',
      name: 'variables',
      path: '/variables',
      value: 'variables',
      type: 'menu',
      icon: 'layers',
      children: [],
    },
    {
      text: '事件绑定',
      target: '_self',
      name: 'api',
      path: '/api',
      value: 'api',
      type: 'menu',
      icon: 'layers',
      children: [],
    }
  ];
  

  return (
    <>
      <div class="flex h-screen">
        {/* <div class="w-1/12 p-1 dark:bg-background dark:text-foreground">Sidebar</div> */}
        <o-sidebar 
          items={sidebarItems}
          active="" 
          isOpen={true}
        ></o-sidebar>

        <div class="flex-grow p-1 dark:bg-background dark:text-foreground">
          <div class="flex h-full">
            <section class="w-1/4 p-4 dark:bg-background bg-gray-200 dark:text-foreground">Column 1</section>
            <section class="w-3/4 p-4 dark:bg-background dark:text-foreground">Column 2</section>
          </div>
        </div>
      </div>
    </>
  )
}
