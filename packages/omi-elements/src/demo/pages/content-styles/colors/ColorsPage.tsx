import { tag, Component, bind } from 'omi'
import { Collapse, Ripple, Modal } from 'omi-elements'
import { tailwind } from '@/tailwind'
import '@/components/code-showcase'

@tag('colors-page')
export default class ColorsPage extends Component {
  static css = [tailwind]

  render() {
    return (
      <div className="container my-12 !max-w-full">
        <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="basic" data-te-spy-item>
          Theme
        </h2>

        <p className="mb-3">Main color palette.</p>
        <code-showcase
          code={`<div className="grid gap-4 xl:grid-cols-4 xl:grid-rows-2">
  <div className="flex h-28 w-full items-center justify-center rounded-lg bg-primary">
    <p className="text-neutral-50">Primary (#3B71CA)</p>
  </div>
  <div className="flex h-28 w-full items-center justify-center rounded-lg bg-secondary">
    <p className="text-neutral-50">Secondary (#9FA6B2)</p>
  </div>
  <div className="flex h-28 w-full items-center justify-center rounded-lg bg-success">
    <p className="text-neutral-50">Success (#14A44D)</p>
  </div>
  <div className="flex h-28 w-full items-center justify-center rounded-lg bg-danger">
    <p className="text-neutral-50">Danger (#DC4C64)</p>
  </div>
  <div className="flex h-28 w-full items-center justify-center rounded-lg bg-warning">
    <p className="text-neutral-50">Warning (#E4A11B)</p>
  </div>
  <div className="flex h-28 w-full items-center justify-center rounded-lg bg-info">
    <p className="text-neutral-50">Info (#54B4D3)</p>
  </div>
  <div className="flex h-28 w-full items-center justify-center rounded-lg bg-neutral-50">
    <p className="text-neutral-800">Light (#F9FAFB)</p>
  </div>
  <div className="flex h-28 w-full items-center justify-center rounded-lg bg-neutral-800 dark:bg-neutral-900">
    <p className="text-neutral-50">Dark (#1F2937)</p>
  </div>
</div>`}
        >
          <div className="grid gap-4 xl:grid-cols-4 xl:grid-rows-2">
            <div className="flex h-28 w-full items-center justify-center rounded-lg bg-primary">
              <p className="text-neutral-50">Primary (#3B71CA)</p>
            </div>
            <div className="flex h-28 w-full items-center justify-center rounded-lg bg-secondary">
              <p className="text-neutral-50">Secondary (#9FA6B2)</p>
            </div>
            <div className="flex h-28 w-full items-center justify-center rounded-lg bg-success">
              <p className="text-neutral-50">Success (#14A44D)</p>
            </div>
            <div className="flex h-28 w-full items-center justify-center rounded-lg bg-danger">
              <p className="text-neutral-50">Danger (#DC4C64)</p>
            </div>
            <div className="flex h-28 w-full items-center justify-center rounded-lg bg-warning">
              <p className="text-neutral-50">Warning (#E4A11B)</p>
            </div>
            <div className="flex h-28 w-full items-center justify-center rounded-lg bg-info">
              <p className="text-neutral-50">Info (#54B4D3)</p>
            </div>
            <div className="flex h-28 w-full items-center justify-center rounded-lg bg-neutral-50">
              <p className="text-neutral-800">Light (#F9FAFB)</p>
            </div>
            <div className="flex h-28 w-full items-center justify-center rounded-lg bg-neutral-800 dark:bg-neutral-900">
              <p className="text-neutral-50">Dark (#1F2937)</p>
            </div>
          </div>
        </code-showcase>

        <h2 className="mb-5 mt-12 text-3xl font-semibold leading-normal" id="shades" data-te-spy-item>
          Shades
        </h2>

        <p className="mb-3">Palette of color shades.</p>
        <code-showcase
          code={`<div>
  <div className="mb-6 grid gap-4 xl:grid-cols-11 xl:grid-rows-1">
    <div className="h-16 w-full">Primary</div>
    <div>
      <div className="mb-4 h-16 w-full rounded-lg bg-primary-50"></div>
      <p className="text-xs font-medium">50</p>
      <p className="text-xs text-neutral-500 dark:text-neutral-400">#F1F5FB</p>
    </div>
    <div>
      <div className="mb-4 h-16 w-full rounded-lg bg-primary-100"></div>
      <p className="text-xs font-medium">100</p>
      <p className="text-xs text-neutral-500 dark:text-neutral-400">#E3EBF7</p>
    </div>
    <div>
      <div className="mb-4 h-16 w-full rounded-lg bg-primary-200"></div>
      <p className="text-xs font-medium">200</p>
      <p className="text-xs text-neutral-500 dark:text-neutral-400">#C7D7F0</p>
    </div>
    <div>
      <div className="mb-4 h-16 w-full rounded-lg bg-primary-300"></div>
      <p className="text-xs font-medium">300</p>
      <p className="text-xs text-neutral-500 dark:text-neutral-400">#ABC2E8</p>
    </div>
    <div>
      <div className="mb-4 h-16 w-full rounded-lg bg-primary-400"></div>
      <p className="text-xs font-medium">400</p>
      <p className="text-xs text-neutral-500 dark:text-neutral-400">#8FAEE0</p>
    </div>
    <div>
      <div className="mb-4 h-16 w-full rounded-lg bg-primary-500"></div>
      <p className="text-xs font-medium">500</p>
      <p className="text-xs text-neutral-500 dark:text-neutral-400">#6590D5</p>
    </div>
    <div>
      <div className="mb-4 h-16 w-full rounded-lg bg-primary-600"></div>
      <p className="text-xs font-medium">600</p>
      <p className="text-xs text-neutral-500 dark:text-neutral-400">#3061AF</p>
    </div>
    <div>
      <div className="mb-4 h-16 w-full rounded-lg bg-primary-700"></div>
      <p className="text-xs font-medium">700</p>
      <p className="text-xs text-neutral-500 dark:text-neutral-400">#285192</p>
    </div>
    <div>
      <div className="mb-4 h-16 w-full rounded-lg bg-primary-800"></div>
      <p className="text-xs font-medium">800</p>
      <p className="text-xs text-neutral-500 dark:text-neutral-400">#204075</p>
    </div>
    <div>
      <div className="mb-4 h-16 w-full rounded-lg bg-primary-900"></div>
      <p className="text-xs font-medium">900</p>
      <p className="text-xs text-neutral-500 dark:text-neutral-400">#183058</p>
    </div>
  </div>
  <div className="mb-6 grid gap-4 xl:grid-cols-11 xl:grid-rows-1">
    <div className="h-16 w-full">Secondary</div>
    <div>
      <div className="mb-4 h-16 w-full rounded-lg bg-secondary-50"></div>
      <p className="text-xs font-medium">50</p>
      <p className="text-xs text-neutral-500 dark:text-neutral-400">#F8F9F9</p>
    </div>
    <div>
      <div className="mb-4 h-16 w-full rounded-lg bg-secondary-100"></div>
      <p className="text-xs font-medium">100</p>
      <p className="text-xs text-neutral-500 dark:text-neutral-400">#F1F2F4</p>
    </div>
    <div>
      <div className="mb-4 h-16 w-full rounded-lg bg-secondary-200"></div>
      <p className="text-xs font-medium">200</p>
      <p className="text-xs text-neutral-500 dark:text-neutral-400">#E4E6E9</p>
    </div>
    <div>
      <div className="mb-4 h-16 w-full rounded-lg bg-secondary-300"></div>
      <p className="text-xs font-medium">300</p>
      <p className="text-xs text-neutral-500 dark:text-neutral-400">#D6D9DE</p>
    </div>
    <div>
      <div className="mb-4 h-16 w-full rounded-lg bg-secondary-400"></div>
      <p className="text-xs font-medium">400</p>
      <p className="text-xs text-neutral-500 dark:text-neutral-400">#C8CCD3</p>
    </div>
    <div>
      <div className="mb-4 h-16 w-full rounded-lg bg-secondary-500"></div>
      <p className="text-xs font-medium">500</p>
      <p className="text-xs text-neutral-500 dark:text-neutral-400">#B3B9C2</p>
    </div>
    <div>
      <div className="mb-4 h-16 w-full rounded-lg bg-secondary-600"></div>
      <p className="text-xs font-medium">600</p>
      <p className="text-xs text-neutral-500 dark:text-neutral-400">#848D9C</p>
    </div>
    <div>
      <div className="mb-4 h-16 w-full rounded-lg bg-secondary-700"></div>
      <p className="text-xs font-medium">700</p>
      <p className="text-xs text-neutral-500 dark:text-neutral-400">#6B7585</p>
    </div>
    <div>
      <div className="mb-4 h-16 w-full rounded-lg bg-secondary-800"></div>
      <p className="text-xs font-medium">800</p>
      <p className="text-xs text-neutral-500 dark:text-neutral-400">#565D6B</p>
    </div>
    <div>
      <div className="mb-4 h-16 w-full rounded-lg bg-secondary-900"></div>
      <p className="text-xs font-medium">900</p>
      <p className="text-xs text-neutral-500 dark:text-neutral-400">#404650</p>
    </div>
  </div>
  <div className="mb-6 grid gap-4 xl:grid-cols-11 xl:grid-rows-1">
    <div className="h-16 w-full">Success</div>
    <div>
      <div className="mb-4 h-16 w-full rounded-lg bg-success-50"></div>
      <p className="text-xs font-medium">50</p>
      <p className="text-xs text-neutral-500 dark:text-neutral-400">#EAFCF2</p>
    </div>
    <div>
      <div className="mb-4 h-16 w-full rounded-lg bg-success-100"></div>
      <p className="text-xs font-medium">100</p>
      <p className="text-xs text-neutral-500 dark:text-neutral-400">#D6FAE4</p>
    </div>
    <div>
      <div className="mb-4 h-16 w-full rounded-lg bg-success-200"></div>
      <p className="text-xs font-medium">200</p>
      <p className="text-xs text-neutral-500 dark:text-neutral-400">#ACF5C9</p>
    </div>
    <div>
      <div className="mb-4 h-16 w-full rounded-lg bg-success-300"></div>
      <p className="text-xs font-medium">300</p>
      <p className="text-xs text-neutral-500 dark:text-neutral-400">#83F0AE</p>
    </div>
    <div>
      <div className="mb-4 h-16 w-full rounded-lg bg-success-400"></div>
      <p className="text-xs font-medium">400</p>
      <p className="text-xs text-neutral-500 dark:text-neutral-400">#59EA93</p>
    </div>
    <div>
      <div className="mb-4 h-16 w-full rounded-lg bg-success-500"></div>
      <p className="text-xs font-medium">500</p>
      <p className="text-xs text-neutral-500 dark:text-neutral-400">#1CE26B</p>
    </div>
    <div>
      <div className="mb-4 h-16 w-full rounded-lg bg-success-600"></div>
      <p className="text-xs font-medium">600</p>
      <p className="text-xs text-neutral-500 dark:text-neutral-400">#118C42</p>
    </div>
    <div>
      <div className="mb-4 h-16 w-full rounded-lg bg-success-700"></div>
      <p className="text-xs font-medium">700</p>
      <p className="text-xs text-neutral-500 dark:text-neutral-400">#0E7537</p>
    </div>
    <div>
      <div className="mb-4 h-16 w-full rounded-lg bg-success-800"></div>
      <p className="text-xs font-medium">800</p>
      <p className="text-xs text-neutral-500 dark:text-neutral-400">#0C5D2C</p>
    </div>
    <div>
      <div className="mb-4 h-16 w-full rounded-lg bg-success-900"></div>
      <p className="text-xs font-medium">900</p>
      <p className="text-xs text-neutral-500 dark:text-neutral-400">#094621</p>
    </div>
  </div>
  <div className="mb-6 grid gap-4 xl:grid-cols-11 xl:grid-rows-1">
    <div className="h-16 w-full">Danger</div>
    <div>
      <div className="mb-4 h-16 w-full rounded-lg bg-danger-50"></div>
      <p className="text-xs font-medium">50</p>
      <p className="text-xs text-neutral-500 dark:text-neutral-400">#FCF2F4</p>
    </div>
    <div>
      <div className="mb-4 h-16 w-full rounded-lg bg-danger-100"></div>
      <p className="text-xs font-medium">100</p>
      <p className="text-xs text-neutral-500 dark:text-neutral-400">#FAE5E9</p>
    </div>
    <div>
      <div className="mb-4 h-16 w-full rounded-lg bg-danger-200"></div>
      <p className="text-xs font-medium">200</p>
      <p className="text-xs text-neutral-500 dark:text-neutral-400">#F5CCD3</p>
    </div>
    <div>
      <div className="mb-4 h-16 w-full rounded-lg bg-danger-300"></div>
      <p className="text-xs font-medium">300</p>
      <p className="text-xs text-neutral-500 dark:text-neutral-400">#F0B2BD</p>
    </div>
    <div>
      <div className="mb-4 h-16 w-full rounded-lg bg-danger-400"></div>
      <p className="text-xs font-medium">400</p>
      <p className="text-xs text-neutral-500 dark:text-neutral-400">#EB99A6</p>
    </div>
    <div>
      <div className="mb-4 h-16 w-full rounded-lg bg-danger-500"></div>
      <p className="text-xs font-medium">500</p>
      <p className="text-xs text-neutral-500 dark:text-neutral-400">#E37285</p>
    </div>
    <div>
      <div className="mb-4 h-16 w-full rounded-lg bg-danger-600"></div>
      <p className="text-xs font-medium">600</p>
      <p className="text-xs text-neutral-500 dark:text-neutral-400">#D42A46</p>
    </div>
    <div>
      <div className="mb-4 h-16 w-full rounded-lg bg-danger-700"></div>
      <p className="text-xs font-medium">700</p>
      <p className="text-xs text-neutral-500 dark:text-neutral-400">#B0233A</p>
    </div>
    <div>
      <div className="mb-4 h-16 w-full rounded-lg bg-danger-800"></div>
      <p className="text-xs font-medium">800</p>
      <p className="text-xs text-neutral-500 dark:text-neutral-400">#8D1C2F</p>
    </div>
    <div>
      <div className="mb-4 h-16 w-full rounded-lg bg-danger-900"></div>
      <p className="text-xs font-medium">900</p>
      <p className="text-xs text-neutral-500 dark:text-neutral-400">#6A1523</p>
    </div>
  </div>
  <div className="mb-6 grid gap-4 xl:grid-cols-11 xl:grid-rows-1">
    <div className="h-16 w-full">Warning</div>
    <div>
      <div className="mb-4 h-16 w-full rounded-lg bg-warning-50"></div>
      <p className="text-xs font-medium">50</p>
      <p className="text-xs text-neutral-500 dark:text-neutral-400">#FDF8EF</p>
    </div>
    <div>
      <div className="mb-4 h-16 w-full rounded-lg bg-warning-100"></div>
      <p className="text-xs font-medium">100</p>
      <p className="text-xs text-neutral-500 dark:text-neutral-400">#FBF2DE</p>
    </div>
    <div>
      <div className="mb-4 h-16 w-full rounded-lg bg-warning-200"></div>
      <p className="text-xs font-medium">200</p>
      <p className="text-xs text-neutral-500 dark:text-neutral-400">#F7E4BE</p>
    </div>
    <div>
      <div className="mb-4 h-16 w-full rounded-lg bg-warning-300"></div>
      <p className="text-xs font-medium">300</p>
      <p className="text-xs text-neutral-500 dark:text-neutral-400">#F4D79D</p>
    </div>
    <div>
      <div className="mb-4 h-16 w-full rounded-lg bg-warning-400"></div>
      <p className="text-xs font-medium">400</p>
      <p className="text-xs text-neutral-500 dark:text-neutral-400">#F0C97D</p>
    </div>
    <div>
      <div className="mb-4 h-16 w-full rounded-lg bg-warning-500"></div>
      <p className="text-xs font-medium">500</p>
      <p className="text-xs text-neutral-500 dark:text-neutral-400">#EAB54C</p>
    </div>
    <div>
      <div className="mb-4 h-16 w-full rounded-lg bg-warning-600"></div>
      <p className="text-xs font-medium">600</p>
      <p className="text-xs text-neutral-500 dark:text-neutral-400">#C48A17</p>
    </div>
    <div>
      <div className="mb-4 h-16 w-full rounded-lg bg-warning-700"></div>
      <p className="text-xs font-medium">700</p>
      <p className="text-xs text-neutral-500 dark:text-neutral-400">#A37313</p>
    </div>
    <div>
      <div className="mb-4 h-16 w-full rounded-lg bg-warning-800"></div>
      <p className="text-xs font-medium">800</p>
      <p className="text-xs text-neutral-500 dark:text-neutral-400">#825C0F</p>
    </div>
    <div>
      <div className="mb-4 h-16 w-full rounded-lg bg-warning-900"></div>
      <p className="text-xs font-medium">900</p>
      <p className="text-xs text-neutral-500 dark:text-neutral-400">#62450B</p>
    </div>
  </div>
  <div className="grid gap-4 xl:grid-cols-11 xl:grid-rows-1">
    <div className="h-16 w-full">Info</div>
    <div>
      <div className="mb-4 h-16 w-full rounded-lg bg-info-50"></div>
      <p className="text-xs font-medium">50</p>
      <p className="text-xs text-neutral-500 dark:text-neutral-400">#F3FAFC</p>
    </div>
    <div>
      <div className="mb-4 h-16 w-full rounded-lg bg-info-100"></div>
      <p className="text-xs font-medium">100</p>
      <p className="text-xs text-neutral-500 dark:text-neutral-400">#E7F4F9</p>
    </div>
    <div>
      <div className="mb-4 h-16 w-full rounded-lg bg-info-200"></div>
      <p className="text-xs font-medium">200</p>
      <p className="text-xs text-neutral-500 dark:text-neutral-400">#CEE9F2</p>
    </div>
    <div>
      <div className="mb-4 h-16 w-full rounded-lg bg-info-300"></div>
      <p className="text-xs font-medium">300</p>
      <p className="text-xs text-neutral-500 dark:text-neutral-400">#B6DFEC</p>
    </div>
    <div>
      <div className="mb-4 h-16 w-full rounded-lg bg-info-400"></div>
      <p className="text-xs font-medium">400</p>
      <p className="text-xs text-neutral-500 dark:text-neutral-400">#9ED4E6</p>
    </div>
    <div>
      <div className="mb-4 h-16 w-full rounded-lg bg-info-500"></div>
      <p className="text-xs font-medium">500</p>
      <p className="text-xs text-neutral-500 dark:text-neutral-400">#79C4DC</p>
    </div>
    <div>
      <div className="mb-4 h-16 w-full rounded-lg bg-info-600"></div>
      <p className="text-xs font-medium">600</p>
      <p className="text-xs text-neutral-500 dark:text-neutral-400">#34A4CA</p>
    </div>
    <div>
      <div className="mb-4 h-16 w-full rounded-lg bg-info-700"></div>
      <p className="text-xs font-medium">700</p>
      <p className="text-xs text-neutral-500 dark:text-neutral-400">#2B89A8</p>
    </div>
    <div>
      <div className="mb-4 h-16 w-full rounded-lg bg-info-800"></div>
      <p className="text-xs font-medium">800</p>
      <p className="text-xs text-neutral-500 dark:text-neutral-400">#236D86</p>
    </div>
    <div>
      <div className="mb-4 h-16 w-full rounded-lg bg-info-900"></div>
      <p className="text-xs font-medium">900</p>
      <p className="text-xs text-neutral-500 dark:text-neutral-400">#1A5265</p>
    </div>
  </div>
</div>`}
        >
          <div>
            <div className="mb-6 grid gap-4 xl:grid-cols-11 xl:grid-rows-1">
              <div className="h-16 w-full">Primary</div>
              <div>
                <div className="mb-4 h-16 w-full rounded-lg bg-primary-50"></div>
                <p className="text-xs font-medium">50</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">#F1F5FB</p>
              </div>
              <div>
                <div className="mb-4 h-16 w-full rounded-lg bg-primary-100"></div>
                <p className="text-xs font-medium">100</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">#E3EBF7</p>
              </div>
              <div>
                <div className="mb-4 h-16 w-full rounded-lg bg-primary-200"></div>
                <p className="text-xs font-medium">200</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">#C7D7F0</p>
              </div>
              <div>
                <div className="mb-4 h-16 w-full rounded-lg bg-primary-300"></div>
                <p className="text-xs font-medium">300</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">#ABC2E8</p>
              </div>
              <div>
                <div className="mb-4 h-16 w-full rounded-lg bg-primary-400"></div>
                <p className="text-xs font-medium">400</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">#8FAEE0</p>
              </div>
              <div>
                <div className="mb-4 h-16 w-full rounded-lg bg-primary-500"></div>
                <p className="text-xs font-medium">500</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">#6590D5</p>
              </div>
              <div>
                <div className="mb-4 h-16 w-full rounded-lg bg-primary-600"></div>
                <p className="text-xs font-medium">600</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">#3061AF</p>
              </div>
              <div>
                <div className="mb-4 h-16 w-full rounded-lg bg-primary-700"></div>
                <p className="text-xs font-medium">700</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">#285192</p>
              </div>
              <div>
                <div className="mb-4 h-16 w-full rounded-lg bg-primary-800"></div>
                <p className="text-xs font-medium">800</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">#204075</p>
              </div>
              <div>
                <div className="mb-4 h-16 w-full rounded-lg bg-primary-900"></div>
                <p className="text-xs font-medium">900</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">#183058</p>
              </div>
            </div>
            <div className="mb-6 grid gap-4 xl:grid-cols-11 xl:grid-rows-1">
              <div className="h-16 w-full">Secondary</div>
              <div>
                <div className="mb-4 h-16 w-full rounded-lg bg-secondary-50"></div>
                <p className="text-xs font-medium">50</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">#F8F9F9</p>
              </div>
              <div>
                <div className="mb-4 h-16 w-full rounded-lg bg-secondary-100"></div>
                <p className="text-xs font-medium">100</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">#F1F2F4</p>
              </div>
              <div>
                <div className="mb-4 h-16 w-full rounded-lg bg-secondary-200"></div>
                <p className="text-xs font-medium">200</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">#E4E6E9</p>
              </div>
              <div>
                <div className="mb-4 h-16 w-full rounded-lg bg-secondary-300"></div>
                <p className="text-xs font-medium">300</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">#D6D9DE</p>
              </div>
              <div>
                <div className="mb-4 h-16 w-full rounded-lg bg-secondary-400"></div>
                <p className="text-xs font-medium">400</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">#C8CCD3</p>
              </div>
              <div>
                <div className="mb-4 h-16 w-full rounded-lg bg-secondary-500"></div>
                <p className="text-xs font-medium">500</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">#B3B9C2</p>
              </div>
              <div>
                <div className="mb-4 h-16 w-full rounded-lg bg-secondary-600"></div>
                <p className="text-xs font-medium">600</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">#848D9C</p>
              </div>
              <div>
                <div className="mb-4 h-16 w-full rounded-lg bg-secondary-700"></div>
                <p className="text-xs font-medium">700</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">#6B7585</p>
              </div>
              <div>
                <div className="mb-4 h-16 w-full rounded-lg bg-secondary-800"></div>
                <p className="text-xs font-medium">800</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">#565D6B</p>
              </div>
              <div>
                <div className="mb-4 h-16 w-full rounded-lg bg-secondary-900"></div>
                <p className="text-xs font-medium">900</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">#404650</p>
              </div>
            </div>
            <div className="mb-6 grid gap-4 xl:grid-cols-11 xl:grid-rows-1">
              <div className="h-16 w-full">Success</div>
              <div>
                <div className="mb-4 h-16 w-full rounded-lg bg-success-50"></div>
                <p className="text-xs font-medium">50</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">#EAFCF2</p>
              </div>
              <div>
                <div className="mb-4 h-16 w-full rounded-lg bg-success-100"></div>
                <p className="text-xs font-medium">100</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">#D6FAE4</p>
              </div>
              <div>
                <div className="mb-4 h-16 w-full rounded-lg bg-success-200"></div>
                <p className="text-xs font-medium">200</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">#ACF5C9</p>
              </div>
              <div>
                <div className="mb-4 h-16 w-full rounded-lg bg-success-300"></div>
                <p className="text-xs font-medium">300</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">#83F0AE</p>
              </div>
              <div>
                <div className="mb-4 h-16 w-full rounded-lg bg-success-400"></div>
                <p className="text-xs font-medium">400</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">#59EA93</p>
              </div>
              <div>
                <div className="mb-4 h-16 w-full rounded-lg bg-success-500"></div>
                <p className="text-xs font-medium">500</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">#1CE26B</p>
              </div>
              <div>
                <div className="mb-4 h-16 w-full rounded-lg bg-success-600"></div>
                <p className="text-xs font-medium">600</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">#118C42</p>
              </div>
              <div>
                <div className="mb-4 h-16 w-full rounded-lg bg-success-700"></div>
                <p className="text-xs font-medium">700</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">#0E7537</p>
              </div>
              <div>
                <div className="mb-4 h-16 w-full rounded-lg bg-success-800"></div>
                <p className="text-xs font-medium">800</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">#0C5D2C</p>
              </div>
              <div>
                <div className="mb-4 h-16 w-full rounded-lg bg-success-900"></div>
                <p className="text-xs font-medium">900</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">#094621</p>
              </div>
            </div>
            <div className="mb-6 grid gap-4 xl:grid-cols-11 xl:grid-rows-1">
              <div className="h-16 w-full">Danger</div>
              <div>
                <div className="mb-4 h-16 w-full rounded-lg bg-danger-50"></div>
                <p className="text-xs font-medium">50</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">#FCF2F4</p>
              </div>
              <div>
                <div className="mb-4 h-16 w-full rounded-lg bg-danger-100"></div>
                <p className="text-xs font-medium">100</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">#FAE5E9</p>
              </div>
              <div>
                <div className="mb-4 h-16 w-full rounded-lg bg-danger-200"></div>
                <p className="text-xs font-medium">200</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">#F5CCD3</p>
              </div>
              <div>
                <div className="mb-4 h-16 w-full rounded-lg bg-danger-300"></div>
                <p className="text-xs font-medium">300</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">#F0B2BD</p>
              </div>
              <div>
                <div className="mb-4 h-16 w-full rounded-lg bg-danger-400"></div>
                <p className="text-xs font-medium">400</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">#EB99A6</p>
              </div>
              <div>
                <div className="mb-4 h-16 w-full rounded-lg bg-danger-500"></div>
                <p className="text-xs font-medium">500</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">#E37285</p>
              </div>
              <div>
                <div className="mb-4 h-16 w-full rounded-lg bg-danger-600"></div>
                <p className="text-xs font-medium">600</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">#D42A46</p>
              </div>
              <div>
                <div className="mb-4 h-16 w-full rounded-lg bg-danger-700"></div>
                <p className="text-xs font-medium">700</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">#B0233A</p>
              </div>
              <div>
                <div className="mb-4 h-16 w-full rounded-lg bg-danger-800"></div>
                <p className="text-xs font-medium">800</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">#8D1C2F</p>
              </div>
              <div>
                <div className="mb-4 h-16 w-full rounded-lg bg-danger-900"></div>
                <p className="text-xs font-medium">900</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">#6A1523</p>
              </div>
            </div>
            <div className="mb-6 grid gap-4 xl:grid-cols-11 xl:grid-rows-1">
              <div className="h-16 w-full">Warning</div>
              <div>
                <div className="mb-4 h-16 w-full rounded-lg bg-warning-50"></div>
                <p className="text-xs font-medium">50</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">#FDF8EF</p>
              </div>
              <div>
                <div className="mb-4 h-16 w-full rounded-lg bg-warning-100"></div>
                <p className="text-xs font-medium">100</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">#FBF2DE</p>
              </div>
              <div>
                <div className="mb-4 h-16 w-full rounded-lg bg-warning-200"></div>
                <p className="text-xs font-medium">200</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">#F7E4BE</p>
              </div>
              <div>
                <div className="mb-4 h-16 w-full rounded-lg bg-warning-300"></div>
                <p className="text-xs font-medium">300</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">#F4D79D</p>
              </div>
              <div>
                <div className="mb-4 h-16 w-full rounded-lg bg-warning-400"></div>
                <p className="text-xs font-medium">400</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">#F0C97D</p>
              </div>
              <div>
                <div className="mb-4 h-16 w-full rounded-lg bg-warning-500"></div>
                <p className="text-xs font-medium">500</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">#EAB54C</p>
              </div>
              <div>
                <div className="mb-4 h-16 w-full rounded-lg bg-warning-600"></div>
                <p className="text-xs font-medium">600</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">#C48A17</p>
              </div>
              <div>
                <div className="mb-4 h-16 w-full rounded-lg bg-warning-700"></div>
                <p className="text-xs font-medium">700</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">#A37313</p>
              </div>
              <div>
                <div className="mb-4 h-16 w-full rounded-lg bg-warning-800"></div>
                <p className="text-xs font-medium">800</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">#825C0F</p>
              </div>
              <div>
                <div className="mb-4 h-16 w-full rounded-lg bg-warning-900"></div>
                <p className="text-xs font-medium">900</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">#62450B</p>
              </div>
            </div>
            <div className="grid gap-4 xl:grid-cols-11 xl:grid-rows-1">
              <div className="h-16 w-full">Info</div>
              <div>
                <div className="mb-4 h-16 w-full rounded-lg bg-info-50"></div>
                <p className="text-xs font-medium">50</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">#F3FAFC</p>
              </div>
              <div>
                <div className="mb-4 h-16 w-full rounded-lg bg-info-100"></div>
                <p className="text-xs font-medium">100</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">#E7F4F9</p>
              </div>
              <div>
                <div className="mb-4 h-16 w-full rounded-lg bg-info-200"></div>
                <p className="text-xs font-medium">200</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">#CEE9F2</p>
              </div>
              <div>
                <div className="mb-4 h-16 w-full rounded-lg bg-info-300"></div>
                <p className="text-xs font-medium">300</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">#B6DFEC</p>
              </div>
              <div>
                <div className="mb-4 h-16 w-full rounded-lg bg-info-400"></div>
                <p className="text-xs font-medium">400</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">#9ED4E6</p>
              </div>
              <div>
                <div className="mb-4 h-16 w-full rounded-lg bg-info-500"></div>
                <p className="text-xs font-medium">500</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">#79C4DC</p>
              </div>
              <div>
                <div className="mb-4 h-16 w-full rounded-lg bg-info-600"></div>
                <p className="text-xs font-medium">600</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">#34A4CA</p>
              </div>
              <div>
                <div className="mb-4 h-16 w-full rounded-lg bg-info-700"></div>
                <p className="text-xs font-medium">700</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">#2B89A8</p>
              </div>
              <div>
                <div className="mb-4 h-16 w-full rounded-lg bg-info-800"></div>
                <p className="text-xs font-medium">800</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">#236D86</p>
              </div>
              <div>
                <div className="mb-4 h-16 w-full rounded-lg bg-info-900"></div>
                <p className="text-xs font-medium">900</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">#1A5265</p>
              </div>
            </div>
          </div>
        </code-showcase>

        <h2 className="mb-5 mt-12 text-3xl font-semibold leading-normal" id="background" data-te-spy-item>
          Background
        </h2>

        <p className="mb-3">
          Easily set the background by using <code>.bg-*</code> color classes
        </p>
        <code-showcase
          code={`<div className="grid-rows-8 grid gap-4">
  <div className="flex h-16 w-full items-center rounded-md bg-primary p-4">
    <p className="text-neutral-50">.bg-primary</p>
  </div>
  <div className="flex h-16 w-full items-center rounded-md bg-secondary p-4">
    <p className="text-neutral-50">.bg-secondary</p>
  </div>
  <div className="flex h-16 w-full items-center rounded-md bg-success p-4">
    <p className="text-neutral-50">.bg-success</p>
  </div>
  <div className="flex h-16 w-full items-center rounded-md bg-danger p-4">
    <p className="text-neutral-50">.bg-danger</p>
  </div>
  <div className="flex h-16 w-full items-center rounded-md bg-warning p-4">
    <p className="text-neutral-50">.bg-warning</p>
  </div>
  <div className="flex h-16 w-full items-center rounded-md bg-info p-4">
    <p className="text-neutral-50">.bg-info</p>
  </div>
  <div className="flex h-16 w-full items-center rounded-md bg-neutral-50 p-4">
    <p className="text-neutral-800">.bg-neutral-50</p>
  </div>
  <div className="flex h-16 w-full items-center rounded-md bg-neutral-800 p-4 dark:bg-neutral-900">
    <p className="text-neutral-50">.bg-neutral-800 dark: .bg-neutral-900</p>
  </div>
</div>`}
        >
          <div className="grid-rows-8 grid gap-4">
            <div className="flex h-16 w-full items-center rounded-md bg-primary p-4">
              <p className="text-neutral-50">.bg-primary</p>
            </div>
            <div className="flex h-16 w-full items-center rounded-md bg-secondary p-4">
              <p className="text-neutral-50">.bg-secondary</p>
            </div>
            <div className="flex h-16 w-full items-center rounded-md bg-success p-4">
              <p className="text-neutral-50">.bg-success</p>
            </div>
            <div className="flex h-16 w-full items-center rounded-md bg-danger p-4">
              <p className="text-neutral-50">.bg-danger</p>
            </div>
            <div className="flex h-16 w-full items-center rounded-md bg-warning p-4">
              <p className="text-neutral-50">.bg-warning</p>
            </div>
            <div className="flex h-16 w-full items-center rounded-md bg-info p-4">
              <p className="text-neutral-50">.bg-info</p>
            </div>
            <div className="flex h-16 w-full items-center rounded-md bg-neutral-50 p-4">
              <p className="text-neutral-800">.bg-neutral-50</p>
            </div>
            <div className="flex h-16 w-full items-center rounded-md bg-neutral-800 p-4 dark:bg-neutral-900">
              <p className="text-neutral-50">.bg-neutral-800 dark: .bg-neutral-900</p>
            </div>
          </div>
        </code-showcase>

        <h2 className="mb-5 mt-12 text-3xl font-semibold leading-normal" id="text" data-te-spy-item>
          Text
        </h2>

        <p className="mb-3">Colorize text with color utilities.</p>
        <code-showcase
          code={`<div className="grid-rows-8 grid gap-4">
  <p className="text-primary">Lorem ipsum dolor sit amet</p>
  <p className="text-secondary">Lorem ipsum dolor sit amet</p>
  <p className="text-success">Lorem ipsum dolor sit amet</p>
  <p className="text-danger">Lorem ipsum dolor sit amet</p>
  <p className="text-warning">Lorem ipsum dolor sit amet</p>
  <p className="text-info">Lorem ipsum dolor sit amet</p>
  <p className="bg-neutral-800 text-neutral-50 dark:bg-transparent">Lorem ipsum dolor sit amet</p>
  <p className="text-neutral-800 dark:bg-neutral-50 dark:text-neutral-900">Lorem ipsum dolor sit amet</p>
</div>`}
        >
          <div className="grid-rows-8 grid gap-4">
            <p className="text-primary">Lorem ipsum dolor sit amet</p>
            <p className="text-secondary">Lorem ipsum dolor sit amet</p>
            <p className="text-success">Lorem ipsum dolor sit amet</p>
            <p className="text-danger">Lorem ipsum dolor sit amet</p>
            <p className="text-warning">Lorem ipsum dolor sit amet</p>
            <p className="text-info">Lorem ipsum dolor sit amet</p>
            <p className="bg-neutral-800 text-neutral-50 dark:bg-transparent">Lorem ipsum dolor sit amet</p>
            <p className="text-neutral-800 dark:bg-neutral-50 dark:text-neutral-900">Lorem ipsum dolor sit amet</p>
          </div>
        </code-showcase>
      </div>
    )
  }
}
