import { tag, Component, bind } from 'omi'
import { Collapse, Ripple, Modal } from 'omi-elements'
import { tailwind } from '@/tailwind'
import '@/components/code-showcase'

@tag('tables-page')
export default class TablesPage extends Component {
  static css = [tailwind]

  render() {
    return (
      <div className="container my-12 !max-w-full">
        <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal">Basic example</h2>
        <code-showcase
          code={`<div className="flex flex-col">
  <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
      <div className="overflow-hidden">
        <table className="min-w-full text-left text-sm font-light">
          <thead className="border-b font-medium dark:border-neutral-500">
            <tr>
              <th scope="col" className="px-6 py-4">
                #
              </th>
              <th scope="col" className="px-6 py-4">
                First
              </th>
              <th scope="col" className="px-6 py-4">
                Last
              </th>
              <th scope="col" className="px-6 py-4">
                Handle
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b dark:border-neutral-500">
              <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
              <td className="whitespace-nowrap px-6 py-4">Mark</td>
              <td className="whitespace-nowrap px-6 py-4">Otto</td>
              <td className="whitespace-nowrap px-6 py-4">@mdo</td>
            </tr>
            <tr className="border-b dark:border-neutral-500">
              <td className="whitespace-nowrap px-6 py-4 font-medium">2</td>
              <td className="whitespace-nowrap px-6 py-4">Jacob</td>
              <td className="whitespace-nowrap px-6 py-4">Thornton</td>
              <td className="whitespace-nowrap px-6 py-4">@fat</td>
            </tr>
            <tr className="border-b dark:border-neutral-500">
              <td className="whitespace-nowrap px-6 py-4 font-medium">3</td>
              <td className="whitespace-nowrap px-6 py-4">Larry</td>
              <td className="whitespace-nowrap px-6 py-4">Wild</td>
              <td className="whitespace-nowrap px-6 py-4">@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>`}
        >
          <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  <table className="min-w-full text-left text-sm font-light">
                    <thead className="border-b font-medium dark:border-neutral-500">
                      <tr>
                        <th scope="col" className="px-6 py-4">
                          #
                        </th>
                        <th scope="col" className="px-6 py-4">
                          First
                        </th>
                        <th scope="col" className="px-6 py-4">
                          Last
                        </th>
                        <th scope="col" className="px-6 py-4">
                          Handle
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b dark:border-neutral-500">
                        <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
                        <td className="whitespace-nowrap px-6 py-4">Mark</td>
                        <td className="whitespace-nowrap px-6 py-4">Otto</td>
                        <td className="whitespace-nowrap px-6 py-4">@mdo</td>
                      </tr>
                      <tr className="border-b dark:border-neutral-500">
                        <td className="whitespace-nowrap px-6 py-4 font-medium">2</td>
                        <td className="whitespace-nowrap px-6 py-4">Jacob</td>
                        <td className="whitespace-nowrap px-6 py-4">Thornton</td>
                        <td className="whitespace-nowrap px-6 py-4">@fat</td>
                      </tr>
                      <tr className="border-b dark:border-neutral-500">
                        <td className="whitespace-nowrap px-6 py-4 font-medium">3</td>
                        <td className="whitespace-nowrap px-6 py-4">Larry</td>
                        <td className="whitespace-nowrap px-6 py-4">Wild</td>
                        <td className="whitespace-nowrap px-6 py-4">@twitter</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </code-showcase>

        <hr className="my-5"></hr>

        <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal">Variants</h2>
        <code-showcase
          code={`<div className="flex flex-col">
  <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
      <div className="overflow-hidden">
        <table className="min-w-full text-center text-sm font-light">
          <thead className="border-b font-medium dark:border-neutral-500">
            <tr>
              <th scope="col" className="px-6 py-4">
                className
              </th>
              <th scope="col" className="px-6 py-4">
                Heading
              </th>
              <th scope="col" className="px-6 py-4">
                Heading
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b dark:border-neutral-500">
              <td className="whitespace-nowrap px-6 py-4 font-medium">Default</td>
              <td className="whitespace-nowrap px-6 py-4">Cell</td>
              <td className="whitespace-nowrap px-6 py-4">Cell</td>
            </tr>
            <tr className="border-b border-primary-200 bg-primary-100 text-neutral-800">
              <td className="whitespace-nowrap px-6 py-4 font-medium">Primary</td>
              <td className="whitespace-nowrap px-6 py-4">Cell</td>
              <td className="whitespace-nowrap px-6 py-4">Cell</td>
            </tr>
            <tr className="border-b border-secondary-200 bg-secondary-100 text-neutral-800">
              <td className="whitespace-nowrap px-6 py-4 font-medium">Secondary</td>
              <td className="whitespace-nowrap px-6 py-4">Cell</td>
              <td className="whitespace-nowrap px-6 py-4">Cell</td>
            </tr>
            <tr className="border-b border-success-200 bg-success-100 text-neutral-800">
              <td className="whitespace-nowrap px-6 py-4 font-medium">Success</td>
              <td className="whitespace-nowrap px-6 py-4">Cell</td>
              <td className="whitespace-nowrap px-6 py-4">Cell</td>
            </tr>
            <tr className="border-b border-danger-200 bg-danger-100 text-neutral-800">
              <td className="whitespace-nowrap px-6 py-4 font-medium">Danger</td>
              <td className="whitespace-nowrap px-6 py-4">Cell</td>
              <td className="whitespace-nowrap px-6 py-4">Cell</td>
            </tr>
            <tr className="border-b border-warning-200 bg-warning-100 text-neutral-800">
              <td className="whitespace-nowrap px-6 py-4 font-medium">Warning</td>
              <td className="whitespace-nowrap px-6 py-4">Cell</td>
              <td className="whitespace-nowrap px-6 py-4">Cell</td>
            </tr>
            <tr className="border-b border-info-200 bg-info-100 text-neutral-800">
              <td className="whitespace-nowrap px-6 py-4 font-medium">Info</td>
              <td className="whitespace-nowrap px-6 py-4">Cell</td>
              <td className="whitespace-nowrap px-6 py-4">Cell</td>
            </tr>
            <tr className="border-b border-neutral-100 bg-neutral-50 text-neutral-800 dark:bg-neutral-50">
              <td className="whitespace-nowrap px-6 py-4 font-medium">Light</td>
              <td className="whitespace-nowrap px-6 py-4">Cell</td>
              <td className="whitespace-nowrap px-6 py-4">Cell</td>
            </tr>
            <tr className="border-b border-neutral-700 bg-neutral-800 text-neutral-50 dark:border-neutral-600 dark:bg-neutral-700">
              <td className="whitespace-nowrap px-6 py-4 font-medium">Dark</td>
              <td className="whitespace-nowrap px-6 py-4">Cell</td>
              <td className="whitespace-nowrap px-6 py-4">Cell</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>`}
        >
          <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  <table className="min-w-full text-center text-sm font-light">
                    <thead className="border-b font-medium dark:border-neutral-500">
                      <tr>
                        <th scope="col" className="px-6 py-4">
                          className
                        </th>
                        <th scope="col" className="px-6 py-4">
                          Heading
                        </th>
                        <th scope="col" className="px-6 py-4">
                          Heading
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b dark:border-neutral-500">
                        <td className="whitespace-nowrap px-6 py-4 font-medium">Default</td>
                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                      </tr>
                      <tr className="border-b border-primary-200 bg-primary-100 text-neutral-800">
                        <td className="whitespace-nowrap px-6 py-4 font-medium">Primary</td>
                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                      </tr>
                      <tr className="border-b border-secondary-200 bg-secondary-100 text-neutral-800">
                        <td className="whitespace-nowrap px-6 py-4 font-medium">Secondary</td>
                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                      </tr>
                      <tr className="border-b border-success-200 bg-success-100 text-neutral-800">
                        <td className="whitespace-nowrap px-6 py-4 font-medium">Success</td>
                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                      </tr>
                      <tr className="border-b border-danger-200 bg-danger-100 text-neutral-800">
                        <td className="whitespace-nowrap px-6 py-4 font-medium">Danger</td>
                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                      </tr>
                      <tr className="border-b border-warning-200 bg-warning-100 text-neutral-800">
                        <td className="whitespace-nowrap px-6 py-4 font-medium">Warning</td>
                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                      </tr>
                      <tr className="border-b border-info-200 bg-info-100 text-neutral-800">
                        <td className="whitespace-nowrap px-6 py-4 font-medium">Info</td>
                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                      </tr>
                      <tr className="border-b border-neutral-100 bg-neutral-50 text-neutral-800 dark:bg-neutral-50">
                        <td className="whitespace-nowrap px-6 py-4 font-medium">Light</td>
                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                      </tr>
                      <tr className="border-b border-neutral-700 bg-neutral-800 text-neutral-50 dark:border-neutral-600 dark:bg-neutral-700">
                        <td className="whitespace-nowrap px-6 py-4 font-medium">Dark</td>
                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </code-showcase>

        <hr className="my-5"></hr>

        <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal">Striped</h2>
        <code-showcase
          code={`<div className="flex flex-col">
  <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
      <div className="overflow-hidden">
        <table className="min-w-full text-left text-sm font-light">
          <thead className="border-b bg-white font-medium dark:border-neutral-500 dark:bg-neutral-600">
            <tr>
              <th scope="col" className="px-6 py-4">
                #
              </th>
              <th scope="col" className="px-6 py-4">
                First
              </th>
              <th scope="col" className="px-6 py-4">
                Last
              </th>
              <th scope="col" className="px-6 py-4">
                Handle
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b bg-neutral-100 dark:border-neutral-500 dark:bg-neutral-700">
              <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
              <td className="whitespace-nowrap px-6 py-4">Mark</td>
              <td className="whitespace-nowrap px-6 py-4">Otto</td>
              <td className="whitespace-nowrap px-6 py-4">@mdo</td>
            </tr>
            <tr className="border-b bg-white dark:border-neutral-500 dark:bg-neutral-600">
              <td className="whitespace-nowrap px-6 py-4 font-medium">2</td>
              <td className="whitespace-nowrap px-6 py-4">Jacob</td>
              <td className="whitespace-nowrap px-6 py-4">Thornton</td>
              <td className="whitespace-nowrap px-6 py-4">@fat</td>
            </tr>
            <tr className="border-b bg-neutral-100 dark:border-neutral-500 dark:bg-neutral-700">
              <td className="whitespace-nowrap px-6 py-4 font-medium">3</td>
              <td colSpan={2} className="whitespace-nowrap px-6 py-4 text-center">
                Larry the Bird
              </td>
              <td className="whitespace-nowrap px-6 py-4">@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>`}
        >
          <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  <table className="min-w-full text-left text-sm font-light">
                    <thead className="border-b bg-white font-medium dark:border-neutral-500 dark:bg-neutral-600">
                      <tr>
                        <th scope="col" className="px-6 py-4">
                          #
                        </th>
                        <th scope="col" className="px-6 py-4">
                          First
                        </th>
                        <th scope="col" className="px-6 py-4">
                          Last
                        </th>
                        <th scope="col" className="px-6 py-4">
                          Handle
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b bg-neutral-100 dark:border-neutral-500 dark:bg-neutral-700">
                        <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
                        <td className="whitespace-nowrap px-6 py-4">Mark</td>
                        <td className="whitespace-nowrap px-6 py-4">Otto</td>
                        <td className="whitespace-nowrap px-6 py-4">@mdo</td>
                      </tr>
                      <tr className="border-b bg-white dark:border-neutral-500 dark:bg-neutral-600">
                        <td className="whitespace-nowrap px-6 py-4 font-medium">2</td>
                        <td className="whitespace-nowrap px-6 py-4">Jacob</td>
                        <td className="whitespace-nowrap px-6 py-4">Thornton</td>
                        <td className="whitespace-nowrap px-6 py-4">@fat</td>
                      </tr>
                      <tr className="border-b bg-neutral-100 dark:border-neutral-500 dark:bg-neutral-700">
                        <td className="whitespace-nowrap px-6 py-4 font-medium">3</td>
                        <td colSpan={2} className="whitespace-nowrap px-6 py-4 text-center">
                          Larry the Bird
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">@twitter</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </code-showcase>

        <hr className="my-5"></hr>

        <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal">Hoverable</h2>
        <code-showcase
          code={`<div className="flex flex-col">
  <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
      <div className="overflow-hidden">
        <table className="min-w-full text-left text-sm font-light">
          <thead className="border-b font-medium dark:border-neutral-500">
            <tr>
              <th scope="col" className="px-6 py-4">
                #
              </th>
              <th scope="col" className="px-6 py-4">
                First
              </th>
              <th scope="col" className="px-6 py-4">
                Last
              </th>
              <th scope="col" className="px-6 py-4">
                Handle
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
              <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
              <td className="whitespace-nowrap px-6 py-4">Mark</td>
              <td className="whitespace-nowrap px-6 py-4">Otto</td>
              <td className="whitespace-nowrap px-6 py-4">@mdo</td>
            </tr>
            <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
              <td className="whitespace-nowrap px-6 py-4 font-medium">2</td>
              <td className="whitespace-nowrap px-6 py-4">Jacob</td>
              <td className="whitespace-nowrap px-6 py-4">Thornton</td>
              <td className="whitespace-nowrap px-6 py-4">@fat</td>
            </tr>
            <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
              <td className="whitespace-nowrap px-6 py-4 font-medium">3</td>
              <td className="whitespace-nowrap px-6 py-4">Larry</td>
              <td className="whitespace-nowrap px-6 py-4">Wild</td>
              <td className="whitespace-nowrap px-6 py-4">@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>`}
        >
          <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  <table className="min-w-full text-left text-sm font-light">
                    <thead className="border-b font-medium dark:border-neutral-500">
                      <tr>
                        <th scope="col" className="px-6 py-4">
                          #
                        </th>
                        <th scope="col" className="px-6 py-4">
                          First
                        </th>
                        <th scope="col" className="px-6 py-4">
                          Last
                        </th>
                        <th scope="col" className="px-6 py-4">
                          Handle
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                        <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
                        <td className="whitespace-nowrap px-6 py-4">Mark</td>
                        <td className="whitespace-nowrap px-6 py-4">Otto</td>
                        <td className="whitespace-nowrap px-6 py-4">@mdo</td>
                      </tr>
                      <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                        <td className="whitespace-nowrap px-6 py-4 font-medium">2</td>
                        <td className="whitespace-nowrap px-6 py-4">Jacob</td>
                        <td className="whitespace-nowrap px-6 py-4">Thornton</td>
                        <td className="whitespace-nowrap px-6 py-4">@fat</td>
                      </tr>
                      <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                        <td className="whitespace-nowrap px-6 py-4 font-medium">3</td>
                        <td className="whitespace-nowrap px-6 py-4">Larry</td>
                        <td className="whitespace-nowrap px-6 py-4">Wild</td>
                        <td className="whitespace-nowrap px-6 py-4">@twitter</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </code-showcase>

        <hr className="my-5"></hr>

        <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal">Bordered</h2>
        <code-showcase
          code={`<div className="flex flex-col">
  <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
      <div className="overflow-hidden">
        <table className="min-w-full border text-center text-sm font-light dark:border-neutral-500">
          <thead className="border-b font-medium dark:border-neutral-500">
            <tr>
              <th scope="col" className="border-r px-6 py-4 dark:border-neutral-500">
                #
              </th>
              <th scope="col" className="border-r px-6 py-4 dark:border-neutral-500">
                First
              </th>
              <th scope="col" className="border-r px-6 py-4 dark:border-neutral-500">
                Last
              </th>
              <th scope="col" className="px-6 py-4">
                Handle
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b dark:border-neutral-500">
              <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">1</td>
              <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">Mark</td>
              <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">Otto</td>
              <td className="whitespace-nowrap px-6 py-4">@mdo</td>
            </tr>
            <tr className="border-b dark:border-neutral-500">
              <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">2</td>
              <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">Jacob</td>
              <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">Thornton</td>
              <td className="whitespace-nowrap px-6 py-4">@fat</td>
            </tr>
            <tr className="border-b dark:border-neutral-500">
              <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">3</td>
              <td colSpan={2} className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                Larry the Bird
              </td>
              <td className="whitespace-nowrap px-6 py-4">@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>`}
        >
          <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  <table className="min-w-full border text-center text-sm font-light dark:border-neutral-500">
                    <thead className="border-b font-medium dark:border-neutral-500">
                      <tr>
                        <th scope="col" className="border-r px-6 py-4 dark:border-neutral-500">
                          #
                        </th>
                        <th scope="col" className="border-r px-6 py-4 dark:border-neutral-500">
                          First
                        </th>
                        <th scope="col" className="border-r px-6 py-4 dark:border-neutral-500">
                          Last
                        </th>
                        <th scope="col" className="px-6 py-4">
                          Handle
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b dark:border-neutral-500">
                        <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">1</td>
                        <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">Mark</td>
                        <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">Otto</td>
                        <td className="whitespace-nowrap px-6 py-4">@mdo</td>
                      </tr>
                      <tr className="border-b dark:border-neutral-500">
                        <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">2</td>
                        <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">Jacob</td>
                        <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">Thornton</td>
                        <td className="whitespace-nowrap px-6 py-4">@fat</td>
                      </tr>
                      <tr className="border-b dark:border-neutral-500">
                        <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">3</td>
                        <td colSpan={2} className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                          Larry the Bird
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">@twitter</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </code-showcase>

        <hr className="my-5"></hr>

        <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal">Borderless</h2>
        <code-showcase
          code={`<div className="flex flex-col">
  <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
      <div className="overflow-hidden">
        <table className="min-w-full text-center text-sm font-light">
          <thead className="font-medium">
            <tr>
              <th scope="col" className="px-6 py-4">
                #
              </th>
              <th scope="col" className="px-6 py-4">
                First
              </th>
              <th scope="col" className="px-6 py-4">
                Last
              </th>
              <th scope="col" className="px-6 py-4">
                Handle
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
              <td className="whitespace-nowrap px-6 py-4">Mark</td>
              <td className="whitespace-nowrap px-6 py-4">Otto</td>
              <td className="whitespace-nowrap px-6 py-4">@mdo</td>
            </tr>
            <tr>
              <td className="whitespace-nowrap px-6 py-4 font-medium">2</td>
              <td className="whitespace-nowrap px-6 py-4">Jacob</td>
              <td className="whitespace-nowrap px-6 py-4">Thornton</td>
              <td className="whitespace-nowrap px-6 py-4">@fat</td>
            </tr>
            <tr>
              <td className="whitespace-nowrap px-6 py-4 font-medium">3</td>
              <td colSpan={2} className="whitespace-nowrap px-6 py-4">
                Larry the Bird
              </td>
              <td className="whitespace-nowrap px-6 py-4">@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>`}
        >
          <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  <table className="min-w-full text-center text-sm font-light">
                    <thead className="font-medium">
                      <tr>
                        <th scope="col" className="px-6 py-4">
                          #
                        </th>
                        <th scope="col" className="px-6 py-4">
                          First
                        </th>
                        <th scope="col" className="px-6 py-4">
                          Last
                        </th>
                        <th scope="col" className="px-6 py-4">
                          Handle
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
                        <td className="whitespace-nowrap px-6 py-4">Mark</td>
                        <td className="whitespace-nowrap px-6 py-4">Otto</td>
                        <td className="whitespace-nowrap px-6 py-4">@mdo</td>
                      </tr>
                      <tr>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">2</td>
                        <td className="whitespace-nowrap px-6 py-4">Jacob</td>
                        <td className="whitespace-nowrap px-6 py-4">Thornton</td>
                        <td className="whitespace-nowrap px-6 py-4">@fat</td>
                      </tr>
                      <tr>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">3</td>
                        <td colSpan={2} className="whitespace-nowrap px-6 py-4">
                          Larry the Bird
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">@twitter</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </code-showcase>

        <hr className="my-5"></hr>

        <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal">Small</h2>
        <code-showcase
          code={`<div className="flex flex-col">
  <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
      <div className="overflow-hidden">
        <table className="min-w-full text-center text-sm font-light">
          <thead className="border-b font-medium dark:border-neutral-500">
            <tr>
              <th scope="col" className="px-6 py-2">
                #
              </th>
              <th scope="col" className="px-6 py-2">
                First
              </th>
              <th scope="col" className="px-6 py-2">
                Last
              </th>
              <th scope="col" className="px-6 py-2">
                Handle
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b dark:border-neutral-500">
              <td className="whitespace-nowrap px-6 py-2 font-medium">1</td>
              <td className="whitespace-nowrap px-6 py-2">Mark</td>
              <td className="whitespace-nowrap px-6 py-2">Otto</td>
              <td className="whitespace-nowrap px-6 py-2">@mdo</td>
            </tr>
            <tr className="border-b dark:border-neutral-500">
              <td className="whitespace-nowrap px-6 py-2 font-medium">2</td>
              <td className="whitespace-nowrap px-6 py-2 ">Jacob</td>
              <td className="whitespace-nowrap px-6 py-2">Thornton</td>
              <td className="whitespace-nowrap px-6 py-2">@fat</td>
            </tr>
            <tr className="border-b dark:border-neutral-500">
              <td className="whitespace-nowrap px-6 py-2 font-medium">3</td>
              <td colSpan={2} className="whitespace-nowrap px-6 py-2">
                Larry the Bird
              </td>
              <td className="whitespace-nowrap px-6 py-2">@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>`}
        >
          <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  <table className="min-w-full text-center text-sm font-light">
                    <thead className="border-b font-medium dark:border-neutral-500">
                      <tr>
                        <th scope="col" className="px-6 py-2">
                          #
                        </th>
                        <th scope="col" className="px-6 py-2">
                          First
                        </th>
                        <th scope="col" className="px-6 py-2">
                          Last
                        </th>
                        <th scope="col" className="px-6 py-2">
                          Handle
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b dark:border-neutral-500">
                        <td className="whitespace-nowrap px-6 py-2 font-medium">1</td>
                        <td className="whitespace-nowrap px-6 py-2">Mark</td>
                        <td className="whitespace-nowrap px-6 py-2">Otto</td>
                        <td className="whitespace-nowrap px-6 py-2">@mdo</td>
                      </tr>
                      <tr className="border-b dark:border-neutral-500">
                        <td className="whitespace-nowrap px-6 py-2 font-medium">2</td>
                        <td className="whitespace-nowrap px-6 py-2 ">Jacob</td>
                        <td className="whitespace-nowrap px-6 py-2">Thornton</td>
                        <td className="whitespace-nowrap px-6 py-2">@fat</td>
                      </tr>
                      <tr className="border-b dark:border-neutral-500">
                        <td className="whitespace-nowrap px-6 py-2 font-medium">3</td>
                        <td colSpan={2} className="whitespace-nowrap px-6 py-2">
                          Larry the Bird
                        </td>
                        <td className="whitespace-nowrap px-6 py-2">@twitter</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </code-showcase>

        <hr className="my-5"></hr>

        <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal">Light Head</h2>
        <code-showcase
          code={`<div className="flex flex-col">
  <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
      <div className="overflow-hidden">
        <table className="min-w-full text-center text-sm font-light">
          <thead className="border-b bg-neutral-50 font-medium dark:border-neutral-500 dark:text-neutral-800">
            <tr>
              <th scope="col" className=" px-6 py-4">
                #
              </th>
              <th scope="col" className=" px-6 py-4">
                First
              </th>
              <th scope="col" className=" px-6 py-4">
                Last
              </th>
              <th scope="col" className=" px-6 py-4">
                Handle
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b dark:border-neutral-500">
              <td className="whitespace-nowrap  px-6 py-4 font-medium">1</td>
              <td className="whitespace-nowrap  px-6 py-4">Mark</td>
              <td className="whitespace-nowrap  px-6 py-4">Otto</td>
              <td className="whitespace-nowrap  px-6 py-4">@mdo</td>
            </tr>
            <tr className="border-b dark:border-neutral-500">
              <td className="whitespace-nowrap  px-6 py-4 font-medium">2</td>
              <td className="whitespace-nowrap  px-6 py-4 ">Jacob</td>
              <td className="whitespace-nowrap  px-6 py-4">Thornton</td>
              <td className="whitespace-nowrap  px-6 py-4">@fat</td>
            </tr>
            <tr className="border-b dark:border-neutral-500">
              <td className="whitespace-nowrap  px-6 py-4 font-medium">3</td>
              <td colSpan={2} className="whitespace-nowrap  px-6 py-4">
                Larry the Bird
              </td>
              <td className="whitespace-nowrap  px-6 py-4">@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>`}
        >
          <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  <table className="min-w-full text-center text-sm font-light">
                    <thead className="border-b bg-neutral-50 font-medium dark:border-neutral-500 dark:text-neutral-800">
                      <tr>
                        <th scope="col" className=" px-6 py-4">
                          #
                        </th>
                        <th scope="col" className=" px-6 py-4">
                          First
                        </th>
                        <th scope="col" className=" px-6 py-4">
                          Last
                        </th>
                        <th scope="col" className=" px-6 py-4">
                          Handle
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b dark:border-neutral-500">
                        <td className="whitespace-nowrap  px-6 py-4 font-medium">1</td>
                        <td className="whitespace-nowrap  px-6 py-4">Mark</td>
                        <td className="whitespace-nowrap  px-6 py-4">Otto</td>
                        <td className="whitespace-nowrap  px-6 py-4">@mdo</td>
                      </tr>
                      <tr className="border-b dark:border-neutral-500">
                        <td className="whitespace-nowrap  px-6 py-4 font-medium">2</td>
                        <td className="whitespace-nowrap  px-6 py-4 ">Jacob</td>
                        <td className="whitespace-nowrap  px-6 py-4">Thornton</td>
                        <td className="whitespace-nowrap  px-6 py-4">@fat</td>
                      </tr>
                      <tr className="border-b dark:border-neutral-500">
                        <td className="whitespace-nowrap  px-6 py-4 font-medium">3</td>
                        <td colSpan={2} className="whitespace-nowrap  px-6 py-4">
                          Larry the Bird
                        </td>
                        <td className="whitespace-nowrap  px-6 py-4">@twitter</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </code-showcase>

        <hr className="my-5"></hr>

        <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal">Dark Head</h2>
        <code-showcase
          code={`<div className="flex flex-col">
  <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
      <div className="overflow-hidden">
        <table className="min-w-full text-center text-sm font-light">
          <thead className="border-b bg-neutral-800 font-medium text-white dark:border-neutral-500 dark:bg-neutral-900">
            <tr>
              <th scope="col" className=" px-6 py-4">
                #
              </th>
              <th scope="col" className=" px-6 py-4">
                First
              </th>
              <th scope="col" className=" px-6 py-4">
                Last
              </th>
              <th scope="col" className=" px-6 py-4">
                Handle
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b dark:border-neutral-500">
              <td className="whitespace-nowrap  px-6 py-4 font-medium">1</td>
              <td className="whitespace-nowrap  px-6 py-4">Mark</td>
              <td className="whitespace-nowrap  px-6 py-4">Otto</td>
              <td className="whitespace-nowrap  px-6 py-4">@mdo</td>
            </tr>
            <tr className="border-b dark:border-neutral-500">
              <td className="whitespace-nowrap  px-6 py-4 font-medium">2</td>
              <td className="whitespace-nowrap  px-6 py-4 ">Jacob</td>
              <td className="whitespace-nowrap  px-6 py-4">Thornton</td>
              <td className="whitespace-nowrap  px-6 py-4">@fat</td>
            </tr>
            <tr className="border-b dark:border-neutral-500">
              <td className="whitespace-nowrap  px-6 py-4 font-medium">3</td>
              <td colSpan={2} className="whitespace-nowrap  px-6 py-4">
                Larry the Bird
              </td>
              <td className="whitespace-nowrap  px-6 py-4">@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>`}
        >
          <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  <table className="min-w-full text-center text-sm font-light">
                    <thead className="border-b bg-neutral-800 font-medium text-white dark:border-neutral-500 dark:bg-neutral-900">
                      <tr>
                        <th scope="col" className=" px-6 py-4">
                          #
                        </th>
                        <th scope="col" className=" px-6 py-4">
                          First
                        </th>
                        <th scope="col" className=" px-6 py-4">
                          Last
                        </th>
                        <th scope="col" className=" px-6 py-4">
                          Handle
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b dark:border-neutral-500">
                        <td className="whitespace-nowrap  px-6 py-4 font-medium">1</td>
                        <td className="whitespace-nowrap  px-6 py-4">Mark</td>
                        <td className="whitespace-nowrap  px-6 py-4">Otto</td>
                        <td className="whitespace-nowrap  px-6 py-4">@mdo</td>
                      </tr>
                      <tr className="border-b dark:border-neutral-500">
                        <td className="whitespace-nowrap  px-6 py-4 font-medium">2</td>
                        <td className="whitespace-nowrap  px-6 py-4 ">Jacob</td>
                        <td className="whitespace-nowrap  px-6 py-4">Thornton</td>
                        <td className="whitespace-nowrap  px-6 py-4">@fat</td>
                      </tr>
                      <tr className="border-b dark:border-neutral-500">
                        <td className="whitespace-nowrap  px-6 py-4 font-medium">3</td>
                        <td colSpan={2} className="whitespace-nowrap  px-6 py-4">
                          Larry the Bird
                        </td>
                        <td className="whitespace-nowrap  px-6 py-4">@twitter</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </code-showcase>

        <hr className="my-5"></hr>

        <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal">Always responsive</h2>
        <code-showcase
          code={`<div className="flex flex-col overflow-x-auto">
  <div className="sm:-mx-6 lg:-mx-8">
    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-sm font-light">
          <thead className="border-b font-medium dark:border-neutral-500">
            <tr>
              <th scope="col" className="px-6 py-4">
                #
              </th>
              <th scope="col" className="px-6 py-4">
                Heading
              </th>
              <th scope="col" className="px-6 py-4">
                Heading
              </th>
              <th scope="col" className="px-6 py-4">
                Heading
              </th>
              <th scope="col" className="px-6 py-4">
                Heading
              </th>
              <th scope="col" className="px-6 py-4">
                Heading
              </th>
              <th scope="col" className="px-6 py-4">
                Heading
              </th>
              <th scope="col" className="px-6 py-4">
                Heading
              </th>
              <th scope="col" className="px-6 py-4">
                Heading
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b dark:border-neutral-500">
              <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
              <td className="whitespace-nowrap px-6 py-4">Cell</td>
              <td className="whitespace-nowrap px-6 py-4">Cell</td>
              <td className="whitespace-nowrap px-6 py-4">Cell</td>
              <td className="whitespace-nowrap px-6 py-4">Cell</td>
              <td className="whitespace-nowrap px-6 py-4">Cell</td>
              <td className="whitespace-nowrap px-6 py-4">Cell</td>
              <td className="whitespace-nowrap px-6 py-4">Cell</td>
              <td className="whitespace-nowrap px-6 py-4">Cell</td>
            </tr>
            <tr className="border-b dark:border-neutral-500">
              <td className="whitespace-nowrap px-6 py-4 font-medium ">2</td>
              <td className="whitespace-nowrap px-6 py-4">Cell</td>
              <td className="whitespace-nowrap px-6 py-4">Cell</td>
              <td className="whitespace-nowrap px-6 py-4">Cell</td>
              <td className="whitespace-nowrap px-6 py-4">Cell</td>
              <td className="whitespace-nowrap px-6 py-4">Cell</td>
              <td className="whitespace-nowrap px-6 py-4">Cell</td>
              <td className="whitespace-nowrap px-6 py-4 ">Cell</td>
              <td className="whitespace-nowrap px-6 py-4 ">Cell</td>
            </tr>
            <tr className="border-b ">
              <td className="whitespace-nowrap px-6 py-4 font-medium ">3</td>
              <td className="whitespace-nowrap px-6 py-4">Cell</td>
              <td className="whitespace-nowrap px-6 py-4">Cell</td>
              <td className="whitespace-nowrap px-6 py-4">Cell</td>
              <td className="whitespace-nowrap px-6 py-4">Cell</td>
              <td className="whitespace-nowrap px-6 py-4">Cell</td>
              <td className="whitespace-nowrap px-6 py-4">Cell</td>
              <td className="whitespace-nowrap px-6 py-4">Cell</td>
              <td className="whitespace-nowrap px-6 py-4">Cell</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>`}
        >
          <div className="flex flex-col overflow-x-auto">
            <div className="sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                <div className="overflow-x-auto">
                  <table className="min-w-full text-left text-sm font-light">
                    <thead className="border-b font-medium dark:border-neutral-500">
                      <tr>
                        <th scope="col" className="px-6 py-4">
                          #
                        </th>
                        <th scope="col" className="px-6 py-4">
                          Heading
                        </th>
                        <th scope="col" className="px-6 py-4">
                          Heading
                        </th>
                        <th scope="col" className="px-6 py-4">
                          Heading
                        </th>
                        <th scope="col" className="px-6 py-4">
                          Heading
                        </th>
                        <th scope="col" className="px-6 py-4">
                          Heading
                        </th>
                        <th scope="col" className="px-6 py-4">
                          Heading
                        </th>
                        <th scope="col" className="px-6 py-4">
                          Heading
                        </th>
                        <th scope="col" className="px-6 py-4">
                          Heading
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b dark:border-neutral-500">
                        <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                      </tr>
                      <tr className="border-b dark:border-neutral-500">
                        <td className="whitespace-nowrap px-6 py-4 font-medium ">2</td>
                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                        <td className="whitespace-nowrap px-6 py-4 ">Cell</td>
                        <td className="whitespace-nowrap px-6 py-4 ">Cell</td>
                      </tr>
                      <tr className="border-b ">
                        <td className="whitespace-nowrap px-6 py-4 font-medium ">3</td>
                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                        <td className="whitespace-nowrap px-6 py-4">Cell</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </code-showcase>
      </div>
    )
  }
}
