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
              <img alt="DatePicker" src="https://mdbootstrap.com/img/tw-demo/datepicker.webp" />
            </a>
          </td>
          <td>
            <a href="#/components/dropdown/">
              <img alt="Dropdown" src="https://mdbootstrap.com/img/tw-demo/dropdown.webp" />
            </a>
          </td>
          <td>
            <a href="#/components/modal/">
              <img alt="Modal" src="https://mdbootstrap.com/img/tw-demo/modal.webp" />
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
              <img alt="Charts" src="https://mdbootstrap.com/img/tw-demo/charts.webp" />
            </a>
          </td>
          <td>
            <a href="#/components/tooltip/">
              <img alt="Tooltips" src="https://mdbootstrap.com/img/tw-demo/tooltips-1.webp" />
            </a>
          </td>
          <td>
            <a href="#/components/swiper/">
              <img alt="Carousel" src="https://mdbootstrap.com/img/tw-demo/carousel.webp" />
            </a>
          </td>
        </tr>
        <tr>
          <td align="center">
            <b>Charts✍️</b>
          </td>
          <td align="center">
            <b>Tooltip✍️</b>
          </td>
          <td align="center">
            <b>Swiper</b>
          </td>
        </tr>

        <tr>
          <td>
            <a href="#/components/accordion/">
              <img alt="Accordion" src="https://mdbootstrap.com/img/tw-demo/accordion.webp" />
            </a>
          </td>
          <td>
            <a href="#/navigation/tabs/">
              <img alt="Tabs" src="https://mdbootstrap.com/img/tw-demo/tabs.webp" />
            </a>
          </td>
          <td>
            <a href="#/components/stepper/">
              <img alt="Stepper" src="https://mdbootstrap.com/img/tw-demo/stepper.webp" />
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
            <a href="#/forms/timepicker/">
              <img alt="Tailwind CSS Time picker" src="https://mdbootstrap.com/img/tw-demo/timepicker.webp" />
            </a>
          </td>
          <td>
            <a href="#/navigation/footer/">
              <img alt="Tailwind CSS Tables" src="https://mdbootstrap.com/img/tw-demo/footer.webp" />
            </a>
          </td>
          <td>
            <a href="#/navigation/navbar/">
              <img alt="Tailwind CSS Navbar" src="https://mdbootstrap.com/img/tw-demo/navbar.webp" />
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
        </tr>

        <tr>
          <td>
            <a href="#/components/alert/">
              <img
                alt="Tailwind CSS Time picker"
                src="https://mdbootstrap.com/docs/standard/pro/demo/assets/images/components-pro/alert-1.webp"
              />
            </a>
          </td>
          <td>
            <a href="#/components/avatar/">
              <img
                alt="Tailwind CSS Tables"
                src="https://mdbootstrap.com/docs/standard/pro/demo/assets/images/avatar.webp"
              />
            </a>
          </td>
          <td>
            <a href="#/components/badge/">
              <img
                alt="Tailwind CSS Navbar"
                src="https://mdbootstrap.com/docs/standard/pro/demo/assets/images/components-free/badge-1.webp"
              />
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
              <img
                alt="Tailwind CSS Time picker"
                src="https://mdbootstrap.com/docs/standard/pro/demo/assets/images/components-free/button-group-1.webp"
              />
            </a>
          </td>
          <td>
            <a href="#/components/button/">
              <img
                alt="Tailwind CSS Tables"
                src="https://mdbootstrap.com/docs/standard/pro/demo/assets/images/components-free/button-2.webp"
              />
            </a>
          </td>
          <td>
            <a href="#/components/card/">
              <img
                alt="Tailwind CSS Navbar"
                src="https://mdbootstrap.com/docs/standard/pro/demo/assets/images/components-free/card-1.webp"
              />
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
              <img
                alt="Tailwind CSS Time picker"
                src="https://mdbcdn.b-cdn.net/wp-content/themes/mdbootstrap4/content/en/_mdb5/standard/pro/demo-new/assets/images/chips.webp"
              />
            </a>
          </td>
          <td>
            <a href="#/components/collapse/">
              <img
                alt="Tailwind CSS Tables"
                src="https://mdbootstrap.com/docs/standard/pro/demo/assets/images/components-free/collapse-1.webp"
              />
            </a>
          </td>
          <td>
            <a href="#/components/gallery/">
              <img
                alt="Tailwind CSS Navbar"
                src="https://mdbcdn.b-cdn.net/wp-content/themes/mdbootstrap4/content/en/_mdb5/standard/pro/demo-new/assets/images/lightbox.webp"
              />
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
            <b>Gallery✍️</b>
          </td>
        </tr>

        <tr>
          <td>
            <a href="#/components/jumbotron/">
              <img
                alt="Tailwind CSS Time picker"
                src="https://mdbootstrap.com/docs/standard/pro/demo/assets/images/components-free/header-1.webp"
              />
            </a>
          </td>
          <td>
            <a href="#/components/link/">
              <img
                alt="Tailwind CSS Tables"
                src="https://mdbootstrap.com/docs/standard/pro/demo/assets/images/link.webp"
              />
            </a>
          </td>
          <td>
            <a href="#/components/list/">
              <img
                alt="Tailwind CSS Navbar"
                src="https://mdbootstrap.com/docs/standard/pro/demo/assets/images/components-free/list-group-1.webp"
              />
            </a>
          </td>
        </tr>
        <tr>
          <td align="center">
            <b>Jumbotron✍️</b>
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
              <img
                alt="Tailwind CSS Time picker"
                src="https://mdbootstrap.com/docs/standard/pro/demo/assets/images/notification.webp"
              />
            </a>
          </td>
          <td>
            <a href="#/components/paragraphs/">
              <img
                alt="Tailwind CSS Tables"
                src="https://mdbootstrap.com/docs/standard/pro/demo/assets/images/paragraphs.webp"
              />
            </a>
          </td>
          <td>
            <a href="#/components/skeleton/">
              <img
                alt="Tailwind CSS Navbar"
                src="https://mdbootstrap.com/docs/standard/pro/demo/assets/images/components-free/placeholder-1.webp"
              />
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
              <img
                alt="Tailwind CSS Time picker"
                src="https://mdbootstrap.com/docs/standard/pro/demo/assets/images/components-free/popover-1.webp"
              />
            </a>
          </td>
          <td>
            <a href="#/components/progress/">
              <img
                alt="Tailwind CSS Tables"
                src="https://mdbootstrap.com/docs/standard/pro/demo/assets/images/components-free/progress-1.webp"
              />
            </a>
          </td>
          <td>
            <a href="#/components/rating/">
              <img
                alt="Tailwind CSS Navbar"
                src="https://mdbootstrap.com/docs/standard/pro/demo/assets/images/components-pro/rating-1.webp"
              />
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
            <b>Rating</b>
          </td>
        </tr>

        <tr>
          <td>
            <a href="#/components/scroll-back-to-top-button/">
              <img
                alt="Tailwind Component"
                src="https://mdbootstrap.com/docs/standard/pro/demo/assets/images/scroll-back-to-top.webp"
              />
            </a>
          </td>
          <td>
            <a href="#/components/social-buttons/">
              <img
                alt="Tailwind Component"
                src="https://mdbootstrap.com/docs/standard/pro/demo/assets/images/social-media.webp"
              />
            </a>
          </td>
          <td>
            <a href="#/components/spinners/">
              <img
                alt="Tailwind Component"
                src="https://mdbootstrap.com/docs/standard/pro/demo/assets/images/components-free/spinner-1.webp"
              />
            </a>
          </td>
        </tr>
        <tr>
          <td align="center">
            <b>Scroll to top✍️</b>
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
              <img
                alt="Tailwind Component"
                src="https://mdbootstrap.com/docs/standard/pro/demo/assets/images/timeline.webp"
              />
            </a>
          </td>
          <td>
            <a href="#/components/toast/">
              <img
                alt="Tailwind Component"
                src="https://mdbootstrap.com/docs/standard/pro/demo/assets/images/components-pro/toast-1.webp"
              />
            </a>
          </td>
          <td>
            <a href="#/components/tooltip/">
              <img
                alt="Tailwind Component"
                src="https://mdbootstrap.com/docs/standard/pro/demo/assets/images/components-free/tooltip-1.webp"
              />
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
        </tr>

        <tr>
          <td>
            <a href="#/forms/file-input/">
              <img
                alt="Tailwind Component"
                src="https://mdbootstrap.com/docs/standard/pro/demo/assets/images/file-upload.webp"
              />
            </a>
          </td>
          <td>
            <a href="#/forms/input/">
              <img
                alt="Tailwind Component"
                src="https://mdbootstrap.com/docs/standard/pro/demo/assets/images/input-group.webp"
              />
            </a>
          </td>
          <td>
            <a href="#/forms/login-form/">
              <img
                alt="Tailwind Component"
                src="https://mdbootstrap.com/docs/standard/pro/demo/assets/images/login-form.webp"
              />
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
            <b>Login form✍️</b>
          </td>
        </tr>

        <tr>
          <td>
            <a href="#/forms/radio/">
              <img
                alt="Tailwind Component"
                src="https://mdbootstrap.com/docs/standard/pro/demo/assets/images/components-free/radio-1.webp"
              />
            </a>
          </td>
          <td>
            <a href="#/forms/range/">
              <img
                alt="Tailwind Component"
                src="https://mdbootstrap.com/docs/standard/pro/demo/assets/images/components-free/range-1.webp"
              />
            </a>
          </td>
          <td>
            <a href="#/forms/registration-form/">
              <img
                alt="Tailwind Component"
                src="https://mdbootstrap.com/docs/standard/pro/demo/assets/images/registration-form.webp"
              />
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
              <img
                alt="Tailwind Component"
                src="https://mdbootstrap.com/docs/standard/pro/demo/assets/images/components-free/search-1.webp"
              />
            </a>
          </td>
          <td>
            <a href="#/forms/select/">
              <img
                alt="Tailwind Component"
                src="https://mdbootstrap.com/docs/standard/pro/demo/assets/images/components-pro/select-1.webp"
              />
            </a>
          </td>
          <td>
            <a href="#/forms/switch/">
              <img
                alt="Tailwind Component"
                src="https://mdbootstrap.com/docs/standard/pro/demo/assets/images/switch.webp"
              />
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
            <a href="#/forms/textarea/">
              <img
                alt="Tailwind Component"
                src="https://mdbootstrap.com/docs/standard/pro/demo/assets/images/textarea.webp"
              />
            </a>
          </td>
          <td>
            <a href="#/data/tables/">
              <img
                alt="Tailwind Component"
                src="https://mdbootstrap.com/docs/standard/pro/demo/assets/images/components-free/table-1.webp"
              />
            </a>
          </td>
          <td>
            <a href="#/methods/ripple/">
              <img
                alt="Tailwind Component"
                src="https://mdbootstrap.com/docs/standard/pro/demo/assets/images/ripple.webp"
              />
            </a>
          </td>
        </tr>
        <tr>
          <td align="center">
            <b>Textarea✍️</b>
          </td>
          <td align="center">
            <b>Tables✍️</b>
          </td>
          <td align="center">
            <b>Ripple✍️</b>
          </td>
        </tr>

        <tr>
          <td>
            <a href="#/content-styles/animations/">
              <img
                alt="Tailwind Component"
                src="https://mdbcdn.b-cdn.net/wp-content/themes/mdbootstrap4/content/en/_mdb5/standard/pro/demo-new/assets/images/animations2.webp"
              />
            </a>
          </td>
          <td>
            <a href="#/content-styles/mask/">
              <img
                alt="Tailwind Component"
                src="https://mdbootstrap.com/docs/standard/pro/demo/assets/images/components-free/mask-1.webp"
              />
            </a>
          </td>
          <td>
            <a href="#/content-styles/shadows/">
              <img
                alt="Tailwind Component"
                src="https://mdbootstrap.com/docs/standard/pro/demo/assets/images/components-free/shadow-1.webp"
              />
            </a>
          </td>
        </tr>
        <tr>
          <td align="center">
            <b>Animations✍️</b>
          </td>
          <td align="center">
            <b>Masks✍️</b>
          </td>
          <td align="center">
            <b>Shadows✍️</b>
          </td>
        </tr>

        <tr>
          <td>
            <a href="#/data/datatables/">
              <img
                alt="Tailwind Component"
                src="https://mdbcdn.b-cdn.net/docs/standard/pro/demo/assets/images/datatable.webp"
              />
            </a>
          </td>
          <td>
            <a href="#/components/lightbox/">
              <img
                alt="Tailwind Component"
                src="https://mdbcdn.b-cdn.net/docs/standard/pro/demo/assets/images/lightbox.webp"
              />
            </a>
          </td>
          <td>
            <a href="#/components/rating/">
              <img
                alt="Tailwind Component"
                src="https://mdbcdn.b-cdn.net/docs/standard/pro/demo/assets/images/rating.webp"
              />
            </a>
          </td>
        </tr>
        <tr>
          <td align="center">
            <b>Datatables✍️</b>
          </td>
          <td align="center">
            <b>Lightbox</b>
          </td>
          <td align="center">
            <b>Rating</b>
          </td>
        </tr>

        <tr>
          <td>
            <a href="#/methods/scrollbar/">
              <img
                alt="Tailwind Component"
                src="https://mdbcdn.b-cdn.net/docs/standard/pro/demo/assets/images/scrollbar.webp"
              />
            </a>
          </td>
          <td>
            <a href="#/components/popconfirm/">
              <img
                alt="Tailwind Component"
                src="https://mdbcdn.b-cdn.net/docs/standard/pro/demo/assets/images/popconfirm.webp"
              />
            </a>
          </td>
          <td>
            <a href="https://tw-elements.com/">
              <img alt="Logo Clouds" src="https://mdbootstrap.com/img/tw-demo/design-blocks.webp" />
            </a>
          </td>
        </tr>
        <tr>
          <td align="center">
            <b>Scrollbar✍️</b>
          </td>
          <td align="center">
            <b>Popconfirm</b>
          </td>
          <td align="center">
            <b>More coming soon</b>
          </td>
        </tr>
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
