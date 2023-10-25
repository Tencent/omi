import { tag, Component } from 'omi'
import css from '../app.css?raw'
import { tailwind } from '../tailwind'

@tag('site-header')
export default class extends Component {
  static css = [tailwind, css]

  render() {
    return (
      <div class="relative lg:pt-2 flex items-center justify-between text-slate-700 font-semibold text-sm leading-6 dark:text-slate-200">
        <a href="#/" class="flex items-center">
          <img src="https://omi.cdn-go.cn/s/latest/omi.svg" class="logo omi" alt="Omi logo" />
          OMI
        </a>
        <div class="flex items-center">
          <div class="hidden md:flex items-center">
            <nav>
              <ul class="flex items-center gap-x-8">
                <li>
                  <a class="hover:text-green-500 dark:hover:text-green-400" href="#/user/john/profile?a=1">
                    User Profile
                  </a>
                </li>
                <li>
                  <a
                    href="http://localhost:5173/#/user/bobby/posts"
                    class="hover:text-green-500 dark:hover:text-green-400"
                  >
                    User Posts
                  </a>
                </li>
              </ul>
            </nav>
            <div class="flex items-center border-l border-slate-200 ml-6 pl-6 dark:border-slate-800">
              <a
                href="https://github.com/Tencent/omi"
                class="ml-6 block text-slate-400 hover:text-green-500 dark:hover:text-slate-300"
              >
                <span class="sr-only">OMI on GitHub</span>
                <svg viewBox="0 0 16 16" class="w-5 h-5" fill="currentColor" aria-hidden="true">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
