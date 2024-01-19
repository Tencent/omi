import { VNode, classNames } from 'omi'
import { Router } from '../../src/router'

// Basic Layout
const Layout = ({ children, router }: { children: VNode | VNode[]; router?: Router }) => {
  return (
    <>
      <header class="bg-white shadow">
        <nav class="container mx-auto px-6 py-3">
          <div class="flex items-center justify-between">
            <div>
              <a href="#/" class="text-gray-700 text-xl font-bold flex items-center gap-2">
                <img class="w-8" src="https://omi.cdn-go.cn/admin/latest/home/omi.svg"></img>
                OMI-Router
              </a>
            </div>
            <div class="hidden md:flex items-center space-x-4">
              <a
                href="#/"
                class={classNames({
                  'text-green-500': router?.currentRoute?.path === '/' || router?.currentRoute?.path === '',
                })}
              >
                Home
              </a>
              <a
                href="#/other-page"
                class={classNames({
                  'text-green-500': router?.currentRoute?.path === '/other-page',
                })}
              >
                Other Page
              </a>
              <a
                href="#/about"
                class={classNames({
                  'text-green-500': router?.currentRoute?.path === '/about',
                })}
              >
                About
              </a>
              <a
                href="https://github.com/Tencent/omi/tree/master/packages/omi-router"
                target='_blank'
              >
                Github
              </a>
            </div>
          </div>
        </nav>
      </header>
      <div class="text-center pt-56 text-6xl">{children}</div>
    </>
  )
}

// Sub Layout
const SubLayout = ({ children }: { children: VNode }) => (
  <>
    <h1>Sub Layout</h1>
    {children}
  </>
)

// Routes
export const routes = [
  {
    path: '/',
    render(router: Router) {
      return (
        <Layout router={router}>
          <h2>Home</h2>
        </Layout>
      )
    },
  },
  {
    path: '/about',
    render(router: Router) {
      return (
        <Layout router={router}>
          <SubLayout>
            <h2>About</h2>
          </SubLayout>
        </Layout>
      )
    },
  },
  {
    path: '/other-page',
    render(router: Router) {
      return (
        <Layout router={router}>
          <SubLayout>
            <h2>Other Page</h2>
          </SubLayout>
        </Layout>
      )
    },
  },
  {
    path: '*',
    render(router: Router) {
      return (
        <Layout router={router}>
          <SubLayout>
            <h2>404</h2>
          </SubLayout>
        </Layout>
      )
    },
  },
]
