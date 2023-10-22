import { define, Component, SignalValue } from 'omi'

define('user-posts', class extends Component {
  userPosts: SignalValue<{ title: string, content: string }[]> | null = null

  render() {
    return (
      <>
        <h3>User Posts</h3>
        <ul>
          {this.userPosts?.value?.map(post => {
            return (
              <li>
                <h4>{post.title}</h4>
                <p>{post.content}</p>
              </li>
            )
          })}
        </ul>
      </>
    )
  }
})