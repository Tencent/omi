import {tag, WeElement} from 'omi'
import style from './_index.css'

import '../../omi-element-ui/el-dropdown'
import '../../omi-element-ui/el-dropdown-menu'
import '../../omi-element-ui/el-dropdown-item'

import icon from '../../omi-element-ui/style/global/_icon.scss'
import dropdown from "../../omi-element-ui/style/_dropdown.scss"


@tag('my-app')
class MyApp extends WeElement {

  css() {
    return style + icon + dropdown
  }

  onItemClick = (e) => {
    console.log(11)
  }

  render(props, data) {
    return (
      <div>
        <div class="dropdown-group">
          <el-dropdown menu={(
            <el-dropdown-menu>
              <el-dropdown-item onClick={this.onItemClick}>黄金糕</el-dropdown-item>
              <el-dropdown-item>狮子头</el-dropdown-item>
              <el-dropdown-item>螺蛳粉</el-dropdown-item>
              <el-dropdown-item disabled>双皮奶</el-dropdown-item>
              <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
            </el-dropdown-menu>
          )} trigger="click">
            <span class="el-dropdown-link">
              click菜单<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
          </el-dropdown>

          <el-dropdown menu={(
            <el-dropdown-menu>
              <el-dropdown-item onClick={this.onItemClick}>黄金糕</el-dropdown-item>
              <el-dropdown-item>狮子头</el-dropdown-item>
              <el-dropdown-item>螺蛳粉</el-dropdown-item>
              <el-dropdown-item disabled>双皮奶</el-dropdown-item>
              <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
            </el-dropdown-menu>
          )}>
            <span class="el-dropdown-link">
              hover菜单<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
          </el-dropdown>
        </div>
        <div class="dropdown-group">
          <el-dropdown menu={(
            <el-dropdown-menu>
              <el-dropdown-item onClick={this.onItemClick}>黄金糕</el-dropdown-item>
              <el-dropdown-item>狮子头</el-dropdown-item>
              <el-dropdown-item>螺蛳粉</el-dropdown-item>
              <el-dropdown-item disabled>双皮奶</el-dropdown-item>
              <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
            </el-dropdown-menu>
          )} type="primary">
        <span>
          更多菜单<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
          </el-dropdown>

          <el-dropdown menu={(
            <el-dropdown-menu>
              <el-dropdown-item onClick={this.onItemClick}>黄金糕</el-dropdown-item>
              <el-dropdown-item>狮子头</el-dropdown-item>
              <el-dropdown-item>螺蛳粉</el-dropdown-item>
              <el-dropdown-item disabled>双皮奶</el-dropdown-item>
              <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
            </el-dropdown-menu>
          )} split-button type="primary">
        <span>
          更多菜单
        </span>
          </el-dropdown>
        </div>
        <div class="dropdown-group">
          <el-dropdown menu={(
            <el-dropdown-menu>
              <el-dropdown-item onClick={this.onItemClick}>黄金糕</el-dropdown-item>
              <el-dropdown-item>狮子头</el-dropdown-item>
              <el-dropdown-item>螺蛳粉</el-dropdown-item>
              <el-dropdown-item disabled>双皮奶</el-dropdown-item>
              <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
            </el-dropdown-menu>
          )} split-button size="medium" type="primary">
        <span>
          更多菜单
        </span>
          </el-dropdown>

          <el-dropdown menu={(
            <el-dropdown-menu>
              <el-dropdown-item onClick={this.onItemClick}>黄金糕</el-dropdown-item>
              <el-dropdown-item>狮子头</el-dropdown-item>
              <el-dropdown-item>螺蛳粉</el-dropdown-item>
              <el-dropdown-item disabled>双皮奶</el-dropdown-item>
              <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
            </el-dropdown-menu>
          )} split-button size="small" type="primary">
        <span>
          更多菜单
        </span>
          </el-dropdown>

          <el-dropdown menu={(
            <el-dropdown-menu>
              <el-dropdown-item onClick={this.onItemClick}>黄金糕</el-dropdown-item>
              <el-dropdown-item>狮子头</el-dropdown-item>
              <el-dropdown-item>螺蛳粉</el-dropdown-item>
              <el-dropdown-item disabled>双皮奶</el-dropdown-item>
              <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
            </el-dropdown-menu>
          )} split-button size="mini" type="primary">
        <span>
          更多菜单
        </span>
          </el-dropdown>
        </div>
      </div>



    )
  }
}
