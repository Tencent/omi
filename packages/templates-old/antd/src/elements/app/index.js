import { define, WeElement } from 'omi'
import logo from './logo.svg'
import '../app-intro'
import 'omiu/button'
import { Button, Breadcrumb } from 'antd'

define('my-app', class extends WeElement {
  static css = require('./_index.css')

  name = 'Omi'

  clickHandler2 = () => {
    this.name = 'Omio'
    this.update()
  }

  render() {
    return (
      <div class="app">
        <header class="app-header">
          <img
            src={logo}
            onClick={this.clickHandler}
            class="app-logo"
            alt="logo"
          />
          <h1 class="app-title">Welcome to {this.name}</h1>
        </header>
        <app-intro />
        <div>
        <Button type="primary" onClick={this.clickHandler2}>Primary</Button>
        <Button>Default</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="danger">Danger</Button>

        <Breadcrumb>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item><a href="">Application Center</a></Breadcrumb.Item>
          <Breadcrumb.Item><a href="">Application List</a></Breadcrumb.Item>
          <Breadcrumb.Item>An Application</Breadcrumb.Item>
        </Breadcrumb>
        </div>
        <o-button style='width:200px;'>I am omiu button.</o-button>

        <a href="https://github.com/Tencent/omi" target="_blank" style="position: absolute;z-index: 1000; right: 0; top: 0;">
          <img src="https://alloyteam.github.io/github.png" alt="" />
        </a>
      </div>
    )
  }
})
