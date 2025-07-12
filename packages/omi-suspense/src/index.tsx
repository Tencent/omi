import { define, Component, h, VNode } from 'omi'

interface Props {
  imports: Promise<unknown>[]
  data: Function | null
  minLoadingTime: number
  customRender: (results: unknown[]) => VNode | VNode[]
  beforePending: (component: Component) => Promise<void>
  pending: () => (VNode | VNode[]) | VNode | VNode[]
  fallback: (error: unknown, results: unknown[]) => (VNode | VNode[]) | VNode | VNode[]
}

/**
 * Omi Suspense component
 */
define(
  'o-suspense',
  class extends Component<Props> {
    results: unknown[] | null = null
    error: unknown
    install() {
      this.handleTasks(this.props.imports)
    }

    receiveProps() {
      this.handleTasks(this.props.imports)
      return false
    }

    state = 'pending'

    static defaultProps = {
      imports: [],
      data: null,
      minLoadingTime: 0,
    }

    timeout: NodeJS.Timeout | null = null
    /**
     * Handles the tasks of components and updates the state accordingly
     * @param imports - Array of import promises
     */
    async handleTasks(imports: Promise<unknown>[]) {
      if (this.props.beforePending) {
        await this.props.beforePending(this)
      }
      this.timeout !== null && clearTimeout(this.timeout)
      let startTime = Date.now()
      const tasks = [...imports]
      if (this.props.data) {
        tasks.push(this.props.data())
      }
      if (tasks.length === 0) {
        this.state = 'resolve'
        this.update()
      } else {
        this.state = 'pending'
        this.fire('pending')
        // 立即更新，不然loading显示不出来
        this.update()

        try {
          const results = await Promise.all(tasks)
          this.results = results
          let endTime = Date.now() // 记录加载完成的时间
          let elapsedTime = endTime - startTime // 计算已经过去的时间
          const dt = this.props.minLoadingTime - elapsedTime
          // 不加 setTimeout 导致白屏，esm 加载还没执行，3g网络白屏
          this.timeout = setTimeout(() => {
            this.state = 'resolve'
            this.fire('resolve')
            this.fire('loaded', results)
            this.fire('data-loaded', results[results.length - 1])
            this.update()
          }, dt > 0 ? dt : 0)
        } catch (error) {
          console.error(error)
          this.error = error
          this.state = 'fallback'
          this.fire('fallback', error)
          this.update()
        }
      }
    }

    /**
     * Renders the appropriate slot based on the current state
     */
    render(props: Props) {
      if (this.state === 'pending') {
        if (props.pending) {
          return typeof props.pending === 'function' ? props.pending() : props.pending
        }
        return <slot name="pending" />
      } else if (this.state === 'resolve') {
        if (props.customRender) {
          return props.customRender(this.results || [])
        }
        return <slot />
      } else {
        if (props.fallback) {
          return typeof props.fallback === 'function' ? props.fallback(this.error, this.results || []) : props.fallback
        }
        return <slot name="fallback" />
      }
    }
  },
)
