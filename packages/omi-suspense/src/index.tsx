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
      } else {
        this.state = 'pending'
        this.fire('pending')

        try {
          const results = await Promise.all(tasks)
          this.results = results
          let endTime = Date.now() // 记录加载完成的时间
          let elapsedTime = endTime - startTime // 计算已经过去的时间
          if (elapsedTime < this.props.minLoadingTime) {
            this.timeout = setTimeout(() => {
              this.state = 'resolve'
              this.fire('resolve')
              this.fire('loaded', results)
              this.fire('data-loaded', results[results.length - 1])
              this.update()
            }, this.props.minLoadingTime - elapsedTime)
          } else {
            // 否则，立即隐藏加载指示器
            this.state = 'resolve'
            this.fire('resolve')
            this.fire('loaded', results)
            this.fire('data-loaded', results[results.length - 1])
          }
        } catch (error) {
          console.error(error)
          this.error = error
          this.state = 'fallback'
          this.fire('fallback', error)
        }
      }

      this.update()
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
