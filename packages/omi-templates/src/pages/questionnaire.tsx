import '../components/omiu/calendar/index'
import '../components/omiu/button'
import '../components/omiu/select'

export function Questionnaire() {
  return (
    <div class="max-w-[800px] mx-auto px-4 py-10">
      <h1 class="text-3xl font-bold mb-6 text-center">调查问卷</h1>
      <form action="#" method="post">
        <div class="bg-background text-card-foreground p-6 rounded-xl shadow dark:border">
          <div class="mb-6">
            <label class="block mb-2">问题 1：您的年龄范围是？</label>
            <o-select
              class="w-40"
              value="18-24"
              options={[
                { text: '18-24', value: '18-24' },
                { text: '25-34', value: '25-34' },
                { text: '35-44', value: '35-44' },
                { text: '45-54', value: '45-54' },
                { text: '55-64', value: '55-64' },
                { text: '65+', value: '65+' },
              ]}
            ></o-select>
          </div>
          <div class="mb-6">
            <label class="block mb-2">问题 2：您的性别是？</label>
            <div class="flex items-center">
              <input
                type="radio"
                name="gender"
                id="male"
                class="relative float-left mt-0.5 h-4 w-4 mr-2 appearance-none rounded-full border border-solid border-zinc-400 before:pointer-events-none before:absolute before:h-3 before:w-3 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-3 after:w-3 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[8px] checked:after:w-[8px] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary"
              />
              <label for="male">男</label>
            </div>
            <div class="flex items-center">
              <input
                type="radio"
                name="gender"
                id="male"
                class="relative float-left mt-0.5 h-4 w-4 mr-2 appearance-none rounded-full border border-solid border-zinc-400 before:pointer-events-none before:absolute before:h-3 before:w-3 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-3 after:w-3 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[8px] checked:after:w-[8px] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary"
              />
              <label for="female">女</label>
            </div>
          </div>
          <div class="mb-6">
            <label class="block mb-2">问题 3：您的出生日期？</label>
            <div>
              <o-calendar value="2023-12-26" locale="zh"></o-calendar>
            </div>
          </div>
          <div class="mb-6">
            <label class="block mb-2">问题 4：您最喜欢的颜色是？</label>
            <div class="flex items-center">
              <input
                type="checkbox"
                name="color"
                id="red"
                class="mr-2 relative float-left h-[16px] w-[16px] appearance-none rounded-[2px] border border-solid border-zinc-400 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:ml-[4.7px] checked:after:mt-[0.5px] checked:after:block checked:after:h-[10px] checked:after:w-[5px] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:border-primary dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary"
              />
              <label for="red">红色</label>
            </div>
            <div class="flex items-center">
              <input
                type="checkbox"
                name="color"
                id="green"
                class="mr-2 relative float-left h-[16px] w-[16px] appearance-none rounded-[2px] border border-solid border-zinc-400 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:ml-[4.7px] checked:after:mt-[0.5px] checked:after:block checked:after:h-[10px] checked:after:w-[5px] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:border-primary dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary"
              />
              <label for="green">绿色</label>
            </div>
            <div class="flex items-center">
              <input
                type="checkbox"
                name="color"
                id="blue"
                class="mr-2 relative float-left h-[16px] w-[16px] appearance-none rounded-[2px] border border-solid border-zinc-400 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:ml-[4.7px] checked:after:mt-[0.5px] checked:after:block checked:after:h-[10px] checked:after:w-[5px] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:border-primary dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary"
              />
              <label for="blue">蓝色</label>
            </div>
          </div>
          <div class="mb-6">
            <label class="block mb-2">问题 5：您对我们的产品有什么建议？</label>
            <textarea class="w-full bg-background rounded-md border py-2 px-3 h-24"></textarea>
          </div>
          <div class="text-center">
            <o-button type="submit" theme="primary" cls="px-14">
              提交
            </o-button>
          </div>
        </div>
      </form>
    </div>
  )
}
