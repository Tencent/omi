// import { isDark } from '../store.ts'
import '../components/omiu/button.tsx'

export function Home() {
  return (
    <>
      <div class="flex h-screen">
        <div class="w-1/12 p-1 dark:bg-background dark:text-foreground">Sidebar</div>
        
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
