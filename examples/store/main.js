import { render, Component } from '../../dist/omi.esm';

class Hello extends Component {
  render() {
    return <div> {this.props.name}</div>
  }
}

class App extends Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.$store.rename('Hello Omi !')
  }


  render() {
    return (
      <div>
        <Hello name={this.$store.name}></Hello>
        <button onclick={this.handleClick}>Click me to call this.$store.rename('Hello Omi !') </button>
      </div>
    )
  }
}


class AppStore {
  constructor(data, callbacks) {
    this.name = data.name || ''
    this.onRename = callbacks.onRename || function () { }
  }

  rename(name) {
    this.name = name
    this.onRename()
  }
}


const app = new App()
const appStore = new AppStore({ name: 'Omi' }, {
  onRename: () => {
    app.update()
  }
})

render(app, document.body, appStore)


