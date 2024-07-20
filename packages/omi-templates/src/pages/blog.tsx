import { signal, tag, Component } from 'omi'
import '../components/omiu/button'
import '../components/omiu/breadcrumb'

// 博客数据接口
interface BlogPost {
  title: string
  date: string
  author: string
  summary: string
  tag: string
  image: string
  content: string
}

// 标签
const tags = signal([
  { name: 'All' },
  { name: 'JavaScript' },
  { name: 'Python' },
  { name: 'Web Development' }
])

// 博客数据
const blogPosts: BlogPost[] = [
  {
    title: 'Exploring JavaScript ES2024 Features',
    date: 'June 15, 2024',
    author: 'Rachel',
    summary: 'An in-depth look at the new features introduced in JavaScript ES2024, including pattern matching and top-level await.',
    tag: 'JavaScript',
    image: 'https://tdesign.gtimg.com/site/images/banner-thumb.jpg',
    content: `
    This is content.
    `
  },
  {
    title: 'Deep Learning with Python: A Comprehensive Guide',
    date: 'July 5, 2024',
    author: 'Rachel',
    summary: 'This guide covers the fundamentals of deep learning with Python, including neural networks, TensorFlow, and practical applications.',
    tag: 'Python',
    image: 'https://tdesign.gtimg.com/site/images/banner-thumb.jpg',
    content: `
      This is content.
    `
  },
  {
    title: 'Building Scalable Web Applications with Node.js',
    date: 'July 20, 2024',
    author: 'Rachel',
    summary: 'Learn how to build scalable and high-performance web applications using Node.js, including best practices and performance optimization techniques.',
    tag: 'Web Development',
    image: 'https://tdesign.gtimg.com/site/images/banner-thumb.jpg',
    content: `
      This is content.
    `
  },
]

const selectedBlogs = signal(blogPosts)
const activePost = signal<BlogPost | null>(null)

@tag('blog-template')
export class BlogTemplate extends Component {
  activeTag = signal('All')
  searchKeyword = signal('')

  breadcrumbs = signal([
    { label: 'Home', icon: 'home' }
  ])

  blogFilter(tag: string) {
    this.activeTag.value = tag
    this.filterBlogs()
  }

  filterBlogs() {
    let filteredBlogs = blogPosts
    if (this.activeTag.value !== 'All') {
      filteredBlogs = filteredBlogs.filter(post => post.tag === this.activeTag.value)
    }
    if (this.searchKeyword.value) {
      const keyword = this.searchKeyword.value.toLowerCase()
      filteredBlogs = filteredBlogs.filter(post => post.title.toLowerCase().includes(keyword))
    }
    selectedBlogs.value = filteredBlogs
  }

  handleSearchInput(event: Event) {
    const inputElement = event.target as HTMLInputElement
    this.searchKeyword.value = inputElement.value
    this.filterBlogs()
  }

  handlePostClick(post: BlogPost) {
    activePost.value = post
    this.breadcrumbs.value = [
      { label: 'Home', icon: 'home' },
      { label: post.title, icon: 'root-list' }
    ]
  }

  handleRuturnClick() {
    activePost.value = null
    this.breadcrumbs.value = [{ label: 'Home', icon: 'home' }]
  }

  renderPostContent(post: BlogPost) {
    return (
      <div class="flex flex-col pl-6 pr-4 pt-3">
        <article className="my-4 shadow bg-card dark:bg-gray-800 rounded-lg">
          <div className="flex flex-col p-6">
            <h1 className="text-3xl font-serif font-bold">{post.title}</h1>
            <p className="pb-3 text-sm">
              By <a href="#" className="font-semibold hover:text-gray-800 dark:hover:text-gray-400">{post.author}</a>, {post.date}
            </p>
            <div className="markdown-body">
              {post.content}
            </div>
          </div>
        </article>
        <div class="mt-4">
          <o-button
            theme="primary"
            onClick={() => this.handleRuturnClick()}
          >
            Return to Post List
          </o-button>
        </div>
      </div>
    )
  }

  renderBlogList() {
    return (
      <div class="flex flex-col pl-6 pr-4 pt-3">
        {selectedBlogs.value.length == 0 ? (
          <div class="col-span-full text-center text-foreground">None</div>
        ) : (
          selectedBlogs.value.map((post, index) => (
            <article key={index} class="my-4 shadow bg-card dark:bg-gray-800">
              <a onClick={() => this.handlePostClick(post)}>
                <img class="hover:opacity-75" src={post.image} alt="Post Image" />
              </a>
              <div class="flex flex-col p-6 pt-2">
                <a onClick={() => this.handlePostClick(post)} class="my-2 text-sm font-bold uppercase border-b-2 border-blue-500 text-blue-600">{post.tag}</a>
                <a onClick={() => this.handlePostClick(post)} class="pb-4 text-3xl font-serif font-bold hover:text-gray-700 dark:hover:text-gray-400">{post.title}</a>
                <p class="pb-3 text-sm">By <a href="#" class="font-semibold hover:text-gray-800 dark:hover:text-gray-400">{post.author}</a>, {post.date}</p>
                <p class="pb-6">{post.summary}</p>
                <a onClick={() => this.handlePostClick(post)} class="uppercase text-xs text-blue-600 hover:text-yellow-500">Continue Reading <i class="fas fa-arrow-right"></i></a>
              </div>
            </article>
          ))
        )}
      </div>
    )
  }

