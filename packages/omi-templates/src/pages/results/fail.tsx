export function Fail() {
  return (
    <div class="flex items-center justify-center" style="height:calc(100vh - 58px)">
      <div class="p-8  text-center">
        <div class="mb-4 text-gray-600 dark:text-foreground">
          <svg fill="none" viewBox="0 0 16 16" width="1em" height="1em" class="w-16 h-16 mx-auto">
            <path
              data-v-544cac2e=""
              fill="currentColor"
              d="M8.5 4v5.5h-1V4h1zM8.6 10.5H7.4v1.2h1.2v-1.2z"
              fill-opacity="0.9"
            ></path>
            <path
              fill="currentColor"
              d="M15 8A7 7 0 101 8a7 7 0 0014 0zm-1 0A6 6 0 112 8a6 6 0 0112 0z"
              fill-opacity="0.9"
            ></path>
          </svg>
        </div>

        <h2 class="text-2xl font-bold mb-2 text-gray-700 dark:text-foreground">创建失败</h2>

        <p class="text-gray-600 mb-6 dark:text-foreground">
          抱歉，您的项目创建失败，企业微信联系检查创建者权限，或返回修改。
        </p>

        <div class="flex justify-center space-x-4">
          <a href="#/" class="py-2 px-4 bg-primary text-white rounded hover:bg-primary/85">
            返回修改
          </a>
          <a
            href="#/"
            class="bg-background shadow-sm border border-input hover:bg-accent hover:text-accent-foreground px-4 py-2 rounded flex items-center"
          >
            返回首页
          </a>
        </div>
      </div>
    </div>
  )
}
