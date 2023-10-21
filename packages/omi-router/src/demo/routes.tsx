import 'omi-suspense'

export const routes = [
  {
    path: '/',
    transition: 'fade',
    meta: {},
    render() {
      return (
        <>
          <h1>Home</h1>
          <a href="#/user/john/profile">User Profile </a><br />
          <a href="#/user/bobby/posts">User Posts </a><br />
          <a href="#/user/bobby/profile?a=1">User Profile with query</a>
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
                  resolve({ name: 'omi' })
                }, 1000)
              }),
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  resolve({ age: 5 })
                }, 1000)
              })
            ]
            const responses = await Promise.all(fetchPromises)
            return responses
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
    beforeEnter: (to, from) => {
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

