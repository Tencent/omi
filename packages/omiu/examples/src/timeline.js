import { WeElement, define, render } from 'omi'
import '../../src/table'
define('my-app', class extends WeElement {
  dataSource = [{
    name: 'xwang',
    age: 18,
    address: '腾讯大厦'
  }, {
    name: 'dntzhang',
    age: 12,
    address: '滨海大厦'
  }, {
    name: 'dntzhang2',
    age: 12,
    address: '滨海大厦'
  }, {
    name: 'dntzhang3',
    age: 12,
    address: '滨海大厦'
  }, {
    name: 'dntzhang4',
    age: 12,
    address: '滨海大厦'
  }];

  columns = [{
    title: '姓名',
    key: 'name',
  }, {
    title: '年龄',
    key: 'age',
  }, {
    title: '住址',
    key: 'address',
  }]

  render() {
    return (
      <div>
        <o-table dataSource={this.dataSource} columns={this.columns}>
        </o-table>
      </div>


    )
  }
})

render(<my-app />, 'body')
