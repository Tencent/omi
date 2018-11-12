import { define, WeElement } from 'omi'
import style from './_header.scss'

define('ow-header', class extends WeElement {
  css() {
    return style
  }
  render() {
    return (
      <div className="header">
        <div className="wrap">
          <div className="logo">Omi-WeUI</div>
          <div className="menu">
            <ul>
              <a href="">
                <li>指南</li>
              </a>
              <a href="">
                <li>组件</li>
              </a>
              <a href="">
                <li>资源</li>
              </a>
            </ul>
          </div>
        </div>
      </div>
    )
  }
})
