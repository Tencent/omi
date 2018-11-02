import { tag, WeElement } from 'omi';
import '../../omi-element-ui/el-tag';
import style from './_index.css';

@tag("my-app", true)
class MyApp extends WeElement {
  static get data() {
    return {
      tags:['标签1','标签2','标签3']
    }
  }

  css() {
    return style
  }

  close = item => {
    this.data.tags = this.data.tags.filter(tag => {
        return tag != item
      })
        this.update()
    }

  render(props, data) {
      return (
      <div>
          <div>
            <h3>基础用法</h3>
          <el-tag>标签一</el-tag>
            <el-tag type="success">标签二</el-tag>
            <el-tag type="info" >标签三</el-tag>
            <el-tag type="waring" >标签四</el-tag>
            <el-tag type="danger">标签五</el-tag>
        </div>
        <div>
            <h3>可移除标签</h3>
          <el-tag closable>标签一</el-tag>
            <el-tag type="success" closable>标签二</el-tag>
            <el-tag type="info" closable>标签三</el-tag>
            <el-tag type="waring" closable>标签四</el-tag>
            <el-tag type="danger" closable>标签五</el-tag>
          </div>
          <div>
        <div>
          <h3>动态编辑标签</h3>
          {data.tags.map(item => {
              return <el-tag key={item} closable onClose={() => {
                this.close(item)
              }}>{item}</el-tag>
            })}
          </div>
          <div>
        <div>
          <h3>不同尺寸</h3>
          <el-tag closable>标签一</el-tag>
            <el-tag size="medium" closable>标签一</el-tag>
            <el-tag size="small" closable>标签一</el-tag>
            <el-tag size="mini" closable>标签一</el-tag>
          </div>
      </div>
    );
  }
}
