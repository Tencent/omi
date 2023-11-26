import '@/site/code-showcase'
import { tag, Component } from 'omi'
import { tailwind } from '@/tailwind'
import '../../components/alert/alert'

@tag('list-page')
export class ListPage extends Component {
  static css = [tailwind]

  render() {
    return (
      <div className="container my-12 !max-w-full mb-48">
        <o-alert>
          List design block from{' '}
          <a class="ml-2" href="https://flowbite.com/docs/typography/lists/">
            {' '}
            flowbite
          </a>
        </o-alert>

        {/* <!-- Section: Basic example --> */}
        <section>
          {/* <!-- Title --> */}
          <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="basic_example" data-te-spy-item>
            Basic example
          </h2>
          {/* <!-- Description --> */}
          <p className="mb-3">
            The list component is a user interface element that displays a collection of items in an organized manner,
            allowing users to easily view, select, and navigate through the items. It is widely used in applications and
            websites to present various types of data, such as contact lists, file directories, or menu options.
          </p>

          <code-showcase
            code={`<h2 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Password requirements:</h2>
<ul class="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
  <li>
      At least 10 characters (and up to 100 characters)
  </li>
  <li>
      At least one lowercase character
  </li>
  <li>
      Inclusion of at least one special character, e.g., ! @ # ?
  </li>
</ul>`}
          >
            <h2 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Password requirements:</h2>
            <ul class="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
              <li>At least 10 characters (and up to 100 characters)</li>
              <li>At least one lowercase character</li>
              <li>Inclusion of at least one special character, e.g., ! @ # ?</li>
            </ul>
          </code-showcase>
        </section>

        <section>
          {/* <!-- Title --> */}
          <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="basic_example" data-te-spy-item>
            With icons
          </h2>
          <code-showcase
            code={`<h2 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Password requirements:</h2>
<ul class="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400">
  <li class="flex items-center">
    <svg class="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
    </svg>
    At least 10 characters
  </li>
  <li class="flex items-center">
    <svg class="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
    </svg>
    At least one lowercase character
  </li>
  <li class="flex items-center">
    <svg class="w-3.5 h-3.5 me-2 text-gray-500 dark:text-gray-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
    </svg>
    At least one special character, e.g., ! @ # ?
  </li>
</ul>`}
          >
            <h2 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Password requirements:</h2>
            <ul class="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400">
              <li class="flex items-center">
                <svg
                  class="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                At least 10 characters
              </li>
              <li class="flex items-center">
                <svg
                  class="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                At least one lowercase character
              </li>
              <li class="flex items-center">
                <svg
                  class="w-3.5 h-3.5 me-2 text-gray-500 dark:text-gray-400 flex-shrink-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                At least one special character, e.g., ! @ # ?
              </li>
            </ul>
          </code-showcase>
        </section>

        <section>
          {/* <!-- Title --> */}
          <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="basic_example" data-te-spy-item>
            Nested
          </h2>
          <code-showcase
            code={`<ul class="space-y-4 text-gray-500 list-disc list-inside dark:text-gray-400">
  <li>
      List item one
      <ol class="ps-5 mt-2 space-y-1 list-decimal list-inside">
          <li>You might feel like you are being really "organized" o</li>
          <li>Nested navigation in UIs is a bad idea too, keep things as flat as possible.</li>
          <li>Nesting tons of folders in your source code is also not helpful.</li>
      </ol>
  </li>
  <li>
      List item two
      <ul class="ps-5 mt-2 space-y-1 list-decimal list-inside">
          <li>I'm not sure if we'll bother styling more than two levels deep.</li>
          <li>Two is already too much, three is guaranteed to be a bad idea.</li>
          <li>If you nest four levels deep you belong in prison.</li>
      </ul>
  </li>
  <li>
      List item three
      <ul class="ps-5 mt-2 space-y-1 list-decimal list-inside">
          <li>Again please don't nest lists if you want</li>
          <li>Nobody wants to look at this.</li>
          <li>I'm upset that we even have to bother styling this.</li>
      </ul>
  </li>
</ul>`}
          >
            <ul class="space-y-4 text-gray-500 list-disc list-inside dark:text-gray-400">
              <li>
                List item one
                <ol class="ps-5 mt-2 space-y-1 list-decimal list-inside">
                  <li>You might feel like you are being really "organized" o</li>
                  <li>Nested navigation in UIs is a bad idea too, keep things as flat as possible.</li>
                  <li>Nesting tons of folders in your source code is also not helpful.</li>
                </ol>
              </li>
              <li>
                List item two
                <ul class="ps-5 mt-2 space-y-1 list-decimal list-inside">
                  <li>I'm not sure if we'll bother styling more than two levels deep.</li>
                  <li>Two is already too much, three is guaranteed to be a bad idea.</li>
                  <li>If you nest four levels deep you belong in prison.</li>
                </ul>
              </li>
              <li>
                List item three
                <ul class="ps-5 mt-2 space-y-1 list-decimal list-inside">
                  <li>Again please don't nest lists if you want</li>
                  <li>Nobody wants to look at this.</li>
                  <li>I'm upset that we even have to bother styling this.</li>
                </ul>
              </li>
            </ul>
          </code-showcase>
        </section>

        <section>
          {/* <!-- Title --> */}
          <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="basic_example" data-te-spy-item>
            Unstyled
          </h2>
          <code-showcase
            code={`<h2 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Password requirements:</h2>
<ul class="max-w-md space-y-1 text-gray-500 list-none list-inside dark:text-gray-400">
  <li>
      At least 10 characters (and up to 100 characters)
  </li>
  <li>
      At least one lowercase character
  </li>
  <li>
      Inclusion of at least one special character, e.g., ! @ # ?
  </li>
</ul>`}
          >
            <h2 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Password requirements:</h2>
            <ul class="max-w-md space-y-1 text-gray-500 list-none list-inside dark:text-gray-400">
              <li>At least 10 characters (and up to 100 characters)</li>
              <li>At least one lowercase character</li>
              <li>Inclusion of at least one special character, e.g., ! @ # ?</li>
            </ul>
          </code-showcase>
        </section>

        <section>
          {/* <!-- Title --> */}
          <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="basic_example" data-te-spy-item>
            Ordered list
          </h2>
          <code-showcase
            code={`<h2 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Top students:</h2>
<ol class="max-w-md space-y-1 text-gray-500 list-decimal list-inside dark:text-gray-400">
  <li>
      <span class="font-semibold text-gray-900 dark:text-white">Bonnie Green</span> with <span class="font-semibold text-gray-900 dark:text-white">70</span> points
  </li>
  <li>
      <span class="font-semibold text-gray-900 dark:text-white">Jese Leos</span> with <span class="font-semibold text-gray-900 dark:text-white">63</span> points
  </li>
  <li>
      <span class="font-semibold text-gray-900 dark:text-white">Leslie Livingston</span> with <span class="font-semibold text-gray-900 dark:text-white">57</span> points
  </li>
</ol>`}
          >
            <h2 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Top students:</h2>
            <ol class="max-w-md space-y-1 text-gray-500 list-decimal list-inside dark:text-gray-400">
              <li>
                <span class="font-semibold text-gray-900 dark:text-white">Bonnie Green</span> with{' '}
                <span class="font-semibold text-gray-900 dark:text-white">70</span> points
              </li>
              <li>
                <span class="font-semibold text-gray-900 dark:text-white">Jese Leos</span> with{' '}
                <span class="font-semibold text-gray-900 dark:text-white">63</span> points
              </li>
              <li>
                <span class="font-semibold text-gray-900 dark:text-white">Leslie Livingston</span> with{' '}
                <span class="font-semibold text-gray-900 dark:text-white">57</span> points
              </li>
            </ol>
          </code-showcase>
        </section>

        <section>
          {/* <!-- Title --> */}
          <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="basic_example" data-te-spy-item>
            Nested
          </h2>
          <code-showcase
            code={`<ol class="space-y-4 text-gray-500 list-decimal list-inside dark:text-gray-400">
  <li>
    List item one
    <ul class="ps-5 mt-2 space-y-1 list-disc list-inside">
        <li>You might feel like you are being really "organized" o</li>
        <li>Nested navigation in UIs is a bad idea too, keep things as flat as possible.</li>
        <li>Nesting tons of folders in your source code is also not helpful.</li>
    </ul>
  </li>
  <li>
    List item two
    <ul class="ps-5 mt-2 space-y-1 list-disc list-inside">
        <li>I'm not sure if we'll bother styling more than two levels deep.</li>
        <li>Two is already too much, three is guaranteed to be a bad idea.</li>
        <li>If you nest four levels deep you belong in prison.</li>
    </ul>
  </li>
  <li>
    List item three
    <ul class="ps-5 mt-2 space-y-1 list-disc list-inside">
        <li>Again please don't nest lists if you want</li>
        <li>Nobody wants to look at this.</li>
        <li>I'm upset that we even have to bother styling this.</li>
    </ul>
  </li>
</ol>`}
          >
            <ol class="space-y-4 text-gray-500 list-decimal list-inside dark:text-gray-400">
              <li>
                List item one
                <ul class="ps-5 mt-2 space-y-1 list-disc list-inside">
                  <li>You might feel like you are being really "organized" o</li>
                  <li>Nested navigation in UIs is a bad idea too, keep things as flat as possible.</li>
                  <li>Nesting tons of folders in your source code is also not helpful.</li>
                </ul>
              </li>
              <li>
                List item two
                <ul class="ps-5 mt-2 space-y-1 list-disc list-inside">
                  <li>I'm not sure if we'll bother styling more than two levels deep.</li>
                  <li>Two is already too much, three is guaranteed to be a bad idea.</li>
                  <li>If you nest four levels deep you belong in prison.</li>
                </ul>
              </li>
              <li>
                List item three
                <ul class="ps-5 mt-2 space-y-1 list-disc list-inside">
                  <li>Again please don't nest lists if you want</li>
                  <li>Nobody wants to look at this.</li>
                  <li>I'm upset that we even have to bother styling this.</li>
                </ul>
              </li>
            </ol>
          </code-showcase>
        </section>

        <section>
          {/* <!-- Title --> */}
          <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="basic_example" data-te-spy-item>
            Description list
          </h2>
          <code-showcase
            code={`<dl class="max-w-md text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
  <div class="flex flex-col pb-3">
      <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Email address</dt>
      <dd class="text-lg font-semibold">yourname@flowbite.com</dd>
  </div>
  <div class="flex flex-col py-3">
      <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Home address</dt>
      <dd class="text-lg font-semibold">92 Miles Drive, Newark, NJ 07103, California, USA</dd>
  </div>
  <div class="flex flex-col pt-3">
      <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Phone number</dt>
      <dd class="text-lg font-semibold">+00 123 456 789 / +12 345 678</dd>
  </div>
</dl>`}
          >
            <dl class="max-w-md text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
              <div class="flex flex-col pb-3">
                <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Email address</dt>
                <dd class="text-lg font-semibold">yourname@flowbite.com</dd>
              </div>
              <div class="flex flex-col py-3">
                <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Home address</dt>
                <dd class="text-lg font-semibold">92 Miles Drive, Newark, NJ 07103, California, USA</dd>
              </div>
              <div class="flex flex-col pt-3">
                <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Phone number</dt>
                <dd class="text-lg font-semibold">+00 123 456 789 / +12 345 678</dd>
              </div>
            </dl>
          </code-showcase>
        </section>

        <section>
          {/* <!-- Title --> */}
          <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="basic_example" data-te-spy-item>
            List with icons
          </h2>
          <code-showcase
            code={`<ul class="space-y-4 text-left text-gray-500 dark:text-gray-400">
  <li class="flex items-center space-x-3 rtl:space-x-reverse">
    <svg class="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
    </svg>
    <span>Individual configuration</span>
  </li>
  <li class="flex items-center space-x-3 rtl:space-x-reverse">
    <svg class="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
    </svg>
    <span>No setup, or hidden fees</span>
  </li>
  <li class="flex items-center space-x-3 rtl:space-x-reverse">
    <svg class="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
    </svg>
    <span>Team size: <span class="font-semibold text-gray-900 dark:text-white">1 developer</span></span>
  </li>
  <li class="flex items-center space-x-3 rtl:space-x-reverse">
    <svg class="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
    </svg>
    <span>Premium support: <span class="font-semibold text-gray-900 dark:text-white">6 months</span></span>
  </li>
  <li class="flex items-center space-x-3 rtl:space-x-reverse">
    <svg class="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
    </svg>
    <span>Free updates: <span class="font-semibold text-gray-900 dark:text-white">6 months</span></span>
  </li>
</ul>`}
          >
            <ul class="space-y-4 text-left text-gray-500 dark:text-gray-400">
              <li class="flex items-center space-x-3 rtl:space-x-reverse">
                <svg
                  class="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 16 12"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5.917 5.724 10.5 15 1.5"
                  />
                </svg>
                <span>Individual configuration</span>
              </li>
              <li class="flex items-center space-x-3 rtl:space-x-reverse">
                <svg
                  class="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 16 12"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5.917 5.724 10.5 15 1.5"
                  />
                </svg>
                <span>No setup, or hidden fees</span>
              </li>
              <li class="flex items-center space-x-3 rtl:space-x-reverse">
                <svg
                  class="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 16 12"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5.917 5.724 10.5 15 1.5"
                  />
                </svg>
                <span>
                  Team size: <span class="font-semibold text-gray-900 dark:text-white">1 developer</span>
                </span>
              </li>
              <li class="flex items-center space-x-3 rtl:space-x-reverse">
                <svg
                  class="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 16 12"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5.917 5.724 10.5 15 1.5"
                  />
                </svg>
                <span>
                  Premium support: <span class="font-semibold text-gray-900 dark:text-white">6 months</span>
                </span>
              </li>
              <li class="flex items-center space-x-3 rtl:space-x-reverse">
                <svg
                  class="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 16 12"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5.917 5.724 10.5 15 1.5"
                  />
                </svg>
                <span>
                  Free updates: <span class="font-semibold text-gray-900 dark:text-white">6 months</span>
                </span>
              </li>
            </ul>
          </code-showcase>
        </section>

        <section>
          {/* <!-- Title --> */}
          <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="basic_example" data-te-spy-item>
            Advanced layout
          </h2>
          <code-showcase
            code={`<ul class="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
  <li class="pb-3 sm:pb-4">
    <div class="flex items-center space-x-4 rtl:space-x-reverse">
      <div class="flex-shrink-0">
        <img class="w-8 h-8 rounded-full" src="https://wx.gtimg.com/resource/feuploader/202106/e685db3a4545b05f6fa05b4cbd0b25f0_420x420.png" alt="Neil image" />
      </div>
      <div class="flex-1 min-w-0">
        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
          Neil Sims
        </p>
        <p class="text-sm text-gray-500 truncate dark:text-gray-400">
          email@flowbite.com
        </p>
      </div>
      <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
        $320
      </div>
    </div>
  </li>
  <li class="py-3 sm:py-4">
    <div class="flex items-center space-x-4 rtl:space-x-reverse">
      <div class="flex-shrink-0">
        <img class="w-8 h-8 rounded-full" src="https://wx.gtimg.com/resource/feuploader/202106/e685db3a4545b05f6fa05b4cbd0b25f0_420x420.png" alt="Neil image" />
      </div>
      <div class="flex-1 min-w-0">
        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
          Bonnie Green
        </p>
        <p class="text-sm text-gray-500 truncate dark:text-gray-400">
          email@flowbite.com
        </p>
      </div>
      <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
        $3467
      </div>
    </div>
  </li>
  <li class="py-3 sm:py-4">
    <div class="flex items-center space-x-4 rtl:space-x-reverse">
      <div class="flex-shrink-0">
        <img class="w-8 h-8 rounded-full" src="https://wx.gtimg.com/resource/feuploader/202106/e685db3a4545b05f6fa05b4cbd0b25f0_420x420.png" alt="Neil image" />
      </div>
      <div class="flex-1 min-w-0">
        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
          Michael Gough
        </p>
        <p class="text-sm text-gray-500 truncate dark:text-gray-400">
          email@flowbite.com
        </p>
      </div>
      <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
        $67
      </div>
    </div>
  </li>
  <li class="py-3 sm:py-4">
    <div class="flex items-center space-x-4 rtl:space-x-reverse">
      <div class="flex-shrink-0">
        <img class="w-8 h-8 rounded-full" src="https://wx.gtimg.com/resource/feuploader/202106/e685db3a4545b05f6fa05b4cbd0b25f0_420x420.png" alt="Neil image" />
      </div>
      <div class="flex-1 min-w-0">
        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
          Thomas Lean
        </p>
        <p class="text-sm text-gray-500 truncate dark:text-gray-400">
          email@flowbite.com
        </p>
      </div>
      <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
        $2367
      </div>
    </div>
  </li>
  <li class="pt-3 pb-0 sm:pt-4">
    <div class="flex items-center space-x-4 rtl:space-x-reverse">
      <div class="flex-shrink-0">
        <img class="w-8 h-8 rounded-full" src="https://wx.gtimg.com/resource/feuploader/202106/e685db3a4545b05f6fa05b4cbd0b25f0_420x420.png" alt="Neil image" />
      </div>
      <div class="flex-1 min-w-0">
        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
          Lana Byrd
        </p>
        <p class="text-sm text-gray-500 truncate dark:text-gray-400">
          email@flowbite.com
        </p>
      </div>
      <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
        $367
      </div>
    </div>
  </li>
</ul>`}
          >
            <ul class="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
              <li class="pb-3 sm:pb-4">
                <div class="flex items-center space-x-4 rtl:space-x-reverse">
                  <div class="flex-shrink-0">
                    <img
                      class="w-8 h-8 rounded-full"
                      src="https://wx.gtimg.com/resource/feuploader/202106/e685db3a4545b05f6fa05b4cbd0b25f0_420x420.png"
                      alt="Neil image"
                    />
                  </div>
                  <div class="flex-1 min-w-0">
                    <p class="text-sm font-medium text-gray-900 truncate dark:text-white">Neil Sims</p>
                    <p class="text-sm text-gray-500 truncate dark:text-gray-400">email@flowbite.com</p>
                  </div>
                  <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">$320</div>
                </div>
              </li>
              <li class="py-3 sm:py-4">
                <div class="flex items-center space-x-4 rtl:space-x-reverse">
                  <div class="flex-shrink-0">
                    <img
                      class="w-8 h-8 rounded-full"
                      src="https://wx.gtimg.com/resource/feuploader/202106/e685db3a4545b05f6fa05b4cbd0b25f0_420x420.png"
                      alt="Neil image"
                    />
                  </div>
                  <div class="flex-1 min-w-0">
                    <p class="text-sm font-medium text-gray-900 truncate dark:text-white">Bonnie Green</p>
                    <p class="text-sm text-gray-500 truncate dark:text-gray-400">email@flowbite.com</p>
                  </div>
                  <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    $3467
                  </div>
                </div>
              </li>
              <li class="py-3 sm:py-4">
                <div class="flex items-center space-x-4 rtl:space-x-reverse">
                  <div class="flex-shrink-0">
                    <img
                      class="w-8 h-8 rounded-full"
                      src="https://wx.gtimg.com/resource/feuploader/202106/e685db3a4545b05f6fa05b4cbd0b25f0_420x420.png"
                      alt="Neil image"
                    />
                  </div>
                  <div class="flex-1 min-w-0">
                    <p class="text-sm font-medium text-gray-900 truncate dark:text-white">Michael Gough</p>
                    <p class="text-sm text-gray-500 truncate dark:text-gray-400">email@flowbite.com</p>
                  </div>
                  <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">$67</div>
                </div>
              </li>
              <li class="py-3 sm:py-4">
                <div class="flex items-center space-x-4 rtl:space-x-reverse">
                  <div class="flex-shrink-0">
                    <img
                      class="w-8 h-8 rounded-full"
                      src="https://wx.gtimg.com/resource/feuploader/202106/e685db3a4545b05f6fa05b4cbd0b25f0_420x420.png"
                      alt="Neil image"
                    />
                  </div>
                  <div class="flex-1 min-w-0">
                    <p class="text-sm font-medium text-gray-900 truncate dark:text-white">Thomas Lean</p>
                    <p class="text-sm text-gray-500 truncate dark:text-gray-400">email@flowbite.com</p>
                  </div>
                  <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    $2367
                  </div>
                </div>
              </li>
              <li class="pt-3 pb-0 sm:pt-4">
                <div class="flex items-center space-x-4 rtl:space-x-reverse">
                  <div class="flex-shrink-0">
                    <img
                      class="w-8 h-8 rounded-full"
                      src="https://wx.gtimg.com/resource/feuploader/202106/e685db3a4545b05f6fa05b4cbd0b25f0_420x420.png"
                      alt="Neil image"
                    />
                  </div>
                  <div class="flex-1 min-w-0">
                    <p class="text-sm font-medium text-gray-900 truncate dark:text-white">Lana Byrd</p>
                    <p class="text-sm text-gray-500 truncate dark:text-gray-400">email@flowbite.com</p>
                  </div>
                  <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">$367</div>
                </div>
              </li>
            </ul>
          </code-showcase>
        </section>

        <section>
          {/* <!-- Title --> */}
          <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="basic_example" data-te-spy-item>
            Horizontal list
          </h2>
          <code-showcase
            code={`<ul class="flex flex-wrap items-center justify-center text-gray-900 dark:text-white">
  <li>
    <a href="#" class="me-4 hover:underline md:me-6 ">About</a>
  </li>
  <li>
    <a href="#" class="me-4 hover:underline md:me-6">Premium</a>
  </li>
  <li>
    <a href="#" class="me-4 hover:underline md:me-6 ">Campaigns</a>
  </li>
  <li>
    <a href="#" class="me-4 hover:underline md:me-6">Blog</a>
  </li>
  <li>
    <a href="#" class="me-4 hover:underline md:me-6">Affiliate Program</a>
  </li>
  <li>
    <a href="#" class="me-4 hover:underline md:me-6">FAQs</a>
  </li>
  <li>
    <a href="#" class="me-4 hover:underline md:me-6">Contact</a>
  </li>
</ul>`}
          >
            <ul class="flex flex-wrap items-center justify-center text-gray-900 dark:text-white">
              <li>
                <a href="#" class="me-4 hover:underline md:me-6 ">
                  About
                </a>
              </li>
              <li>
                <a href="#" class="me-4 hover:underline md:me-6">
                  Premium
                </a>
              </li>
              <li>
                <a href="#" class="me-4 hover:underline md:me-6 ">
                  Campaigns
                </a>
              </li>
              <li>
                <a href="#" class="me-4 hover:underline md:me-6">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" class="me-4 hover:underline md:me-6">
                  Affiliate Program
                </a>
              </li>
              <li>
                <a href="#" class="me-4 hover:underline md:me-6">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" class="me-4 hover:underline md:me-6">
                  Contact
                </a>
              </li>
            </ul>
          </code-showcase>
        </section>
      </div>
    )
  }
}
