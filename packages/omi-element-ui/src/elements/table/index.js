import { tag, WeElement } from 'omi'
import style from './_index.css'
import '../../omi-element-ui/el-table'

@tag('my-app')
class MyApp extends WeElement {

  css() {
    return style
  }

  install () {
    this.data.dataSource = [{
      key: '1',
      name: 'dntzhang',
      age: 32,
      address: '广东省深圳市'
    }, {
      key: '2',
      name: 'zhangsan',
      age: 34,
      address: '西湖区湖底公园1号'
    }, {
      key: '2',
      name: 'lisi',
      age: 42,
      address: '江西南昌'
    }];
    
    this.data.columns = [{
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    }, {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    }, {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
    }];
    
   
  }

  render(props, data) {
    return (
      <div>
        <div>
          <el-table
            data={data}
            style="width: 100%">
          </el-table>
        </div>


      </div>
    )
  }
}