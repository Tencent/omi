import { showCustomize } from './customize.tsx'

export function CustomizeButton() {
  return (
    <div class="fixed right-0 bottom-0 m-6 bg-zinc-300 dark:bg-background dark:text-foreground bg-opacity-40 backdrop-filter h-16 backdrop-blur-md py-2 px-3 rounded-full flex items-center">
      <button
        class="flex border bg-zinc-100 dark:bg-background dark:text-foreground p-2 rounded-full text-zinc-600 hover:text-primary"
        onClick={(evt) => {
          evt.stopPropagation()
          showCustomize()
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="">
          <path
            d="M15.3333 2.66667V6H20.3333C21.2538 6 22 6.7462 22 7.66667V11C22 11.8405 21.3779 12.5356 20.5691 12.6501L21.7282 20.7643C21.8717 21.7684 21.0926 22.6667 20.0783 22.6667H3.92168C2.90743 22.6667 2.12833 21.7684 2.27177 20.7643L3.43093 12.6501C2.62209 12.5356 2 11.8405 2 11V7.66667C2 6.7462 2.74619 6 3.66667 6H8.66667V2.66667C8.66667 1.74619 9.41286 1 10.3333 1H13.6667C14.5871 1 15.3333 1.74619 15.3333 2.66667ZM18.8878 12.6667H5.11216L3.92168 21H7V17.6667H8.66667V21H11.1667V17.6667H12.8333V21H15.3333V17.6667H17V21H20.0783L18.8878 12.6667Z"
            fill="currentColor"
          ></path>
        </svg>
        <span class="ml-2">参数调节</span>
      </button>
    </div>
  )
}
