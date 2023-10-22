import './suspense'
import { userProfile, userPosts } from './state'

export const routes = [
  {
    path: '/',
    transition: 'fade',
    meta: {},
    render() {
      return (
        <>
          <h1>Home</h1>
          <a href="#/user/1/profile">User Profile </a><br />
          <a href="#/user/2/posts">User Posts </a><br />
          <a href="#/user/3/profile?a=1">User Profile with query</a>
        </>
      )
    }
  },
  {
    path: '/user/:id/profile',
    render() {
      return (
        <o-suspense
          imports={[
            import('./components/user-info'),
            import('./components/user-profile'),
          ]}
          data={async () => {
            const fetchPromises = [
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  resolve({ name: 'omi', age: 5 })
                }, 1000)
              }),
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  resolve([
                    { title: 'title1', content: 'content1' },
                    { title: 'title2', content: 'content2' },
                    { title: 'title3', content: 'content2' },
                  ])
                }, 1000)
              })
            ]
            const responses = await Promise.all(fetchPromises)
            return responses
          }}
          onDataLoaded={(event: CustomEvent) => {
            userProfile.value = event.detail[0]
            userPosts.value = event.detail[1]
          }}
        >
          <div slot="pending">Loading user profile...</div>
          <div slot="fallback">Sorry, we are unable to load the user profile at the moment. Please try again later.</div>
          <user-info>
            <user-profile></user-profile>
          </user-info>
        </o-suspense>
      )
    }
  },
  {
    path: '/user/:id/posts',
    render() {
      return (
        <o-suspense imports={[
          import('./components/user-info'),
          import('./components/user-posts'),
        ]}>
          <div slot="fallback">Loading user posts...</div>
          <user-info>
            <user-posts></user-posts>
          </user-info>
        </o-suspense>
      )
    }
  }, {
    path: '/before-enter/test',
    beforeEnter: (to: string, from: string) => {
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

