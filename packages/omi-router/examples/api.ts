const userPosts: Record<string, unknown> = {
  '1': [
    { title: 'title1', content: 'content1' },
    { title: 'title2', content: 'content2' },
    { title: 'title3', content: 'content2' },
  ],
  '2': [
    { title: 'title4', content: 'content4' },
    { title: 'title5', content: 'content5' },
  ],
}

const userProfiles: Record<string, unknown> = {
  '1': { name: 'omi', age: 5 },
  '2': { name: 'john', age: 30 },
  '3': { name: 'bobby', age: 10 },
}

export function fetchUserPosts(userId: string) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(userPosts[userId] || [])
    }, 1000)
  })
}

export function fetchUserProfile(userId: string) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(userProfiles[userId] || {})
    }, 1000)
  })
}