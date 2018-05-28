import { render, Component } from '../../dist/omi.esm';

class Hello extends Component {
  // install() {
  //   this.$store.hello = this
  // }

  render() {
    return <div>{this.$store.name}</div>
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
        <Hello ref={c => { this.hello = c }} ></Hello>
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
const store = new AppStore({ name: 'Omi' }, {
  onRename: () => {
    //app.update()
    //or
    app.hello.update()
    //or
    //store.hello.update()
  }
})

render(app, document.body, { store })