  render() {
    return (
      <div class="container mx-auto">
        <div class="flex pb-4">
          {/* 左栏 */}
          <aside class="w-1/3 pl-4 pr-6">
            {/* 个人卡片 */}
            <section class="mt-12 md:mt-16">
              <div class="rounded-md border bg-card text-card-foreground shadow-sm" data-v0-t="card">
                <div class="flex flex-col items-center p-6">
                  <img
                    src={"https://tdesign.gtimg.com/site/images/banner-thumb.jpg"}
                    alt="About Me"
                    class="rounded-md mb-4 mt-6"
                    style="width: 350px; height: 350px; object-fit: cover;"
                  />
                  <h3 class="text-xl font-semibold">Rachel</h3>
                  <p class="text-gray-500 mt-2 text-center">
                    Hello there! My name is Rachel, and I'm a passionate software engineering student currently pursuing my degree at the University of Technology. With a heart for coding and a mind for innovation, I'm always eager to explore the latest in tech trends and programming languages.
                  </p>
                  <div class="flex gap-3 mb-2 pt-3" style="justify-content: space-between;">
                    <o-button theme="primary" style="flex: 1;">
                      <i class="t-icon t-icon-mail"></i>
                      Email
                    </o-button>
                    <o-button theme="primary" style="flex: 1;">
                      <i class="t-icon t-icon-component-dropdown"></i>
                      Resume
                    </o-button>
                    <o-button theme="primary" style="flex: 1;">
                      <i class="t-icon t-icon-logo-github"></i>
                      Github
                    </o-button>
                  </div>
                </div>
              </div>
            </section>

            {/* 搜索栏 */}
            <section class="mt-8">
              <form class="flex" onInput={(event) => this.handleSearchInput(event)}>
                <input type="text" class="w-full px-3 py-2 rounded-l-lg focus:outline-none text-gray-800" placeholder="Search..." />
                <button class="px-2 rounded-r-lg focus:outline-none text-center text-xl text-gray-400 hover:text-gray-900 bg-white"><i class="fas fa-search"></i></button>
              </form>
            </section>

            {/* 热门文章模块 */}
            <section class="mt-8">
              <h3 class="mb-4 pb-2 text-2xl font-semibold border-b-2 border-blue-500 text-blue-600">Popular Posts</h3>
              <ul>
                {selectedBlogs.value.map((post, index) => (
                  <li key={index} class="mb-1">
                    <a class="text-blue-900 hover:text-blue-500" onClick={() => this.handlePostClick(post)}>{post.title} ({post.tag})</a>
                  </li>
                ))}
              </ul>
            </section>

            {/* 分类栏 */}
            <section class="mt-8">
              <h3 class="mb-4 pb-2 text-2xl font-bold border-b-2 border-blue-500 text-blue-600">Tags</h3>
              <div class="flex justify-around mb-8 text-blue-600">
                {tags.value.map((tag, index) => (
                  <o-button
                    key={index}
                    variant="outline"
                    theme={tag.name === this.activeTag.value ? 'primary' : 'default'}
                    onClick={() => this.blogFilter(tag.name)}
                  >
                    {tag.name}
                  </o-button>
                ))}
              </div>
            </section>

            {/* 订阅表单 */}
            <section class="mt-8">
              <div class="p-4 rounded-lg text-center bg-gradient-to-b from-blue-200 to-blue-400 dark:from-gray-800 dark:to-gray-900">
                <h3 class="font-semibold text-lg text-blue-500 dark:text-gray-300">Get the latest articles to your inbox</h3>
                <form>
                  <input type="email" placeholder="youremail@example.com" class="w-full mt-3 p-3 rounded-lg shadow border border-gray-400 focus:outline-none text-gray-800" />
                  <div class="mb-2 pt-3 w-full">
                    <o-button variant="dashed" style="background: transparent">
                      <i class="t-icon t-icon-send"></i>
                      Submit
                    </o-button>
                  </div>
                </form>
              </div>
            </section>
          </aside>

          {/* 右栏 */}
          <main class="flex flex-col w-2/3 pl-6 pr-4 pt-12">
            <div class="flex pl-4">
              <o-breadcrumb
                items={this.breadcrumbs.value}
              ></o-breadcrumb>
            </div>
            {activePost.value ? this.renderPostContent(activePost.value) : this.renderBlogList()}
          </main>
        </div>
      </div>
    )
  }
}

export function BlogPage() {
  return <blog-template />
}