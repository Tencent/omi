import { define, WeElement } from 'omi'
import css from './_index.css'

define('o-timeline', class extends WeElement {

  css() {
    return css
  }

  render(props) {
    return (
      <div class="ctn">
        <div class='item'>
          <div class='circle'></div>
          <div class='time'>
            <div>2018.11.11</div>
            <div>19:05:30</div>
          </div>
          <div class="des">
            <div>创建测试项目</div>
            <div>[牛顿值取消规则]</div>
          </div>
        </div>
        <div class='item'>
          <div class='circle'></div>
          <div class='time'>
            <div>2018.11.11</div>
            <div>19:05:30</div>
          </div>
          <div class="des">
            <div>创建测试项目</div>
            <div>[牛顿值取消规则]</div>
          </div>
        </div>

        <div class='item'>
          <div class='circle'></div>
          <div class='time'>
            <div>2018.11.11</div>
            <div>19:05:30</div>
          </div>
          <div class="des">
            <div>创建测试项目</div>
            <div>[牛顿值取消规则]</div>
          </div>
        </div>
      </div>
    )
  }
})
