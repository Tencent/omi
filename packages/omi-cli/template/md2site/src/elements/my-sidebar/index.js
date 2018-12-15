import { define, WeElement } from 'omi';
import '../my-list';
import css from './_index.css'


define('my-list', class extends WeElement {

  beforeRender() {
    this.data.height = window.innerHeight - 45;
  }

  css() {
    return css
  }

  render(props, data) {
    return (
      <div class="list" style="height:{{height}}px;">
        <div class="version"></div>
        {data.menus && data.menus.map(menu => (
          <my-list menu={menu} />
        ))}

      </div>
    )
  }
})
