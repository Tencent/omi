export function SystemMaintenance() {
  return (
    <div class="flex items-center justify-center" style="height:calc(100vh - 58px)">
      <div class="p-8  text-center">
        <div class="mb-4 text-primary">
          <svg xmlns="http://www.w3.org/2000/svg" width="200" height="140" fill="none">
            <mask id="a" width="78" height="88" x="80" y="9" maskUnits="userSpaceOnUse" style="mask-type: alpha;">
              <path fill="currentColor" d="m119 9 38.105 22v44L119 97 80.895 75V31z"></path>
            </mask>
            <g mask="url(#a)">
              <path fill="currentColor" d="m119 9 38.105 22v44L119 97 80.895 75V31z"></path>
              <path fill="currentColor" d="m119-35 38.105 22v44L119 53 80.895 31v-44z" opacity=".9"></path>
              <g filter="url(#b)" opacity=".3">
                <path fill="#97A3B7" d="m68 48 38.105 22v44L68 136l-38.105-22V70z"></path>
              </g>
            </g>
            <mask id="c" width="78" height="88" x="29" y="48" maskUnits="userSpaceOnUse" style="mask-type: alpha;">
              <path fill="#97A3B7" d="m68 48 38.105 22v44L68 136l-38.105-22V70z"></path>
            </mask>
            <g mask="url(#c)">
              <path fill="#97A3B7" d="m68 48 38.105 22v44L68 136l-38.105-22V70z"></path>
              <g filter="url(#d)">
                <path fill="#E3E6EB" d="M46.391 92h80v60h-80z"></path>
              </g>
              <g filter="url(#e)">
                <path fill="#E3E6EB" d="M0 23h80v60H0z"></path>
              </g>
            </g>
            <path
              fill="#fff"
              d="m41.898 86.287 2.829 1.633v6.531l-2.828-1.632zM53.919 93.227l2.828 1.633v6.532l-2.828-1.633zM44.728 107.515l-2.829-1.633v3.266l2.829 1.633zl9.191 5.308v3.265l2.829 1.633v-3.266l-2.828-1.632v-3.266l-9.193-5.308z"
            ></path>
            <path
              fill="#fff"
              fill-rule="evenodd"
              d="M108.348 23.48c-2.16 2.51-1.813 5.903 1.047 8.08 3.265 2.486 8.568 2.447 11.845-.087 3.276-2.534 3.286-6.603.021-9.089-2.86-2.177-7.284-2.417-10.54-.74l5.202 3.96-2.373 1.836z"
              clip-rule="evenodd"
            ></path>
            <path
              fill="#fff"
              fill-rule="evenodd"
              d="m120.865 33.009 8.965 6.826 2.373-1.836-8.965-6.826c-.321.348-.684.68-1.089.993-.404.312-.834.593-1.284.843m-1.203-.916a8.458 8.458 0 0 0 1.305-.828 7.248 7.248 0 0 1 0 0 8.45 8.45 0 0 1-1.305.828z"
              clip-rule="evenodd"
            ></path>
            <path fill="#fff" stroke="#181818" d="m144 70 24.249 42h-48.498z"></path>
            <path stroke="#181818" d="M144 100V82"></path>
            <path stroke="#181818" stroke-linejoin="round" stroke-width="2" d="M144 105h.004v.004H144z"></path>
            <defs>
              <filter
                id="b"
                width="88.21"
                height="100"
                x="23.895"
                y="42"
                color-interpolation-filters="sRGB"
                filterUnits="userSpaceOnUse"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                <feGaussianBlur result="effect1_foregroundBlur_216_313" stdDeviation="3"></feGaussianBlur>
              </filter>
              <filter
                id="d"
                width="180"
                height="160"
                x="-3.609"
                y="42"
                color-interpolation-filters="sRGB"
                filterUnits="userSpaceOnUse"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                <feGaussianBlur result="effect1_foregroundBlur_216_313" stdDeviation="25"></feGaussianBlur>
              </filter>
              <filter
                id="e"
                width="180"
                height="160"
                x="-50"
                y="-27"
                color-interpolation-filters="sRGB"
                filterUnits="userSpaceOnUse"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                <feGaussianBlur result="effect1_foregroundBlur_216_313" stdDeviation="25"></feGaussianBlur>
              </filter>
            </defs>
          </svg>
        </div>

        <h2 class="text-2xl font-bold mb-2 text-gray-700 dark:text-foreground">系统维护中</h2>

        <p class="text-gray-600 mb-6 dark:text-foreground">系统维护中，请稍后再试</p>

        <div class="flex justify-center space-x-4">
          <a href="#/" class="py-2 px-4 bg-primary text-white rounded hover:bg-primary/85">
            返回首页
          </a>
        </div>
      </div>
    </div>
  )
}
