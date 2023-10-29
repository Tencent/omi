import { tag, Component, bind } from 'omi'
import { Collapse, Ripple } from 'omi-elements'
import { tailwind } from '@/tailwind'

@tag('accordion-basic-example')
export default class AccordionBasicExample extends Component {
  static css = [tailwind]

  activeElement = ''

  handleClick(activeElement) {
    this.activeElement = activeElement
    this.update()
  }

  render() {
    return (
      <>
        <div id="accordionExample">
          <div className="rounded-t-lg border border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
            <h2 className="mb-0" id="headingOne">
              <button
                className={`${
                  this.activeElement === 'element1' &&
                  `text-primary [box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:!text-primary-400 dark:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]`
                } group relative flex w-full items-center rounded-t-[15px] border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white`}
                type="button"
                onClick={() => this.handleClick('element1')}
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Accordion Item #1
                <span
                  className={`${
                    this.activeElement === 'element1'
                      ? `rotate-[-180deg] -mr-1`
                      : `rotate-0 fill-[#212529]  dark:fill-white`
                  } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </span>
              </button>
            </h2>
            <Collapse.tagName show={this.activeElement === 'element1'} className="!mt-0 !rounded-b-none !shadow-none">
              <div className="px-5 py-4">
                <strong>This is the first item's accordion body.</strong> Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Vestibulum eu rhoncus purus, vitae tincidunt nibh. Vivamus elementum egestas ligula in
                varius. Proin ac erat pretium, ultricies leo at, cursus ante. Pellentesque at odio euismod, mattis urna
                ac, accumsan metus. Nam nisi leo, malesuada vitae pretium et, laoreet at lorem. Curabitur non
                sollicitudin neque.
              </div>
            </Collapse.tagName>
          </div>
        </div>
        <div className="border border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
          <h2 className="mb-0" id="headingTwo">
            <button
              className={`${
                this.activeElement === 'element2'
                  ? `text-primary [box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:!text-primary-400 dark:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]`
                  : `transition-none rounded-b-[15px]`
              } group relative flex w-full items-center rounded-t-[15px] border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white`}
              type="button"
              onClick={() => this.handleClick('element2')}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Accordion Item #2
              <span
                className={`${
                  this.activeElement === 'element2'
                    ? `rotate-[-180deg] -mr-1`
                    : `rotate-0 fill-[#212529] dark:fill-white`
                } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </span>
            </button>
          </h2>
          <Collapse.tagName show={this.activeElement === 'element2'} className="!mt-0 !rounded-b-none !shadow-none">
            <div className="px-5 py-4">
              <strong>This is the second item's accordion body.</strong> Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Vestibulum eu rhoncus purus, vitae tincidunt nibh. Vivamus elementum egestas ligula in
              varius. Proin ac erat pretium, ultricies leo at, cursus ante. Pellentesque at odio euismod, mattis urna
              ac, accumsan metus. Nam nisi leo, malesuada vitae pretium et, laoreet at lorem. Curabitur non sollicitudin
              neque.
            </div>
          </Collapse.tagName>
        </div>
        <div className="rounded-b-lg border border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
          <h2 className="accordion-header mb-0" id="headingThree">
            <button
              className={`${
                this.activeElement === 'element3'
                  ? `text-primary [box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:!text-primary-400 dark:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]`
                  : `transition-none rounded-b-[15px]`
              } group relative flex w-full items-center rounded-t-[15px] border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white`}
              type="button"
              onClick={() => this.handleClick('element3')}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Accordion Item #3
              <span
                className={`${
                  this.activeElement === 'element3'
                    ? `rotate-[-180deg] -mr-1`
                    : `rotate-0 fill-[#212529] dark:fill-white`
                } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </span>
            </button>
          </h2>
          <Collapse.tagName show={this.activeElement === 'element3'} className="!mt-0 !shadow-none">
            <div className="px-5 py-4">
              <strong>This is the third item's accordion body.</strong>Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Vestibulum eu rhoncus purus, vitae tincidunt nibh. Vivamus elementum egestas ligula in
              varius. Proin ac erat pretium, ultricies leo at, cursus ante. Pellentesque at odio euismod, mattis urna
              ac, accumsan metus. Nam nisi leo, malesuada vitae pretium et, laoreet at lorem. Curabitur non sollicitudin
              neque.
            </div>
          </Collapse.tagName>
        </div>
      </>
    )
  }
}
