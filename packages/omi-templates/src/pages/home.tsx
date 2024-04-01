import { isDark } from '../store.ts'
import '../components/omiu/button.tsx'

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
          <p class="text-zinc-600 mb-8 text-2xl dark:text-foreground">
            100+ 免费模板，对外站点、对内管理系统，开箱即用，自由定制，开源免费
          </p>
          <div class="flex space-x-4">
            <o-button theme="primary" tag="a" href="#/product-docs/zh/getting-started">
              开始使用
            </o-button>
            <o-button
              variant="outline"
              tag="a"
              target="_blank"
              theme="default"
              href="https://github.com/Tencent/omi/tree/master/packages/omi-templates"
            >
              <i class="t-icon t-icon-logo-github-filled text-lg"></i>源代码
            </o-button>
            <o-button theme="primary" tag="a" href="#/admin/home">
              🎉 管理系统
            </o-button>
          </div>
        </div>
      </section>

      <div class="container mx-auto -mt-24">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div class="dark:border bg-card text-card-foreground rounded-lg p-4 shadow">
            <div class="rounded-full bg-zinc-200 h-20 w-20 mx-auto mb-4 flex items-center justify-center text-5xl">
              🔪
            </div>
            <h2 class="text-2xl font-bold mb-2">刀锋锐利</h2>
            <p class="text-zinc-600 dark:text-card-foreground">
              Tailwind CSS为基础的响应式布局站点和管理系统，直接复制粘贴，到处都能用
            </p>
          </div>
          <div class="dark:border bg-card text-card-foreground rounded-lg p-4 shadow">
            <div class="rounded-full bg-zinc-200 h-20 w-20 mx-auto mb-4 flex items-center justify-center text-5xl">
              🎁
            </div>
            <h2 class="text-2xl font-bold mb-2">开箱即用</h2>
            <p class="text-zinc-600 dark:text-card-foreground">
              100+的模板，直接修修改改，打造成您自己的站点，也可以只配置 JSON，不需要任何前端知识
            </p>
          </div>

          <div class="dark:border bg-card text-card-foreground rounded-lg p-4 shadow">
            <div class="rounded-full bg-zinc-200 h-20 w-20 mx-auto mb-4 flex items-center justify-center text-5xl">
              ⚙️
            </div>
            <h2 class="text-2xl font-bold mb-2">自由定制</h2>
            <p class="text-zinc-600 dark:text-card-foreground">
              颜色、圆角、白天黑夜模式、多语言切换，自由设定，所有模板都是可扩展的 JSON
            </p>
          </div>
        </div>
      </div>

      <section class="container mx-auto flex items-center mt-12  px-4 md:px-10 rounded-xl shadow-lg bg-card text-card-foreground dark:border">
        <div class="w-1/2 p-4">
          <h1 class="text-4xl font-bold mb-4">标题</h1>
          <p class="text-zinc-600 mb-8 dark:text-foreground">
            这里是描述内容。这里是描述内容。这里是描述内容。这里是描述内容。这里是描述内容。这里是描述内容。这里是描述内容。这里是描述内容。
          </p>
          <div class="flex space-x-4">
            <o-button theme="primary">按钮1</o-button>
            <o-button variant="outline" theme="default">
              按钮2
            </o-button>
          </div>
        </div>
        <div class="w-1/2">
          <img
            src={`https://tdesign.gtimg.com/tdesign-starter/docs/starter-docs-industry-${
              isDark.value ? 'dark' : 'light'
            }.png`}
            alt="示例图片"
            class="w-full rounded-3xl overflow-hidden p-4"
          />
        </div>
      </section>

      <section class="container mx-auto flex items-center mt-12  px-4 md:px-10 rounded-xl shadow-lg bg-card text-card-foreground dark:border">
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
          <p class="text-zinc-600 mb-8 dark:text-foreground">
            这里是描述内容。这里是描述内容。这里是描述内容。这里是描述内容。这里是描述内容。这里是描述内容。这里是描述内容。
          </p>
        </div>
      </section>

      <section class="container mx-auto my-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="p-6 shadow rounded bg-card text-card-foreground dark:border">
          <h2 class="text-2xl font-bold mb-4">卡片1</h2>
          <p class="text-zinc-600 dark:text-card-foreground">这里是卡片1的描述内容。</p>
        </div>
        <div class=" p-6 shadow rounded bg-card text-card-foreground dark:border">
          <h2 class="text-2xl font-bold mb-4">卡片2</h2>
          <p class="text-zinc-600 dark:text-card-foreground">这里是卡片2的描述内容。</p>
        </div>
        <div class=" p-6 shadow rounded bg-card text-card-foreground dark:border">
          <h2 class="text-2xl font-bold mb-4">卡片3</h2>
          <p class="text-zinc-600 dark:text-card-foreground">这里是卡片3的描述内容。</p>
        </div>
        <div class=" p-6 shadow rounded bg-card text-card-foreground dark:border">
          <h2 class="text-2xl font-bold mb-4">卡片1</h2>
          <p class="text-zinc-600 dark:text-card-foreground">这里是卡片1的描述内容。</p>
        </div>
        <div class=" p-6 shadow rounded bg-card text-card-foreground dark:border">
          <h2 class="text-2xl font-bold mb-4">卡片2</h2>
          <p class="text-zinc-600 dark:text-card-foreground">这里是卡片2的描述内容。</p>
        </div>
        <div class=" p-6 shadow rounded bg-card text-card-foreground dark:border">
          <h2 class="text-2xl font-bold mb-4">卡片3</h2>
          <p class="text-zinc-600 dark:text-card-foreground">这里是卡片3的描述内容。</p>
        </div>
      </section>

      <section class="p-8 bg-background text-foreground mx-auto mt-12 h-[500px] text-center w-full bg-[url('https://www.apple.com/v/home/bi/images/heroes/iphone-15/hero_iphone15_announce__uuemlcwczn6u_mediumtall_2x.jpg')] bg-cover bg-center relative">
        <div class="absolute inset-0 dark:bg-black opacity-50"></div>
        <div class="relative z-10">
          <h1 class="text-4xl font-bold mb-4  dark:text-zinc-200">标题</h1>
          <p class="text-zinc-600 mb-8 dark:text-foreground">这里是描述内容。</p>
          <div class="flex justify-center space-x-4">
            <o-button theme="primary">按钮1</o-button>
            <o-button variant="outline" theme="default">
              按钮2
            </o-button>
          </div>
        </div>
      </section>
    </>
  )
}
