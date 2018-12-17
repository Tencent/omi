import { define, WeElement } from 'omi'
import '../my-list'
import css from './_index.css'

define('my-sidebar', class extends WeElement {
  install() {
    this.store.mySidebar = this
  }

  css() {
    return css
  }

  render() {
    return (
      <div class="list" style="height:{{height}}px;">
        {this.store.menus.map((menu, index) => (
          <my-list menu={menu} index={index} />
        ))}
      </div>
    )
  }
})
