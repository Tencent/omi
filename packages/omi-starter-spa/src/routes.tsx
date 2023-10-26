import 'omi-suspense'
import './index.css'
import './components/site-header'
import { userState } from './store'

export const routes = [
  {
    path: '/',
    transition: 'fade',
    meta: {},
    render() {
      return (
        <>
          <site-header></site-header>
          <o-suspense
            imports={[
              import('./home-page'),
            ]}
          >
            <home-page />
          </o-suspense>
        </>


      )
    }
  },
  {
    path: '/user/:id/profile',
    render() {
      return (
        <>
          <site-header></site-header>
          <o-suspense
            imports={[
              import('./components/user-info'),
              import('./components/user-profile'),
            ]}
            data={async () => {
              const fetchPromises = [
                new Promise((resolve) => {
                  setTimeout(() => {
                    resolve({ name: 'omi' })
                  }, 1000)
                }),
                new Promise((resolve) => {
                  setTimeout(() => {
                    resolve({ age: 5 })
                  }, 1000)
                })
              ]
              const responses = await Promise.all(fetchPromises)
              return responses
            }}
            onDataLoaded={(event: CustomEvent) => {
              userState.value.name = event.detail[0].name
              userState.value.age = event.detail[1].age
              // trigger ui auto update
              userState.update()
            }}
          >
            <div slot="pending">Loading user profile...</div>
            <div slot="fallback">Sorry, we are unable to load the user profile at the moment. Please try again later.</div>
            <user-info>
              <user-profile></user-profile>
            </user-info>
          </o-suspense>
        </>

      )
    }
  },
  {
    path: '/user/:id/posts',
    render() {
      return (
        <>
          <site-header></site-header>
          <o-suspense imports={[
            import('./components/user-info'),
            import('./components/user-posts'),
          ]}>
            <div slot="fallback">Loading user posts...</div>
            <user-info>
              <user-posts></user-posts>
            </user-info>
          </o-suspense>
        </>

      )
    }
  }, {
    path: '/before-enter/test',
    beforeEnter: () => {
      // reject the navigation
      return false
    },
  }, {
    path: '*',
    render() {
      return <h1>404</h1>
    }
  }
]

