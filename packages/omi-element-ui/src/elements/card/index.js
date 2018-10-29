import { tag, WeElement } from 'omi'
import style from './_index.css'
import '../../omi-element-ui/el-card'
import '../../omi-element-ui/el-button'

@tag('my-app')
class MyApp extends WeElement {

  css() {
    return style
  }

  render(props, data) {
    let list = [1, 2, 3, 4];
    return (
      <div>
        <div style="margin: 10px;">
          <p> 基础用法：包含标题，内容和操作</p>
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>卡片名称</span>
              <el-button style="float: right; height: 20px; padding: 3px 0" type="text">操作按钮</el-button>
            </div>
            { 
              list.map((item, key) => {
                return (
                  <div key={key} class="text item">
                      {'列表内容 '+ item}
                  </div>
                )
              }) 
              }
          </el-card>
        </div>
        <div style="margin: 10px;">
          <p> 简单卡片：卡片可以只有内容区域。</p>
          <el-card class="box-card">
            { 
              list.map((item, key) => {
                return (
                  <div key={key} class="text item">
                      {'列表内容 '+ item}
                  </div>
                )
              }) 
            }
          </el-card>
        </div>
        <div style="margin: 10px;">
          <p> 带图片：可配置定义更丰富的内容展示</p>
          <el-card class="box-card" body-style={{padding: '0px'}}>
            <img src="/static/images/hamburger.png" class="image" />
            <div style="padding: 14px;">
              <span>好吃的汉堡</span>
              <div class="bottom clearfix">
                <time class="time">{ new Date().toLocaleDateString() }</time>
                <el-button type="text" class="button">操作按钮</el-button>
              </div>
            </div>
          </el-card>
      
        </div>
        <div style="margin: 10px;">
          <p> 卡片阴影</p>
          <div style="margin: 10px;">
            <el-card class="box-card" shadow="always">
              总是显示
            </el-card>
          </div>
          <div style="margin: 10px;">
            <el-card class="box-card" shadow="hover">
              鼠标悬浮时显示
            </el-card>
          </div>
          <div style="margin: 10px;">
            <el-card class="box-card" shadow="never">
              从不显示
            </el-card>
          </div>
        </div>
      </div>
    )
  }
}