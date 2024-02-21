import '../components/omiu/table'
import '../components/omiu/switch'

export function Personal() {
  return (
    <div class="container mx-auto px-4 pt-8 mb-6 text-sm">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div class="md:col-span-3">
          <div class="flex items-center justify-between mb-4 border bg-background text-foreground p-4 rounded-md">
            <div>
              <h1 class="text-xl font-bold mb-2">Hi, 小Q</h1>
              <p>下午好，今天是你加入鹅厂的第 100 天～</p>
            </div>
            <img
              src="https://static.tdesign.tencent.com/starter/vue/assets/assets-tencent-logo-8e311c68.png"
              alt="Logo"
              class="h-6"
            />
          </div>

          <div class="mb-4 border bg-background text-foreground rounded-md p-4">
            <h2 class="text-xl font-bold mb-4">个人信息</h2>
            <div class="grid grid-cols-2 gap-4">
              <div class="flex items-center">
                {/* <img src="https://via.placeholder.com/50" alt="头像" class="rounded-full" /> */}
                <span>昵称：小Q</span>
              </div>
              <div>性别：男</div>
              <div>出生日期：1990-01-01</div>
              <div>邮箱：omi@example.com</div>
              <div>手机号：1234567890</div>
              <div>微信：OMI</div>
              <div>QQ：123456789</div>
              <div>邮寄地址：深圳市南山区科技园100号</div>
            </div>
          </div>

          <div class="mb-4 border bg-background text-foreground rounded-md p-4">
            {/* <h2 class="text-xl font-bold mb-4">我的收藏和评论</h2> */}
            <div>
              <div class="border-b">
                <nav class="-mb-px flex gap-3" aria-label="Tabs">
                  <a
                    href="javascript:void(0)"
                    class="text-zinc-700 dark:text-white border-zinc-300  py-4 px-1 text-center border-b-2 font-medium text-sm"
                    aria-current="page"
                  >
                    我的收藏
                  </a>
                  <a
                    href="javascript:void(0)"
                    class="border-transparent text-zinc-500 hover:text-foreground hover:border-zinc-300 py-4 px-1 text-center border-b-2 font-medium text-sm"
                  >
                    我点的赞
                  </a>
                  <a
                    href="javascript:void(0)"
                    class="border-transparent text-zinc-500 hover:text-foreground hover:border-zinc-300 py-4 px-1 text-center border-b-2 font-medium text-sm"
                  >
                    给我点赞
                  </a>
                </nav>
              </div>

              <div class="mt-4">
                <div class="bg-background text-foreground">
                  <div class="container mx-auto">
                    <div class="overflow-x-auto">
                      <o-table></o-table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="border bg-background text-foreground rounded-md p-4">
            <h2 class="text-xl font-bold mb-4">设置</h2>
            <div class="grid grid-cols-2 gap-4">
              <div class="flex items-center">
                <div class="mr-2 flex items-center">
                  <i class="t-icon t-icon-address-book"></i>
                </div>
                <p class="mr-4">账户设置</p>
                <o-switch value={true} size="small"></o-switch>
              </div>
              <div class="flex items-center">
                <div class="mr-2 flex items-center">
                  <i class="t-icon t-icon-alarm"></i>
                </div>
                <p class="mr-4">隐私设置</p>
                <o-switch size="small"></o-switch>
              </div>
              <div class="flex items-center">
                <div class="mr-2 flex items-center">
                  <i class="t-icon t-icon-bridge-1"></i>
                </div>
                <p class="mr-4">通知设置</p>
                <o-switch size="small"></o-switch>
              </div>
              <div class="flex items-center">
                <div class="mr-2 flex items-center">
                  <i class="t-icon t-icon-cast"></i>
                </div>
                <p class="mr-4">权限设置</p>
                <o-switch value={true} size="small"></o-switch>
              </div>
              <div class="flex items-center">
                <div class="mr-2 flex items-center">
                  <i class="t-icon t-icon-heart"></i>
                </div>
                <p class="mr-4">点赞设置</p>
                <o-switch value={true} size="small"></o-switch>
              </div>
              <div class="flex items-center">
                <div class="mr-2 flex items-center">
                  <i class="t-icon t-icon-user-transmit"></i>
                </div>
                <p class="mr-4">关注设置</p>
                <o-switch size="small"></o-switch>
              </div>
              <div class="flex items-center">
                <div class="mr-2 flex items-center">
                  <i class="t-icon t-icon-user-search"></i>
                </div>
                <p class="mr-4">查看设置</p>
                <o-switch size="small"></o-switch>
              </div>
            </div>
          </div>
        </div>

        <div class=" pb-6 ">
          <div class="mb-4 border text-white rounded-md p-4 bg-primary">
            <img
              src="https://avatars.githubusercontent.com/u/7917954?v=4"
              alt="头像"
              class="rounded-full w-16 mx-auto mb-4"
            />
            <h2 class="text-center text-xl font-bold mb-2">英文名</h2>
            <p class="text-center">描述</p>
          </div>

          <div class="mb-4 border bg-background text-foreground rounded-md p-4">
            <h2 class="text-xl font-bold mb-4">团队成员</h2>
            <ul>
              <li class="flex items-center mb-4">
                <img src="https://via.placeholder.com/40" alt="头像" class="rounded-full" />
                <div class="ml-4">
                  <h3 class="font-bold">姓名</h3>
                  <p>描述</p>
                </div>
              </li>
              <li class="flex items-center mb-4">
                <img src="https://via.placeholder.com/40" alt="头像" class="rounded-full" />
                <div class="ml-4">
                  <h3 class="font-bold">姓名</h3>
                  <p>描述</p>
                </div>
              </li>
              <li class="flex items-center mb-4">
                <img src="https://via.placeholder.com/40" alt="头像" class="rounded-full" />
                <div class="ml-4">
                  <h3 class="font-bold">姓名</h3>
                  <p>描述</p>
                </div>
              </li>
              <li class="flex items-center mb-4">
                <img src="https://via.placeholder.com/40" alt="头像" class="rounded-full" />
                <div class="ml-4">
                  <h3 class="font-bold">姓名</h3>
                  <p>描述</p>
                </div>
              </li>
              <li class="flex items-center mb-4">
                <img src="https://via.placeholder.com/40" alt="头像" class="rounded-full" />
                <div class="ml-4">
                  <h3 class="font-bold">姓名</h3>
                  <p>描述</p>
                </div>
              </li>
            </ul>
          </div>

          <div class="border bg-background text-foreground rounded-md p-4">
            <h2 class="text-xl font-bold mb-4">服务产品</h2>
            <div class="grid grid-cols-3 gap-4">
              <img src="https://via.placeholder.com/80" alt="Logo" />
              <img src="https://via.placeholder.com/80" alt="Logo" />
              <img src="https://via.placeholder.com/80" alt="Logo" />
              <img src="https://via.placeholder.com/80" alt="Logo" />
              <img src="https://via.placeholder.com/80" alt="Logo" />
              <img src="https://via.placeholder.com/80" alt="Logo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
