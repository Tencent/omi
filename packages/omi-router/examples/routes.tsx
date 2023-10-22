import './suspense'
import { userProfile, userPosts } from './state'
import { fetchUserPosts, fetchUserProfile } from './api'
import { Router } from '../src/router'

export const routes = [
  {
    path: '/',
    transition: 'fade',
    meta: {},
    render() {
      return (
        <>
          <h1>Home</h1>
          <a href="#/user/1/profile">User1 Profile </a><br />
          <a href="#/user/2/posts">User2 Posts </a><br />
          <a href="#/user/3/profile?a=1">User3 Profile with query</a>
        </>
      )
    }
  },
  {
    path: '/user/:id/profile',
    render(router: Router) {
      return (
        <o-suspense
          imports={[
            import('./components/user-info'),
            import('./components/user-profile'),
          ]}
          data={async () => {
            return await fetchUserProfile(router?.params.id as string)
          }}
          onDataLoaded={(event: CustomEvent) => {
            userProfile.value = event.detail
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
    render(router: Router) {
      return (
        <o-suspense
          imports={[
            import('./components/user-info'),
            import('./components/user-posts'),
          ]}
          data={async () => {
            // fetch user profile and posts in parallel
            const fetchPromises = [
              fetchUserPosts(router?.params.id as string),
              fetchUserProfile(router?.params.id as string)
            ]
            const responses = await Promise.all(fetchPromises)
            return responses
          }}
          onDataLoaded={(event: CustomEvent) => {
            userPosts.value = event.detail[0]
          }}
        >
          <div slot="pending">Loading user posts...</div>
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

