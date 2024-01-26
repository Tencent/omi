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
          <p class="text-gray-600 mb-8 text-2xl dark:text-background-foreground">
            100+ 免费模板，站点、管理系统都有，开箱即用，自由定制，开源免费
          </p>
          <div class="flex space-x-4">
            <a href="/#/product-docs" class="bg-primary text-primary-foreground px-6 py-2 rounded">
              开始使用
            </a>
            <a
              target="_blank"
              href="https://github.com/Tencent/omi/tree/master/packages/omi-templates"
              class="bg-secondary text-secondary-foreground px-6 py-2 rounded"
            >
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

      <section class="container mx-auto flex items-center mt-12  px-4 md:px-10 rounded-xl shadow-lg bg-background text-background-foreground border">
        <div class="w-1/2 p-4">
          <h1 class="text-4xl font-bold mb-4">标题</h1>
          <p class="text-gray-600 mb-8 dark:text-background-foreground">
            这里是描述内容。这里是描述内容。这里是描述内容。这里是描述内容。这里是描述内容。这里是描述内容。这里是描述内容。这里是描述内容。
          </p>
          <div class="flex space-x-4">
            <button class="bg-primary whitespace-nowrap text-white px-6 py-2 rounded">按钮1</button>
            <button class="bg-gray-300 whitespace-nowrap text-gray-700 px-6 py-2 rounded">按钮2</button>
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

      <section class="container mx-auto flex items-center mt-12  px-4 md:px-10 rounded-xl shadow-lg bg-background text-background-foreground border">
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
          <p class="text-gray-600 mb-8 dark:text-background-foreground">
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

      <section class="p-8 bg-background text-background-foreground mx-auto mt-12 h-[500px] text-center w-full bg-[url('https://www.apple.com/v/home/bi/images/heroes/iphone-15/hero_iphone15_announce__uuemlcwczn6u_mediumtall_2x.jpg')] bg-cover bg-center relative">
        <div class="absolute inset-0 dark:bg-black opacity-50"></div>
        <div class="relative z-10">
          <h1 class="text-4xl font-bold mb-4  dark:text-gray-200">标题</h1>
          <p class="text-gray-600 mb-8 dark:text-background-foreground">这里是描述内容。</p>
          <div class="flex justify-center space-x-4">
            <button class="bg-primary whitespace-nowrap text-primary-foreground px-6 py-2 rounded">按钮1</button>
            <button class="bg-secondary whitespace-nowrap text-secondary-foreground px-6 py-2 rounded">按钮2</button>
          </div>
        </div>
      </section>
    </>
  )
}
