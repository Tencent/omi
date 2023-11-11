import { tag, Component, bind } from 'omi'
import { Collapse, Ripple, Modal } from 'omi-elements'
import { tailwind } from '@/tailwind'
import '@/site/code-showcase'

@tag('dividers-page')
export default class DividersPage extends Component {
  static css = [tailwind]

  render() {
    return (
      <div className="container my-12 !max-w-full">
        <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="basic_example" data-te-spy-item>
          Basic example
        </h2>
        <code-showcase code={`<hr className="my-12 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />`}>
          <hr className="my-12 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
        </code-showcase>

        <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="basic_vertical" data-te-spy-item>
          Basic vertical
        </h2>
        <code-showcase
          code={`<div className="flex flex-1">
  <p className="pr-6">Text</p>
  <div className="inline-block h-[250px] min-h-[1em] w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50"></div>
  <p className="pl-6">Text</p>
</div>`}
        >
          <div className="flex flex-1">
            <p className="pr-6">Text</p>
            <div className="inline-block h-[250px] min-h-[1em] w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50"></div>
            <p className="pl-6">Text</p>
          </div>
        </code-showcase>

        <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="blurry_horizontal" data-te-spy-item>
          Blurry horizontal
        </h2>
        <code-showcase
          code={`<hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />`}
        >
          <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
        </code-showcase>

        <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="blurry_vertical" data-te-spy-item>
          Blurry vertical
        </h2>
        <code-showcase
          code={`<div className="flex flex-1">
  <p className="pr-6">Text</p>
  <div className="h-[250px] min-h-[1em] w-px self-stretch bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-20 dark:opacity-100"></div>
  <p className="pl-6">Text</p>
</div>`}
        >
          <div className="flex flex-1">
            <p className="pr-6">Text</p>
            <div className="h-[250px] min-h-[1em] w-px self-stretch bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-20 dark:opacity-100"></div>
            <p className="pl-6">Text</p>
          </div>
        </code-showcase>

        <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="practical_example" data-te-spy-item>
          Blurry divider practical example
        </h2>

        <p className="mb-3">Below is an example, of how these blurry dividers are presented within a section:</p>
        <code-showcase
          code={`<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
  <div className="relative mb-12 px-3 lg:mb-0">
    <div className="mb-2 flex justify-center">
      <span className="text-primary">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-14 w-14">
          <path d="M12.378 1.602a.75.75 0 00-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03zM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 00.372-.648V7.93zM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 00.372.648l8.628 5.033z" />
        </svg>
      </span>
    </div>
    <h5 className="mb-6 font-bold text-primary">5000+</h5>
    <h6 className="mb-0 font-normal dark:text-neutral-50">Components</h6>
    <div className="absolute right-0 top-0 hidden h-full min-h-[1em] w-px self-stretch border-t-0 bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100 lg:block"></div>
  </div>
  <div className="relative mb-12 px-3 lg:mb-0">
    <div className="mb-2 flex justify-center">
      <span className="text-primary">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-14 w-14">
          <path d="M11.644 1.59a.75.75 0 01.712 0l9.75 5.25a.75.75 0 010 1.32l-9.75 5.25a.75.75 0 01-.712 0l-9.75-5.25a.75.75 0 010-1.32l9.75-5.25z" />
          <path d="M3.265 10.602l7.668 4.129a2.25 2.25 0 002.134 0l7.668-4.13 1.37.739a.75.75 0 010 1.32l-9.75 5.25a.75.75 0 01-.71 0l-9.75-5.25a.75.75 0 010-1.32l1.37-.738z" />
          <path d="M10.933 19.231l-7.668-4.13-1.37.739a.75.75 0 000 1.32l9.75 5.25c.221.12.489.12.71 0l9.75-5.25a.75.75 0 000-1.32l-1.37-.738-7.668 4.13a2.25 2.25 0 01-2.134-.001z" />
        </svg>
      </span>
    </div>
    <h5 className="mb-6 font-bold text-primary">490+</h5>
    <h6 className="mb-0 font-normal dark:text-neutral-50">Design blocks</h6>
    <div className="absolute right-0 top-0 hidden h-full min-h-[1em] w-px self-stretch border-t-0 bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100 lg:block"></div>
  </div>
  <div className="relative mb-12 px-3 lg:mb-0">
    <div className="mb-2 flex justify-center">
      <span className="text-primary">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-14 w-14">
          <path
            fillRule="evenodd"
            d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
            clipRule="evenodd"
          />
        </svg>
      </span>
    </div>
    <h5 className="mb-6 font-bold text-primary">100+</h5>
    <h6 className="mb-0 font-normal dark:text-neutral-50">Templates</h6>
    <div className="absolute right-0 top-0 hidden h-full min-h-[1em] w-px self-stretch border-t-0 bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100 lg:block"></div>
  </div>
  <div className="relative mb-12 px-3 lg:mb-0">
    <div className="mb-2 flex justify-center">
      <span className="text-primary">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-14 w-14">
          <path
            fillRule="evenodd"
            d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 00-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 00-2.282.819l-.922 1.597a1.875 1.875 0 00.432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 000 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 00-.432 2.385l.922 1.597a1.875 1.875 0 002.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 002.28-.819l.923-1.597a1.875 1.875 0 00-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 000-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 00-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 00-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 00-1.85-1.567h-1.843zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z"
            clipRule="evenodd"
          />
        </svg>
      </span>
    </div>
    <h5 className="mb-6 font-bold text-primary">28</h5>
    <h6 className="mb-0 font-normal dark:text-neutral-50">Plugins</h6>
  </div>
</div>`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <div className="relative mb-12 px-3 lg:mb-0">
              <div className="mb-2 flex justify-center">
                <span className="text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-14 w-14">
                    <path d="M12.378 1.602a.75.75 0 00-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03zM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 00.372-.648V7.93zM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 00.372.648l8.628 5.033z" />
                  </svg>
                </span>
              </div>
              <h5 className="mb-6 font-bold text-primary">5000+</h5>
              <h6 className="mb-0 font-normal dark:text-neutral-50">Components</h6>
              <div className="absolute right-0 top-0 hidden h-full min-h-[1em] w-px self-stretch border-t-0 bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100 lg:block"></div>
            </div>
            <div className="relative mb-12 px-3 lg:mb-0">
              <div className="mb-2 flex justify-center">
                <span className="text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-14 w-14">
                    <path d="M11.644 1.59a.75.75 0 01.712 0l9.75 5.25a.75.75 0 010 1.32l-9.75 5.25a.75.75 0 01-.712 0l-9.75-5.25a.75.75 0 010-1.32l9.75-5.25z" />
                    <path d="M3.265 10.602l7.668 4.129a2.25 2.25 0 002.134 0l7.668-4.13 1.37.739a.75.75 0 010 1.32l-9.75 5.25a.75.75 0 01-.71 0l-9.75-5.25a.75.75 0 010-1.32l1.37-.738z" />
                    <path d="M10.933 19.231l-7.668-4.13-1.37.739a.75.75 0 000 1.32l9.75 5.25c.221.12.489.12.71 0l9.75-5.25a.75.75 0 000-1.32l-1.37-.738-7.668 4.13a2.25 2.25 0 01-2.134-.001z" />
                  </svg>
                </span>
              </div>
              <h5 className="mb-6 font-bold text-primary">490+</h5>
              <h6 className="mb-0 font-normal dark:text-neutral-50">Design blocks</h6>
              <div className="absolute right-0 top-0 hidden h-full min-h-[1em] w-px self-stretch border-t-0 bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100 lg:block"></div>
            </div>
            <div className="relative mb-12 px-3 lg:mb-0">
              <div className="mb-2 flex justify-center">
                <span className="text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-14 w-14">
                    <path
                      fillRule="evenodd"
                      d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </div>
              <h5 className="mb-6 font-bold text-primary">100+</h5>
              <h6 className="mb-0 font-normal dark:text-neutral-50">Templates</h6>
              <div className="absolute right-0 top-0 hidden h-full min-h-[1em] w-px self-stretch border-t-0 bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100 lg:block"></div>
            </div>
            <div className="relative mb-12 px-3 lg:mb-0">
              <div className="mb-2 flex justify-center">
                <span className="text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-14 w-14">
                    <path
                      fillRule="evenodd"
                      d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 00-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 00-2.282.819l-.922 1.597a1.875 1.875 0 00.432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 000 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 00-.432 2.385l.922 1.597a1.875 1.875 0 002.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 002.28-.819l.923-1.597a1.875 1.875 0 00-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 000-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 00-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 00-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 00-1.85-1.567h-1.843zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </div>
              <h5 className="mb-6 font-bold text-primary">28</h5>
              <h6 className="mb-0 font-normal dark:text-neutral-50">Plugins</h6>
            </div>
          </div>
        </code-showcase>
      </div>
    )
  }
}
