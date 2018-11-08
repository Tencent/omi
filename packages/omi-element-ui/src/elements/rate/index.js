import { tag, WeElement } from 'omi'
import style from './_index.css'
import '../../omi-element-ui/el-rate'
import '../../omi-element-ui/el-button'

@tag('my-app')
class MyApp extends WeElement {
  css() {
    return style
  }

  handleChange1 = (e)=> {
    this.data.value1 = e.detail
    console.log(e.detail)
    this.update()
  }
  handleChange2 = (e)=> {
    this.data.value2 = e.detail
    console.log(e.detail)
    this.update()
  }
  handleChange3 = (e)=> {
    this.data.value3 = e.detail
    console.log(e.detail)
    this.update()
  }
  handleChange4 = (e)=> {
    this.data.value4 = e.detail
    console.log(this.data.value4)
    console.log(e.detail)
    this.update()
  }
  handleChange5 = (e)=> {
    this.data.value5 = e.detail
    console.log(e.detail)
    this.update()
  }

  install() {
    this.data.value1 = null
    this.data.value2 = null
    this.data.value3 = null
    this.data.value4 = null
    this.data.value5 = 3.7

  }

  render(props, data) {
    let list = [1, 2, 3, 4]
    
    return (
      <div>
        <div style="margin: 10px;">
          <div class="block">
            <span class="demonstration">默认不区分颜色</span>
            <el-rate value={this.data.value1} onChange={this.handleChange1}></el-rate>
          </div>
          <div class="block">
            <span class="demonstration">区分颜色</span>
            <el-rate
              value={this.data.value2}
              onChange={this.handleChange2}
              colors={['#ff0000', '#F7BA2A', '#FF00FF']}>
            </el-rate>
          </div>
        </div>
        <div style="margin: 10px;">
          <p> 辅助文字</p>
          <el-rate
            value={this.data.value3}
            onChange={this.handleChange3}
            allow-half
            show-text>
          </el-rate>
        </div>
        <div style="margin: 10px;">
          <p> 其它 icon</p>
          <el-rate
            value={this.data.value4}
            allow-half
            void-color="#000000"
            low-threshold={2}
            high-threshold={4}
            icon-classes={['el-icon-view', 'el-icon-service', 'el-icon-circle-check-outline']}
            void-icon-class="el-icon-view"
            onChange={this.handleChange4}
            colors={['#99A9BF', '#F7BA2A', '#FF00FF']}>
          </el-rate>
        </div>
        <div style="margin: 10px;">
          <p> 只读：只读的评分用来展示分数，允许出现半星 </p>
          <div style="margin: 10px;">
            <el-rate
              value={this.data.value5}
              onChange={this.handleChange5}
              disabled
              show-score
              text-color="#ff9900"
              score-template="{value}">
            </el-rate>
          </div>
          
        </div>
      </div>
    )
  }
}
