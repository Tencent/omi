import { tag, Component } from 'omi'
import '@/components/button/button'
import { tailwind } from '@/tailwind'
import demoPages from './pages'

@tag('home-page')
export class ButtonLink extends Component {
  static css = [
    tailwind,
    `
  table {
    display: block;
    overflow: auto;
    border-spacing: 0;
    border-collapse: collapse;
  }

  tr:nth-child(2n) {
    background-color: #efefef;
  }
  
  table th, table td {
    padding: 6px 13px;
    border: 1px solid #dfdfdf;
  }
  `,
  ]

  show = false

  render() {
    return (
      <table class="w-full bg-white mx-auto text-gray-600 dark:text-900 mt-10 mb-96">
        <tr>
          <td>
            <a href="#/forms/date-picker/">
              <img alt="DatePicker" src="https://omi.cdn-go.cn/s/latest/omiu/datepicker.png" />
            </a>
          </td>
          <td>
            <a href="#/components/dropdown/">
              <img alt="Dropdown" src="https://omi.cdn-go.cn/s/latest/omiu/dropdown.png" />
            </a>
          </td>
          <td>
            <a href="#/components/modal/">
              <img alt="Modal" src="https://omi.cdn-go.cn/s/latest/omiu/modal.png" />
            </a>
          </td>
        </tr>
        <tr>
          <td align="center">
            <b>Datepicker✍️</b>
          </td>
          <td align="center">
            <b>Dropdown</b>
          </td>
          <td align="center">
            <b>Modal</b>
          </td>
        </tr>

        <tr>
          <td>
            <a href="#/data/chart/">
              <img alt="Charts" src="https://omi.cdn-go.cn/s/latest/omiu/charts.png" />
            </a>
          </td>
          <td>
            <a href="#/data/table/">
              <img alt="Tailwind Component" src="https://omi.cdn-go.cn/s/latest/omiu/table.png" />
            </a>
          </td>
          <td>
            <a href="#/components/swiper/">
              <img alt="swiper" src="https://omi.cdn-go.cn/s/latest/omiu/swiper.png" />
            </a>
          </td>
        </tr>
        <tr>
          <td align="center">
            <b>Chart</b>
          </td>
          <td align="center">
            <b>Table</b>
          </td>
          <td align="center">
            <b>Swiper</b>
          </td>
        </tr>

        <tr>
          <td>
            <a href="#/components/accordion/">
              <img alt="Accordion" src="https://omi.cdn-go.cn/s/latest/omiu/accordion.png" />
            </a>
          </td>
          <td>
            <a href="#/navigation/tabs/">
              <img alt="Tabs" src="https://omi.cdn-go.cn/s/latest/omiu/tabs.png" />
            </a>
          </td>
          <td>
            <a href="#/components/stepper/">
              <img alt="Stepper" src="https://omi.cdn-go.cn/s/latest/omiu/stepper.png" />
            </a>
          </td>
        </tr>
        <tr>
          <td align="center">
            <b>Accordion</b>
          </td>
          <td align="center">
            <b>Tabs</b>
          </td>
          <td align="center">
            <b>Stepper✍️</b>
          </td>
        </tr>

        <tr>
          <td>
            <a href="#/components/alert/">
              <img alt="Tailwind CSS Time picker" src="https://omi.cdn-go.cn/s/latest/omiu//alert.png" />
            </a>
          </td>
          <td>
            <a href="#/components/avatar/">
              <img alt="Tailwind CSS Tables" src="https://omi.cdn-go.cn/s/latest/omiu/avatar.png" />
            </a>
          </td>
          <td>
            <a href="#/components/badge/">
              <img alt="Tailwind CSS Navbar" src="https://omi.cdn-go.cn/s/latest/omiu/badge.png" />
            </a>
          </td>
        </tr>
        <tr>
          <td align="center">
            <b>Alert</b>
          </td>
          <td align="center">
            <b>Avatar</b>
          </td>
          <td align="center">
            <b>Badges</b>
          </td>
        </tr>

        <tr>
          <td>
            <a href="#/components/button-group/">
              <img alt="Tailwind CSS Time picker" src="https://omi.cdn-go.cn/s/latest/omiu/button-group.png" />
            </a>
          </td>
          <td>
            <a href="#/components/button/">
              <img alt="Tailwind CSS Tables" src="https://omi.cdn-go.cn/s/latest/omiu//button.png" />
            </a>
          </td>
          <td>
            <a href="#/components/card/">
              <img alt="Tailwind CSS Navbar" src="https://omi.cdn-go.cn/s/latest/omiu/card.png" />
            </a>
          </td>
        </tr>
        <tr>
          <td align="center">
            <b>Button group</b>
          </td>
          <td align="center">
            <b>Button</b>
          </td>
          <td align="center">
            <b>Card</b>
          </td>
        </tr>

        <tr>
          <td>
            <a href="#/components/chip/">
              <img alt="chip" src="https://omi.cdn-go.cn/s/latest/omiu/chip.png" />
            </a>
          </td>
          <td>
            <a href="#/components/collapse/">
              <img alt="Tailwind CSS Tables" src="https://omi.cdn-go.cn/s/latest/omiu/collapse.png" />
            </a>
          </td>
          <td>
            <a href="#/components/lightbox/">
              <img alt="Tailwind CSS Navbar" src="https://omi.cdn-go.cn/s/latest/omiu/lightbox.png" />
            </a>
          </td>
        </tr>
        <tr>
          <td align="center">
            <b>Chip</b>
          </td>
          <td align="center">
            <b>Collapse</b>
          </td>
          <td align="center">
            <b>Lightbox</b>
          </td>
        </tr>

        <tr>
          <td>
            <a href="#/forms/checkbox/">
              <img alt="Tailwind Component" src="https://omi.cdn-go.cn/s/latest/omiu/checkbox.png" />
            </a>
          </td>
          <td>
            <a href="#/components/link/">
              <img alt="Tailwind CSS Tables" src="https://omi.cdn-go.cn/s/latest/omiu/link.png" />
            </a>
          </td>
          <td>
            <a href="#/design-blocks/list/">
              <img alt="Tailwind CSS Navbar" src="https://omi.cdn-go.cn/s/latest/omiu/list.png" />
            </a>
          </td>
        </tr>
        <tr>
          <td align="center">
            <b>Checkbox</b>
          </td>
          <td align="center">
            <b>Link</b>
          </td>
          <td align="center">
            <b>List</b>
          </td>
        </tr>

        <tr>
          <td>
            <a href="#/components/notifications/">
              <img alt="Tailwind CSS Time picker" src="https://omi.cdn-go.cn/s/latest/omiu/notification.png" />
            </a>
          </td>
          <td>
            <a href="#/components/paragraphs/">
              <img alt="Tailwind CSS Tables" src="https://omi.cdn-go.cn/s/latest/omiu/paragraphs.png" />
            </a>
          </td>
          <td>
            <a href="#/components/skeleton/">
              <img alt="Tailwind CSS Navbar" src="https://omi.cdn-go.cn/s/latest/omiu/skeleton.png" />
            </a>
          </td>
        </tr>
        <tr>
          <td align="center">
            <b>Notifications✍️</b>
          </td>
          <td align="center">
            <b>Paragraphs✍️</b>
          </td>
          <td align="center">
            <b>Skeleton</b>
          </td>
        </tr>

        <tr>
          <td>
            <a href="#/components/popover/">
              <img alt="Tailwind CSS Time picker" src="https://omi.cdn-go.cn/s/latest/omiu/popover.png" />
            </a>
          </td>
          <td>
            <a href="#/components/progress/">
              <img alt="Tailwind CSS Tables" src="https://omi.cdn-go.cn/s/latest/omiu/progress.png" />
            </a>
          </td>
          <td>
            <a href="#/data/pdf/">
              <img alt="Tailwind CSS Tables" src="https://omi.cdn-go.cn/s/latest/omiu/pdf2.png" />
            </a>
          </td>
        </tr>
        <tr>
          <td align="center">
            <b>Popover</b>
          </td>
          <td align="center">
            <b>Progress</b>
          </td>
          <td align="center">
            <b>PDF</b>
          </td>
        </tr>

        <tr>
          <td>
            <a href="#/components/tooltip/">
              <img alt="tooltip" src="https://omi.cdn-go.cn/s/latest/omiu/tooltip.png" />
            </a>
          </td>
          <td>
            <a href="#/components/social-buttons/">
              <img alt="Tailwind Component" src="https://omi.cdn-go.cn/s/latest/omiu/social-media.png" />
            </a>
          </td>
          <td>
            <a href="#/components/spinners/">
              <img alt="Tailwind Component" src="https://omi.cdn-go.cn/s/latest/omiu/spinner.png" />
            </a>
          </td>
        </tr>
        <tr>
          <td align="center">
            <b>Tooltip✍️</b>
          </td>
          <td align="center">
            <b>Social buttons✍️</b>
          </td>
          <td align="center">
            <b>Spinners✍️</b>
          </td>
        </tr>

        <tr>
          <td>
            <a href="#/components/timeline/">
              <img alt="Tailwind Component" src="https://omi.cdn-go.cn/s/latest/omiu/timeline.png" />
            </a>
          </td>
          <td>
            <a href="#/components/toast/">
              <img alt="Tailwind Component" src="https://omi.cdn-go.cn/s/latest/omiu/toast.png" />
            </a>
          </td>
          <td>
            <a href="#/components/tooltip/">
              <img alt="Tailwind Component" src="https://omi.cdn-go.cn/s/latest/omiu/tooltip2.png" />
            </a>
          </td>
        </tr>
        <tr>
          <td align="center">
            <b>Timeline✍️</b>
          </td>
          <td align="center">
            <b>Toast✍️</b>
          </td>
          <td align="center">
            <b>Tooltip✍️</b>
          </td>
        </tr>

        <tr>
          <td>
            <a href="#/forms/file-input/">
              <img alt="Tailwind Component" src="https://omi.cdn-go.cn/s/latest/omiu/file-upload.png" />
            </a>
          </td>
          <td>
            <a href="#/forms/input/">
              <img alt="Tailwind Component" src="https://omi.cdn-go.cn/s/latest/omiu/input-group.png" />
            </a>
          </td>

          <td>
            <a href="#/components/popconfirm/">
              <img alt="Tailwind Component" src="https://omi.cdn-go.cn/s/latest/omiu/popconfirm.png" />
            </a>
          </td>
        </tr>
        <tr>
          <td align="center">
            <b>File input✍️</b>
          </td>
          <td align="center">
            <b>Input group✍️</b>
          </td>
          <td align="center">
            <b>Popconfirm</b>
          </td>
        </tr>

        <tr>
          <td>
            <a href="#/forms/radio/">
              <img alt="Tailwind Component" src="https://omi.cdn-go.cn/s/latest/omiu/radio.png" />
            </a>
          </td>
          <td>
            <a href="#/forms/range/">
              <img alt="Tailwind Component" src="https://omi.cdn-go.cn/s/latest/omiu/range.png" />
            </a>
          </td>
          <td>
            <a href="#/forms/registration-form/">
              <img alt="Tailwind Component" src="https://omi.cdn-go.cn/s/latest/omiu/registration-form.png" />
            </a>
          </td>
        </tr>
        <tr>
          <td align="center">
            <b>Radio✍️</b>
          </td>
          <td align="center">
            <b>Range✍️</b>
          </td>
          <td align="center">
            <b>Registration form✍️</b>
          </td>
        </tr>

        <tr>
          <td>
            <a href="#/forms/search/">
              <img alt="Tailwind Component" src="https://omi.cdn-go.cn/s/latest/omiu/search.png" />
            </a>
          </td>
          <td>
            <a href="#/forms/select/">
              <img alt="Tailwind Component" src="https://omi.cdn-go.cn/s/latest/omiu/select.png" />
            </a>
          </td>
          <td>
            <a href="#/forms/switch/">
              <img alt="Tailwind Component" src="https://omi.cdn-go.cn/s/latest/omiu/swiper.png" />
            </a>
          </td>
        </tr>
        <tr>
          <td align="center">
            <b>Search✍️</b>
          </td>
          <td align="center">
            <b>Select✍️</b>
          </td>
          <td align="center">
            <b>Switch✍️</b>
          </td>
        </tr>

        <tr>
          <td>
            <a href="#/forms/input/">
              <img alt="Tailwind Component" src="https://omi.cdn-go.cn/s/latest/omiu/textarea.png" />
            </a>
          </td>

          <td>
            <a href="#/methods/ripple/">
              <img alt="Tailwind Component" src="https://omi.cdn-go.cn/s/latest/omiu/ripple.png" />
            </a>
          </td>

          <td>
            <a href="#/components/rating/">
              <img alt="Tailwind Component" src="https://omi.cdn-go.cn/s/latest/omiu/rating.png" />
            </a>
          </td>
        </tr>
        <tr>
          <td align="center">
            <b>Input</b>
          </td>

          <td align="center">
            <b>Ripple✍️</b>
          </td>

          <td align="center">
            <b>Rating</b>
          </td>
        </tr>

        <tr>
          <td>
            <a href="https://tw-elements.com/">
              <img alt="Logo Clouds" src="https://omi.cdn-go.cn/s/latest/omiu/design-blocks.png" />
            </a>
          </td>
        </tr>
        <tr>
          <td align="center">
            <b>More coming soon</b>
          </td>
        </tr>

        {/* <tr>
          <td>
            <a href="#/forms/timepicker/">
              <img alt="Tailwind CSS Time picker" src="https://omi.cdn-go.cn/s/latest/omiu/timepicker.png" />
            </a>
          </td>
          <td>
            <a href="#/navigation/footer/">
              <img alt="Tailwind CSS Tables" src="https://omi.cdn-go.cn/s/latest/omiu/footer.png" />
            </a>
          </td>
          <td>
            <a href="#/navigation/navbar/">
              <img alt="Tailwind CSS Navbar" src="https://omi.cdn-go.cn/s/latest/omiu/navbar.png" />
            </a>
          </td>
        </tr>
        <tr>
          <td align="center">
            <b>Timepicker✍️</b>
          </td>
          <td align="center">
            <b>Footer✍️</b>
          </td>
          <td align="center">
            <b>Navbar✍️</b>
          </td>
        </tr> */}

        {/* <tr>
          <td>
            <a href="#/components/video/">
              <img
                alt="Tailwind Component"
                src="https://mdbootstrap.com/docs/standard/pro/demo/assets/images/video.webp"
              />
            </a>
          </td>
          <td>
            <a href="#/components/video-carousel/">
              <img
                alt="Tailwind Component"
                src="https://mdbootstrap.com/docs/standard/pro/demo/assets/images/video-carousel.webp"
              />
            </a>
          </td>
          <td>
            <a href="#/forms/checkbox/">
              <img
                alt="Tailwind Component"
                src="https://mdbootstrap.com/docs/standard/pro/demo/assets/images/components-free/checkbox-1.webp"
              />
            </a>
          </td>
        </tr>
        <tr>
          <td align="center">
            <b>Video✍️</b>
          </td>
          <td align="center">
            <b>Video carousel✍️</b>
          </td>
          <td align="center">
            <b>Checkbox✍️</b>
          </td>
        </tr> */}
      </table>
    )
    return (
      <div class="mt-10">
        {demoPages.map(({ section, pages }) => (
          <div class="mb-10" key={section}>
            {pages.length > 0 && <h2 class="text-2xl my-3">{section}</h2>}
            {pages.map(({ name, path }) => (
              <o-button uppercase={false} class="mb-1 mr-1" tag="a" href={`#${path}`} key={name}>
                {name.charAt(0).toUpperCase() + name.slice(1)}
              </o-button>
            ))}
          </div>
        ))}
      </div>
    )
  }
}
