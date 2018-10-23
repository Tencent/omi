import { tag, WeElement } from 'omi'
import style from './_index.css'
import '../../omi-element-ui/el-breadcrumb'
import '../../omi-element-ui/el-breadcrumb-item'

@tag('my-app')
class MyApp extends WeElement {

  css() {
    return style
  }

  render(props, data) {
    return (
      <div>
        <div>
          <el-breadcrumb separator={"/"}>
            <el-breadcrumb-item >首页</el-breadcrumb-item>
            <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
            <el-breadcrumb-item>活动列表</el-breadcrumb-item>
            <el-breadcrumb-item>活动详情</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
      </div>
    )
  }
}