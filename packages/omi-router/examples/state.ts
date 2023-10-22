import { signal, mixin } from 'omi'

export const userProfile = signal({})

export const userPosts = signal([])

mixin({
  userProfile,
  userPosts
})