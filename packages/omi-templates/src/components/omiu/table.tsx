import { Component, tag } from 'omi'
import './tag.tsx'

@tag('o-table')
export class Table extends Component {
  render() {
    return (
      <div class="relative overflow-auto shadow-md sm:rounded-t-lg">
        <table class="table-fixed w-full text-sm text-left rtl:text-right background text-card-foreground">
          <thead>
            <tr class="[&>th]:font-normal [&>th]:text-zinc-500">
              <th scope="col" class="p-3 w-4">
                <div class="flex items-center">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    class="w-4 h-4  border-zinc-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-zinc-800 dark:focus:ring-offset-zinc-800 focus:ring-2 er-zinc-600"
                  />
                  <label for="checkbox-all-search" class="sr-only">
                    checkbox
                  </label>
                </div>
              </th>
              <th scope="col" class="px-6 py-3 w-32">
                产品名称
              </th>
              <th scope="col" class="px-6 py-3  w-24">
                颜色
              </th>
              <th scope="col" class="px-6 py-3  w-24">
                类型
              </th>
              <th scope="col" class="px-6 py-3  w-20">
                附件
              </th>
              <th scope="col" class="px-6 py-3  w-20">
                有货
              </th>
              <th scope="col" class="px-6 py-3 w-24">
                价格
              </th>
              <th scope="col" class="px-6 py-3 w-24">
                重量
              </th>
              <th scope="col" class="px-6 py-3 sticky w-32 bg-background right-0 text-right">
                操作
              </th>
            </tr>
          </thead>
          <tbody>
            {Array(5)
              .fill(0)
              .map(() => {
                return (
                  <tr class="group  border-b  dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-600">
                    <td class="w-4 p-3">
                      <div class="flex items-center">
                        <input
                          id="checkbox-table-search-1"
                          type="checkbox"
                          class="w-4 h-4 text-blue-600 bg-zinc-100 border-zinc-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-zinc-800 dark:focus:ring-offset-zinc-800 focus:ring-2 dark:bg-zinc-700 dark:border-zinc-600"
                        />
                        <label for="checkbox-table-search-1" class="sr-only">
                          checkbox
                        </label>
                      </div>
                    </td>
                    <th scope="row" class="px-6 py-3 font-medium whitespace-nowrap text-ellipsis overflow-hidden w-32">
                      苹果笔记本
                    </th>
                    <td class="px-6 py-3 w-24">银色</td>
                    <td class="px-6 py-3 w-24">Laptop</td>
                    <td class="px-6 py-3 w-20">
                      <o-tag>带有</o-tag>
                    </td>
                    <td class="px-6 py-3 w-20">是</td>
                    <td class="px-6 py-3 w-24">¥12999</td>
                    <td class="px-6 py-3 w-24">3.0kg</td>
                    <td class=" items-center px-6 py-3 sticky w-32 right-0 bg-background group-hover:bg-zinc-50 dark:group-hover:bg-zinc-600 text-right">
                      <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                        编辑
                      </a>
                      <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline ms-3">
                        删除
                      </a>
                    </td>
                  </tr>
                )
              })}
          </tbody>
        </table>
      </div>
    )
  }
}
