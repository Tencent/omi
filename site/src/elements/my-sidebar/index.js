import { define, WeElement } from 'omi'
import '../my-list'

define('my-sidebar', class extends WeElement {
  static use = [
    'menus',
    'position',
    'sideBarShow',
    'lan'
  ]

  static css = require('./_index.css')

  render() {
    const [ menus, position, sideBarShow, lan ] = this.use

    return (
      <div class={`list${sideBarShow ? ' show' : ''}`}>
        {menus[lan].map((menu, index) => (
          <my-list menu={menu} index={index} />
        ))}
      </div>
    )
  }
})
