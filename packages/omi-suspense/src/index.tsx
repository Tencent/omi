import { define, Component, h, VNode } from 'omi'

interface Props {
  imports: Promise<unknown>[]
  data: Function | null
  minLoadingTime: number
  customRender: (results: unknown[]) => (VNode | VNode[])
}

/**
 * Omi Suspense component
 */
define(
  'o-suspense',
  class extends Component<Props> {
    results: unknown[] | null = null
    install() {
      this.handleTasks(this.props.imports)
    }

    receiveProps() {
      this.state = 'pending'
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
      this.timeout !== null && clearTimeout(this.timeout)
      let startTime = Date.now()
      const tasks = [...imports]
      if (this.props.data) {
        tasks.push(this.props.data())
      }
      if (tasks.length === 0) {
        this.state = 'pending'
      } else {
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
          this.state = 'fallback'
          this.fire('fallback')
        }
      }

      this.update()
    }

    /**
     * Renders the appropriate slot based on the current state
     */
    render(props: Props) {
      if (this.state === 'pending') {
        return <slot name="pending" />
      } else if (this.state === 'resolve') {
        if (props.customRender) {
          return props.customRender(this.results || [])
        }
        return <slot />
      } else {
        return <slot name="fallback" />
      }
    }
  },
)
