import { Component, tag } from 'omi'

@tag('o-table')
export class Table extends Component {
  render() {
    return (
      <div class="relative overflow-auto shadow-md sm:rounded-t-lg">
        <table class="table-fixed w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="p-4 w-4">
                <div class="flex items-center">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
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
              <th scope="col" class="px-6 py-3 sticky w-32 bg-gray-50 dark:bg-gray-700 right-0 text-right">
                操作
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="group bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td class="w-4 p-4">
                <div class="flex items-center">
                  <input
                    id="checkbox-table-search-1"
                    type="checkbox"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label for="checkbox-table-search-1" class="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-ellipsis overflow-hidden dark:text-white w-32"
              >
                苹果笔记本
              </th>
              <td class="px-6 py-4 w-24">银色</td>
              <td class="px-6 py-4 w-24">Laptop</td>
              <td class="px-6 py-4 w-20">是</td>
              <td class="px-6 py-4 w-20">是</td>
              <td class="px-6 py-4 w-24">¥12999</td>
              <td class="px-6 py-4 w-24">3.0kg</td>
              <td class=" items-center px-6 py-4 sticky w-32 right-0 bg-white  dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-600 text-right">
                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                  编辑
                </a>
                <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline ms-3">
                  删除
                </a>
              </td>
            </tr>
            <tr class="group bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td class="w-4 p-4">
                <div class="flex items-center">
                  <input
                    id="checkbox-table-search-1"
                    type="checkbox"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label for="checkbox-table-search-1" class="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-ellipsis overflow-hidden dark:text-white w-32"
              >
                苹果笔记本
              </th>
              <td class="px-6 py-4 w-24">银色</td>
              <td class="px-6 py-4 w-24">Laptop</td>
              <td class="px-6 py-4 w-20">是</td>
              <td class="px-6 py-4 w-20">是</td>
              <td class="px-6 py-4 w-24">¥12999</td>
              <td class="px-6 py-4 w-24">3.0kg</td>
              <td class=" items-center px-6 py-4 sticky w-32 right-0 bg-white  dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-600 text-right">
                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                  编辑
                </a>
                <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline ms-3">
                  删除
                </a>
              </td>
            </tr>
            <tr class="group bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td class="w-4 p-4">
                <div class="flex items-center">
                  <input
                    id="checkbox-table-search-1"
                    type="checkbox"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label for="checkbox-table-search-1" class="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-ellipsis overflow-hidden dark:text-white w-32"
              >
                苹果笔记本
              </th>
              <td class="px-6 py-4 w-24">银色</td>
              <td class="px-6 py-4 w-24">Laptop</td>
              <td class="px-6 py-4 w-20">是</td>
              <td class="px-6 py-4 w-20">是</td>
              <td class="px-6 py-4 w-24">¥12999</td>
              <td class="px-6 py-4 w-24">3.0kg</td>
              <td class=" items-center px-6 py-4 sticky w-32 right-0 bg-white  dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-600 text-right">
                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                  编辑
                </a>
                <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline ms-3">
                  删除
                </a>
              </td>
            </tr>
            <tr class="group bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td class="w-4 p-4">
                <div class="flex items-center">
                  <input
                    id="checkbox-table-search-1"
                    type="checkbox"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label for="checkbox-table-search-1" class="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-ellipsis overflow-hidden dark:text-white w-32"
              >
                苹果笔记本
              </th>
              <td class="px-6 py-4 w-24">银色</td>
              <td class="px-6 py-4 w-24">Laptop</td>
              <td class="px-6 py-4 w-20">是</td>
              <td class="px-6 py-4 w-20">是</td>
              <td class="px-6 py-4 w-24">¥12999</td>
              <td class="px-6 py-4 w-24">3.0kg</td>
              <td class=" items-center px-6 py-4 sticky w-32 right-0 bg-white  dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-600 text-right">
                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                  编辑
                </a>
                <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline ms-3">
                  删除
                </a>
              </td>
            </tr>
            <tr class="group bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td class="w-4 p-4">
                <div class="flex items-center">
                  <input
                    id="checkbox-table-search-1"
                    type="checkbox"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label for="checkbox-table-search-1" class="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-ellipsis overflow-hidden dark:text-white w-32"
              >
                苹果笔记本
              </th>
              <td class="px-6 py-4 w-24">银色</td>
              <td class="px-6 py-4 w-24">Laptop</td>
              <td class="px-6 py-4 w-20">是</td>
              <td class="px-6 py-4 w-20">是</td>
              <td class="px-6 py-4 w-24">¥12999</td>
              <td class="px-6 py-4 w-24">3.0kg</td>
              <td class=" items-center px-6 py-4 sticky w-32 right-0 bg-white  dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-600 text-right">
                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                  编辑
                </a>
                <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline ms-3">
                  删除
                </a>
              </td>
            </tr>
            <tr class="group bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td class="w-4 p-4">
                <div class="flex items-center">
                  <input
                    id="checkbox-table-search-1"
                    type="checkbox"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label for="checkbox-table-search-1" class="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-ellipsis overflow-hidden dark:text-white w-32"
              >
                苹果笔记本
              </th>
              <td class="px-6 py-4 w-24">银色</td>
              <td class="px-6 py-4 w-24">Laptop</td>
              <td class="px-6 py-4 w-20">是</td>
              <td class="px-6 py-4 w-20">是</td>
              <td class="px-6 py-4 w-24">¥12999</td>
              <td class="px-6 py-4 w-24">3.0kg</td>
              <td class=" items-center px-6 py-4 sticky w-32 right-0 bg-white  dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-600 text-right">
                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                  编辑
                </a>
                <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline ms-3">
                  删除
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}
