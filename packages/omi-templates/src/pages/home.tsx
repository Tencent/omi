import { isDark } from '../store.ts'

export function Home() {
  return (
    <>
      <section
        class="px-4 md:px-0 flex items-center bg-cover w-full bg-no-repeat h-[720px] z-0"
        style={{
          backgroundImage: `url('https://tdesign.gtimg.com/tdesign-pro/doc/homepage-banner-bg-${
            isDark.value ? 'dark' : 'light'
          }.png')`,
        }}
      >
        <div class=" container mx-auto">
          <h1
            class="text-5xl md:text-7xl pb-1 font-bold mb-4 bg-gradient-to-r from-primary via-[#07c160]"
            style="-webkit-background-clip: text;
  -webkit-text-fill-color: transparent;"
          >
            OMI Tailwind Templates
          </h1>
          <p class="text-gray-600 mb-8 text-2xl dark:text-foreground">
            100+ 免费模板，站点、管理系统都有，开箱即用，自由定制，开源免费
          </p>
          <div class="flex space-x-4">
            <a
              href="/#/product-docs"
              class="bg-primary shadow hover:bg-primary/85 text-primary-foreground px-5 py-2 rounded"
            >
              开始使用
            </a>
            <a
              target="_blank"
              href="https://github.com/Tencent/omi/tree/master/packages/omi-templates"
              class="bg-background shadow-sm border border-input hover:bg-accent hover:text-accent-foreground px-4 py-2 rounded flex items-center"
            >
              <svg viewBox="0 0 438.549 438.549" class="mr-2 h-4 w-4">
                <path
                  fill="currentColor"
                  d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
                ></path>
              </svg>
              源代码
            </a>
          </div>
        </div>
      </section>

      <div class="container mx-auto -mt-24">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div class="bg-card text-card-foreground rounded-lg p-4 shadow">
            <div class="rounded-full bg-gray-200 h-20 w-20 mx-auto mb-4 flex items-center justify-center text-5xl">
              🔪
            </div>
            <h2 class="text-2xl font-bold mb-2">刀锋锐利</h2>
            <p class="text-gray-600 dark:text-card-foreground">
              Tailwind CSS为基础的响应式布局，直接复制粘贴，到处都能用
            </p>
          </div>
          <div class="bg-card text-card-foreground rounded-lg p-4 shadow">
            <div class="rounded-full bg-gray-200 h-20 w-20 mx-auto mb-4 flex items-center justify-center text-5xl">
              🎁
            </div>
            <h2 class="text-2xl font-bold mb-2">开箱即用</h2>
            <p class="text-gray-600 dark:text-card-foreground">100+的模板，直接修修改改，打造成您自己的站点</p>
          </div>

          <div class="bg-card text-card-foreground rounded-lg p-4 shadow">
            <div class="rounded-full bg-gray-200 h-20 w-20 mx-auto mb-4 flex items-center justify-center text-5xl">
              ⚙️
            </div>
            <h2 class="text-2xl font-bold mb-2">自由定制</h2>
            <p class="text-gray-600 dark:text-card-foreground">颜色、圆角、白天黑夜模式、多语言切换，自由设定</p>
          </div>
        </div>
      </div>

      <section class="container mx-auto flex items-center mt-12  px-4 md:px-10 rounded-xl shadow-lg bg-background text-foreground border">
        <div class="w-1/2 p-4">
          <h1 class="text-4xl font-bold mb-4">标题</h1>
          <p class="text-gray-600 mb-8 dark:text-foreground">
            这里是描述内容。这里是描述内容。这里是描述内容。这里是描述内容。这里是描述内容。这里是描述内容。这里是描述内容。这里是描述内容。
          </p>
          <div class="flex space-x-4">
            <button class="bg-primary hover:bg-primary/85 whitespace-nowrap text-white px-6 py-2 rounded">按钮1</button>
            <button class="bg-background shadow-sm border border-input hover:bg-accent hover:text-accent-foreground px-6 py-2 rounded flex items-center">
              按钮2
            </button>
          </div>
        </div>
        <div class="w-1/2">
          <img
            src={
              isDark.value
                ? 'https://tdesign.woa.com/assets/rope-dark.e3ba9319.png'
                : 'https://static.tdesign.tencent.com/assets/rope.5e013bf8.png'
            }
            alt="示例图片"
            class="w-full rounded-3xl overflow-hidden p-4"
          />
        </div>
      </section>

      <section class="container mx-auto flex items-center mt-12  px-4 md:px-10 rounded-xl shadow-lg bg-background text-foreground border">
        <div class="w-1/2">
          <img
            src={`https://tdesign.gtimg.com/tdesign-starter/docs/starter-docs-industry-${
              isDark.value ? 'dark' : 'light'
            }.png`}
            alt="示例图片"
            class="w-full dark:p-4 rounded-3xl overflow-hidden"
          />
        </div>
        <div class="w-1/2 p-4">
          <h1 class="text-4xl font-bold mb-4">标题</h1>
          <p class="text-gray-600 mb-8 dark:text-foreground">
            这里是描述内容。这里是描述内容。这里是描述内容。这里是描述内容。这里是描述内容。这里是描述内容。这里是描述内容。
          </p>
        </div>
      </section>

      <section class="container mx-auto my-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="p-6 shadow rounded bg-card text-card-foreground">
          <h2 class="text-2xl font-bold mb-4">卡片1</h2>
          <p class="text-gray-600 dark:text-card-foreground">这里是卡片1的描述内容。</p>
        </div>
        <div class=" p-6 shadow rounded bg-card text-card-foreground">
          <h2 class="text-2xl font-bold mb-4">卡片2</h2>
          <p class="text-gray-600 dark:text-card-foreground">这里是卡片2的描述内容。</p>
        </div>
        <div class=" p-6 shadow rounded bg-card text-card-foreground">
          <h2 class="text-2xl font-bold mb-4">卡片3</h2>
          <p class="text-gray-600 dark:text-card-foreground">这里是卡片3的描述内容。</p>
        </div>
        <div class=" p-6 shadow rounded bg-card text-card-foreground">
          <h2 class="text-2xl font-bold mb-4">卡片1</h2>
          <p class="text-gray-600 dark:text-card-foreground">这里是卡片1的描述内容。</p>
        </div>
        <div class=" p-6 shadow rounded bg-card text-card-foreground">
          <h2 class="text-2xl font-bold mb-4">卡片2</h2>
          <p class="text-gray-600 dark:text-card-foreground">这里是卡片2的描述内容。</p>
        </div>
        <div class=" p-6 shadow rounded bg-card text-card-foreground">
          <h2 class="text-2xl font-bold mb-4">卡片3</h2>
          <p class="text-gray-600 dark:text-card-foreground">这里是卡片3的描述内容。</p>
        </div>
      </section>

      <section class="p-8 bg-background text-foreground mx-auto mt-12 h-[500px] text-center w-full bg-[url('https://www.apple.com/v/home/bi/images/heroes/iphone-15/hero_iphone15_announce__uuemlcwczn6u_mediumtall_2x.jpg')] bg-cover bg-center relative">
        <div class="absolute inset-0 dark:bg-black opacity-50"></div>
        <div class="relative z-10">
          <h1 class="text-4xl font-bold mb-4  dark:text-gray-200">标题</h1>
          <p class="text-gray-600 mb-8 dark:text-foreground">这里是描述内容。</p>
          <div class="flex justify-center space-x-4">
            <button class="bg-primary hover:bg-primary/85 whitespace-nowrap text-primary-foreground px-6 py-2 rounded">
              按钮1
            </button>
            <button class="bg-background shadow-sm border border-input hover:bg-accent hover:text-accent-foreground px-6 py-2 rounded flex items-center">
              按钮2
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
