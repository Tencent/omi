export function Questionnaire() {
  return (
    <div class="max-w-[800px] mx-auto px-4 py-10">
      <h1 class="text-3xl font-bold mb-6 text-center">调查问卷</h1>
      <form action="#" method="post">
        <div class="bg-white p-6 rounded-xl shadow dark:brightness-90">
          <div class="mb-6">
            <label class="block text-gray-700 mb-2">问题 1：您的年龄范围是？</label>

            <select
              id="flavor"
              style="background-image: url('data:image/svg+xml;charset=UTF-8,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'currentColor\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3e%3cpolyline points=\'6 9 12 15 18 9\'%3e%3c/polyline%3e%3c/svg%3e'); background-size: 1em;  background-position: right 0.5rem center;"
              class="mt-1 block w-full px-2 py-1 rounded-md shadow-sm bg-white border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary focus:ring-opacity-50 bg-no-repeat appearance-none "
            >
              <option>18-24</option>
              <option>25-34</option>
              <option>35-44</option>
              <option>45-54</option>
              <option>55-64</option>
              <option>65+</option>
            </select>
          </div>
          <div class="mb-6">
            <label class="block text-gray-700 mb-2">问题 2：您的性别是？</label>
            <div>
              <input type="radio" name="gender" id="male" class="mr-2" />
              <label for="male">男</label>
            </div>
            <div>
              <input type="radio" name="gender" id="female" class="mr-2" />
              <label for="female">女</label>
            </div>
          </div>
          <div class="mb-6">
            <label class="block text-gray-700 mb-2">问题 3：您最喜欢的颜色是？</label>
            <div>
              <input type="checkbox" name="color" id="red" class="mr-2" />
              <label for="red">红色</label>
            </div>
            <div>
              <input type="checkbox" name="color" id="green" class="mr-2" />
              <label for="green">绿色</label>
            </div>
            <div>
              <input type="checkbox" name="color" id="blue" class="mr-2" />
              <label for="blue">蓝色</label>
            </div>
          </div>
          <div class="mb-6">
            <label class="block text-gray-700 mb-2">问题 4：您对我们的产品有什么建议？</label>
            <textarea class="w-full rounded-md border py-2 px-3 text-gray-700 h-24"></textarea>
          </div>
          <div class="text-center">
            <button type="submit" class="bg-primary w-48 mx-auto text-white px-6 py-2 rounded hover:bg-primary/85">
              提交
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
