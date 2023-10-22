import { define, Component } from 'omi'

/**
 * Omi Suspense component
 */
define('o-suspense', class extends Component {
  install() {
    this.handleTasks(this.props.imports)
  }

  state = 'pending'

  static defaultProps = {
    imports: [],
    data: null
  }

  /**
   * Handles the tasks of components and updates the state accordingly
   * @param imports - Array of import promises
   */
  async handleTasks(imports: Promise<unknown>[]) {
    const tasks = [...imports]
    if (this.props.data) {
      tasks.push(this.props.data.bind(this.router)())
    }
    if (tasks.length === 0) {
      this.state = 'pending'
    } else {
      this.fire('pending')

      try {
        const results = await Promise.all(tasks)
        this.state = 'resolve'
        this.fire('resolve')
        console.log(results)
        console.log(3333333)
        this.fire('data-loaded', results.pop());
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
  render() {
    if (this.state === 'pending') {
      return <slot name="pending" />
    } else if (this.state === 'resolve') {
      return <slot />
    }
    else {
      return <slot name="fallback" />
    }
  }
})