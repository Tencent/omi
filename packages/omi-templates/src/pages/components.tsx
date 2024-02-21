import '../components/omiu/calendar/index'
import '../components/omiu/button'
import '../components/omiu/switch'
import '../components/omiu/breadcrumb'

export function Questionnaire() {
  return (
    <div class="max-w-[800px] mx-auto text-left px-4 py-10">
      <h1 class="text-3xl font-bold mb-6">Button 按钮</h1>
      <p>按钮用于开启一个闭环的操作任务，如“删除”对象、“购买”商品等。</p>

      <h2 class="text-2xl font-bold my-6">按钮 Variant 和 Theme</h2>

      <div>
        <div class="flex gap-3 mb-2">
          <o-button theme="default">填充按钮</o-button>
          <o-button variant="outline" theme="default">
            描边按钮
          </o-button>
          <o-button variant="dashed" theme="default">
            虚框按钮
          </o-button>
          <o-button variant="text" theme="default">
            文字按钮
          </o-button>
        </div>
        <div class="flex gap-3 mb-2">
          <o-button theme="primary">填充按钮</o-button>
          <o-button variant="outline" theme="primary">
            描边按钮
          </o-button>
          <o-button variant="dashed" theme="primary">
            虚框按钮
          </o-button>
          <o-button variant="text" theme="primary">
            文字按钮
          </o-button>
        </div>
        <div class="flex gap-3 mb-2">
          <o-button theme="danger">填充按钮</o-button>
          <o-button variant="outline" theme="danger">
            描边按钮
          </o-button>
          <o-button variant="dashed" theme="danger">
            虚框按钮
          </o-button>
          <o-button variant="text" theme="danger">
            文字按钮
          </o-button>
        </div>
        <div class="flex gap-3 mb-2">
          <o-button theme="warning">填充按钮</o-button>
          <o-button variant="outline" theme="warning">
            描边按钮
          </o-button>
          <o-button variant="dashed" theme="warning">
            虚框按钮
          </o-button>
          <o-button variant="text" theme="warning">
            文字按钮
          </o-button>
        </div>
        <div class="flex gap-3 mb-2">
          <o-button theme="success">填充按钮</o-button>
          <o-button variant="outline" theme="success">
            描边按钮
          </o-button>
          <o-button variant="dashed" theme="success">
            虚框按钮
          </o-button>
          <o-button variant="text" theme="success">
            文字按钮
          </o-button>
        </div>
      </div>

      <h2 class="text-2xl font-bold my-6">图标按钮</h2>

      <div>
        <div class="flex gap-3 mb-2">
          <o-button theme="primary">
            <i class="t-icon t-icon-add text-base"></i>
            新建
          </o-button>
          <o-button variant="outline" icon="cloud-upload">
            上传文件
          </o-button>
          <o-button shape="circle" icon="discount" theme="primary"></o-button>
          <o-button shape="circle" icon="cloud-download" theme="primary"></o-button>
          <o-button variant="outline" icon="search">
            搜索
          </o-button>
        </div>
      </div>

      <h2 class="text-2xl font-bold my-6">不同状态的按钮</h2>

      <div>
        <div class="flex gap-3 mb-2">
          <o-button theme="primary" disabled>
            禁用的按钮
          </o-button>
          <o-button theme="primary" loading>
            加载中
          </o-button>
        </div>
      </div>

      <hr class="my-3"></hr>
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

      <hr class="my-3"></hr>
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
