import '../components/omiu/calendar/index'
import '../components/omiu/button'

export function Questionnaire() {
  return (
    <div class="max-w-[800px] mx-auto text-left px-4 py-10">
      <h1 class="text-3xl font-bold mb-6">Button 按钮</h1>
      <p class="mb-6">按钮用于开启一个闭环的操作任务，如“删除”对象、“购买”商品等。</p>

      <h2 class="text-2xl font-bold mb-6">按钮类型</h2>

      <div class="flex gap-2">
        <o-button theme="default" variant="base">
          填充按钮
        </o-button>
        <o-button theme="default" variant="outline">
          描边按钮
        </o-button>
        <o-button theme="default" variant="dashed">
          虚框按钮
        </o-button>
        <o-button theme="default" variant="text">
          文字按钮
        </o-button>
      </div>
    </div>
  )
}
