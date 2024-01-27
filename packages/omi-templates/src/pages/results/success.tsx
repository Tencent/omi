export function SuccessResult() {
  return (
    <div class="flex items-center justify-center" style="height:calc(100vh - 58px)">
      <div class="p-8  text-center">
        <div class="mb-4">
          <svg
            data-v-066fd69d=""
            fill="none"
            viewBox="0 0 16 16"
            width="1em"
            height="1em"
            class="w-16 h-16 mx-auto text-[#2ba471]"
          >
            <path
              data-v-066fd69d=""
              fill="currentColor"
              d="M4.5 8.2L7 10.7l4.5-4.5-.7-.7L7 9.3 5.2 7.5l-.7.7z"
              fill-opacity="0.9"
            ></path>
            <path
              data-v-066fd69d=""
              fill="currentColor"
              d="M4.11 2.18a7 7 0 117.78 11.64A7 7 0 014.1 2.18zm.56 10.8a6 6 0 106.66-9.97A6 6 0 004.67 13z"
              fill-opacity="0.9"
            ></path>
          </svg>
        </div>

        <h2 class="text-2xl font-bold mb-2 text-gray-700 dark:text-foreground">项目已创建成功</h2>

        <p class="text-gray-600 mb-6 dark:text-foreground">可以联系负责人分发应用</p>

        <div class="flex justify-center space-x-4">
          <a href="#/" class="py-2 px-4 bg-primary text-white rounded hover:bg-primary/85">
            返回首页
          </a>
          <button class="bg-background shadow-sm border border-input hover:bg-accent hover:text-accent-foreground px-4 py-2 rounded flex items-center">
            查看进度
          </button>
        </div>
      </div>
    </div>
  )
}
