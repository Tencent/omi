export function ServerError() {
  return (
    <div class="flex items-center justify-center" style="height:calc(100vh - 58px)">
      <div class="p-8  text-center">
        <div class="mb-4 text-primary">
          <svg class="mx-auto" xmlns="http://www.w3.org/2000/svg" width="200" height="140" fill="none">
            <g mask="url(#mask0_16559_24251)">
              <path fill="#97A3B7" d="m68 48 38.105 22v44L68 136l-38.105-22V70z"></path>
              <g opacity={0.5}>
                <path fill="#E3E6EB" d="M46.391 92h80v60h-80z"></path>
              </g>
              <g opacity={0.5}>
                <path fill="#E3E6EB" d="M0 23h80v60H0z"></path>
              </g>
            </g>
            <mask id="a" width="78" height="88" x="80" y="9" maskUnits="userSpaceOnUse" style="mask-type: alpha;">
              <path fill="currentcolor" d="m119 9 38.105 22v44L119 97 80.895 75V31z"></path>
            </mask>
            <g mask="url(#a)">
              <path
                fill="currentcolor"
                fill-rule="evenodd"
                d="M80.895 31v44L119 97l38.105-22V31L119 53z"
                clip-rule="evenodd"
              ></path>
              <path fill="currentcolor" d="m119-35 38.105 22v44.5L119 53.5l-38.105-22V-13z" opacity=".9"></path>
              <g filter="url(#filter2_f_16559_24251)" opacity=".3">
                <path fill="#97A3B7" d="m68 48 38.105 22v44L68 136l-38.105-22V70z"></path>
              </g>
            </g>
            <path
              fill="#fff"
              stroke="#000"
              d="m143 68.822 4.867 17.053.133.466.469-.118 17.202-4.312-12.335 12.741-.337.348.337.348 12.335 12.741-17.202-4.312-.469-.118-.133.466L143 121.178l-4.867-17.053-.133-.466-.469.118-17.202 4.312 12.335-12.741.337-.348-.337-.348-12.335-12.741 17.202 4.312.469.118.133-.466z"
            ></path>
            <path
              fill="#fff"
              fill-rule="evenodd"
              d="m123.243 35.082 2.828-1.633-2.828-1.633-2.829 1.633zM119 32.632 121.828 31l-7.071-4.082-2.828 1.633zm8.485 3.267c-4.679 2.701-12.291 2.701-16.97 0-4.68-2.702-4.68-7.096 0-9.798 4.679-2.701 12.291-2.701 16.97 0 4.68 2.702 4.68 7.096 0 9.798m-19.799-11.43c-6.248 3.607-6.248 9.455 0 13.062 6.248 3.607 16.38 3.607 22.628 0 6.248-3.607 6.248-9.455 0-13.062-6.248-3.607-16.38-3.607-22.628 0M41.899 86.286l2.828 1.633v6.532L41.9 92.818zm12.02 6.94 2.829 1.634v6.532l-2.828-1.633zm-9.19 14.289-2.83-1.633.001 3.266 2.828 1.633zl9.192 5.307v3.266l2.828 1.633v-3.266l-2.828-1.633v-3.266l-9.192-5.307z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>

        <h2 class="text-2xl font-bold mb-2 text-gray-700 dark:text-foreground">500 Internal Server Error</h2>

        <p class="text-gray-600 mb-6 dark:text-foreground">抱歉，服务器出错啦</p>

        <div class="flex justify-center space-x-4">
          <a href="#/" class="py-2 px-4 bg-primary text-white rounded hover:bg-primary/85">
            返回首页
          </a>
        </div>
      </div>
    </div>
  )
}
