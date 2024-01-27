export function NetworkError() {
  return (
    <div class="flex items-center justify-center" style="height:calc(100vh - 58px)">
      <div class="p-8  text-center">
        <div class="mb-4 text-primary">
          <svg data-v-452ecc15="" xmlns="http://www.w3.org/2000/svg" width="200" height="140" fill="none">
            <g>
              <path
                fill="#97A3B7"
                fill-rule="evenodd"
                d="M33 46.843 96.321 119l63.322-72.157C142.742 32 120.583 23 96.321 23 72.061 23 49.901 32 33 46.843"
                clip-rule="evenodd"
              ></path>
              <g opacity=".5">
                <path fill="#E3E6EB" d="M95 21h80v60H95z"></path>
              </g>
              <g opacity=".5">
                <path fill="#E3E6EB" d="M-7 43h80v60H-7z"></path>
              </g>
            </g>
            <path
              fill="currentcolor"
              d="m72.812 63.688-3.157 3.157 6.246 6.247a50.273 50.273 0 0 0-12.713 8.151L96.321 119l11.913-13.575 6.413 6.412 3.157-3.157L80.45 71.326zM129.455 81.243l-15.318 17.455-28.74-28.74a50.41 50.41 0 0 1 10.924-1.19c12.695 0 24.29 4.709 33.134 12.475"
            ></path>
            <path
              fill="#fff"
              stroke="#000"
              d="m152 21.822 4.867 17.053.133.465.469-.117 17.202-4.312-12.335 12.741-.337.348.337.348 12.335 12.741-17.202-4.312-.469-.117-.133.465L152 74.178l-4.867-17.053-.133-.465-.469.117-17.202 4.312 12.335-12.741.337-.348-.337-.348-12.335-12.741 17.202 4.312.469.117.133-.465z"
            ></path>
            <path stroke="#fff" stroke-width="2" d="M101 31 90 42l11 11-8 8"></path>
          </svg>
        </div>

        <h2 class="text-2xl font-bold mb-2 text-gray-700 dark:text-foreground">网络异常</h2>

        <p class="text-gray-600 mb-6 dark:text-foreground">网络异常，请稍后再试</p>

        <div class="flex justify-center space-x-4">
          <a href="#/" class="py-2 px-4 bg-primary text-white rounded hover:bg-primary/85">
            重新加载
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
