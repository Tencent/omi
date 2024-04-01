import '@/components/omiu/breadcrumb'

export function Questionnaire() {
  return (
    <div class="max-w-[800px] mx-auto text-left px-4 py-10">
      <h1 class="text-3xl font-bold my-6">Breadcrumb 面包屑</h1>
      <p>显示当前页面在系统层级结构的位置，并能返回之前任意层级的页面。</p>

      <h2 class="text-2xl font-bold my-6">默认</h2>
      <div class="flex gap-6 items-center">
        <o-breadcrumb
          items={[
            {
              label: 'Home',
              icon: 'home',
              href: '#/',
            },
            {
              label: 'Project',
            },
            {
              label: 'OMI',
            },
          ]}
        ></o-breadcrumb>
      </div>
    </div>
  )
}
