import '@/components/omiu/switch'

export function Questionnaire() {
  return (
    <div class="max-w-[800px] mx-auto text-left px-4 py-10">
      <h1 class="text-3xl font-bold my-6">Switch 开关</h1>
      <p>用于两个互斥选项，用来打开或关闭选项的选择控件。</p>

      <h2 class="text-2xl font-bold my-6">不同尺寸</h2>
      <div class="flex gap-6 items-center">
        <o-switch size="small"></o-switch>
        <o-switch size="medium"></o-switch>
        <o-switch size="large"></o-switch>
      </div>

      <h2 class="text-2xl font-bold my-6">禁用</h2>
      <div class="flex gap-6 items-center">
        <o-switch disabled size="small"></o-switch>
        <o-switch disabled size="medium"></o-switch>
        <o-switch disabled size="large"></o-switch>
      </div>
    </div>
  )
}
